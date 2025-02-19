import { attr, checkBreakpoints, runSplit, createTextLines } from '../utilities';
/* CSS in PAGE Head

html:not(.w-editor) [data-ix-load]:not([data-ix-load="stagger"], [data-ix-load-run="false"]) {
	opacity: 0;
}
 html:not(.w-editor) [data-ix-load="stagger"]:not([data-ix-load-run="false"]) > * {
	opacity: 0;
}
*/

export const load = function (gsapContext) {
  //animation ID
  const ANIMATION_ID = 'load';
  // hero animation attribute
  const ATTRIBUTE = 'data-ix-load';
  // hero animation selectors
  const HEADING = 'heading';
  const ITEM = 'item';
  const CARD = 'card';
  const TEXT = 'text';
  const IMAGE = 'image';
  const STAGGER = 'stagger';
  //tween options
  const POSITION = 'data-ix-load-position'; // sequential by default, use "<" to start tweens together
  const DEFAULT_STAGGER = '<0.2';

  //get itema
  const items = [...document.querySelectorAll(`[${ATTRIBUTE}]`)];
  if (items.length === 0) return;

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: 'circ.out',
      duration: 0.6,
    },
  });
  //anything that needs to be set to start the interaction happens here
  //images load tween
  const loadImage = function (item) {
    // get the position attribute or set defautl position
    const position = attr(0, item.getAttribute(POSITION));
    tl.fromTo(
      item,
      { opacity: 0, y: '6rem', rotateX: -5, scale: 0.9 },
      { opacity: 1, y: '0rem', rotateX: 0, scale: 1 },
      position
    );
  };
  //h1 load tween
  const loadHeading = function (item) {
    //check if item is rich text and if it is find the first child and set it to be the heading
    if (item.classList.contains('w-richtext')) {
      item.style.opacity = '1';
      item = item.firstChild;
    }
    //split the text
    const lines = createTextLines(item);
    if (!lines) return;
    // get the position attribute
    const position = attr('<.1', item.getAttribute(POSITION));
    tl.set(item, { opacity: 1 }, position);
    tl.fromTo(
      lines,
      { opacity: 0, y: '1em', rotateX: -80, scale: 0.85 },
      {
        opacity: 1,
        y: '0em',
        rotateX: 0,
        scale: 1,
        duration: 0.8,
        stagger: { each: 0.1, from: 'left' },
      },
      position
    );
  };

  const loadText = function (item) {
    //check if item is rich text and if it is find the first child and set it to be the heading
    if (item.classList.contains('w-richtext')) {
      item.style.opacity = '1';
      item = item.firstChild;
    }
    //split the text
    const lines = createTextLines(item);
    if (!lines) return;
    // get the position attribute
    const position = attr(DEFAULT_STAGGER, item.getAttribute(POSITION));
    tl.set(item, { opacity: 1 }, position);
    tl.fromTo(
      lines,
      { opacity: 0, y: '1em', rotateX: -45 },
      { opacity: 1, y: '0em', rotateX: 0, stagger: { each: 0.1, from: 'left' } },
      position
    );
  };

  //default load tween
  const loadItem = function (item, staggerPosition = null) {
    // get the position attribute
    let position = attr(DEFAULT_STAGGER, item.getAttribute(POSITION));
    //if a specific position is set for staggering update the position of this item accordingly
    if (staggerPosition !== null) {
      position = staggerPosition;
    }
    tl.fromTo(item, { opacity: 0, y: '2rem' }, { opacity: 1, y: '0rem' }, position);
  };

  const loadCard = function (item, staggerPosition = null) {
    // get the position attribute
    let position = attr(DEFAULT_STAGGER, item.getAttribute(POSITION));
    //if a specific position is set for staggering update the position of this item accordingly
    if (staggerPosition !== null) {
      position = staggerPosition;
    }
    tl.fromTo(
      item,
      { opacity: 0, y: '2rem', rotateX: -45, scale: 0.9 },
      { opacity: 1, y: '0rem', rotateX: 0, scale: 1 },
      position
    );
  };

  //add item tween to each element in this parent
  const loadStagger = function (item) {
    if (!item) return;
    //set opacity to 1
    // get the children of the item
    const children = gsap.utils.toArray(item.children);
    if (children.length === 0) return;
    const position = attr('<0.1', item.getAttribute(POSITION));
    children.forEach((child, index) => {
      //first item set parent opacity to 1
      if (index === 0) {
        item.style.opacity = 1;
      }
      loadItem(child, position);
    });
  };
  //get elements in specific orders

  const images = [...document.querySelectorAll(`[${ATTRIBUTE}="${IMAGE}"]`)];

  images.forEach((image) => {
    if (!image) return;
    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(image, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;
    loadImage(image);
  });

  const headings = [...document.querySelectorAll(`[${ATTRIBUTE}="${HEADING}"]`)];

  headings.forEach((heading) => {
    if (!heading) return;
    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(heading, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;
    loadHeading(heading);
  });
  //get all other elements and apply animations
  items.forEach((item) => {
    if (!item) return;
    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(item, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;
    //find the type of the scrolling animation
    const loadType = item.getAttribute(ATTRIBUTE);
    if (loadType === TEXT) {
      loadText(item);
    }
    if (loadType === ITEM) {
      loadItem(item);
    }
    if (loadType === CARD) {
      loadCard(item);
    }
    if (loadType === STAGGER) {
      loadStagger(item);
    }
  });

  //Play interaction on page load
  tl.play(0);
  // Alternatively use the returned tl to trigger the interaction after transition or image load
  return tl;
};
