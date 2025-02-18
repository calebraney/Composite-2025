import { attr } from './utilities';
import { hoverActive } from './interactions/hover-active';
import { load } from './interactions/load';
import { marquee } from './interactions/marquee';
import { scrollIn } from './interactions/scroll-in';
import { createSlider } from './interactions/slider';
import { scrolling } from './interactions/scrolling';
import { runSplit } from './utilities';
import SplitType from 'split-type';
import { initLenis } from './interactions/lenis';

document.addEventListener('DOMContentLoaded', function () {
  // Comment out for production
  console.log('Local Script');
  // register gsap plugins if available
  if (gsap.ScrollTrigger !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (gsap.Flip !== undefined) {
    gsap.registerPlugin(Flip);
  }
  let lenis;

  //////////////////////////////
  //Global Variables

  /////////////////////////////
  //Slider instances
  const resultsSlider = function () {
    const COMPONENT = '.results-slider_component';
    const components = [...document.querySelectorAll(COMPONENT)];
    const options = {
      loop: false,
      slidesPerView: 'auto',
    };
    //apply a module with defaults settings (canc override them using the options object above)
    const modules = {
      navigation: true,
      pagination: false,
      scrollbar: false,
      autoplay: false,
    };
    const sliders = createSlider(components, options, modules);
  };

  const testimonialsSlider = function () {
    const COMPONENT = '.testimonials-slider_component';
    const components = [...document.querySelectorAll(COMPONENT)];
    const options = {
      loop: false,
      slidesPerView: 'auto',
    };
    //apply a module with defaults settings (canc override them using the options object above)
    const modules = {
      navigation: true,
      pagination: false,
      scrollbar: false,
      autoplay: false,
    };
    const sliders = createSlider(components, options, modules);
  };

  const aboutHeroSlider = function () {
    const COMPONENT = '.about-hero-slider_component';
    const components = [...document.querySelectorAll(COMPONENT)];
    const options = {
      loop: true,
      slidesPerView: 'auto',
    };
    //apply a module with defaults settings (canc override them using the options object above)
    const modules = {
      navigation: false,
      pagination: false,
      scrollbar: false,
      autoplay: true,
    };
    const sliders = createSlider(components, options, modules);
  };

  const aboutRemoteSlider = function () {
    const COMPONENT = '.remote-slider_component';
    const components = [...document.querySelectorAll(COMPONENT)];
    const options = {
      loop: true,
      slidesPerView: 'auto',
      breakpoints: {
        // mobile
        320: {
          spaceBetween: 16,
        },
        // tablet
        768: {
          spaceBetween: 32,
        },
        // desktop
        992: {
          spaceBetween: 48,
        },
        1280: {
          spaceBetween: 64,
        },
      },
    };
    //apply a module with defaults settings (canc override them using the options object above)
    const modules = {
      navigation: false,
      pagination: false,
      scrollbar: false,
      autoplay: true,
    };
    const sliders = createSlider(components, options, modules);
  };

  const workSlider = function () {
    const COMPONENT = '.work-slider_component';
    const components = [...document.querySelectorAll(COMPONENT)];
    const options = {
      slidesPerView: 'auto',
      breakpoints: {
        // mobile
        320: {
          spaceBetween: 16,
        },
        // tablet
        768: {
          spaceBetween: 32,
        },
        // desktop
        992: {
          spaceBetween: 48,
        },
        1280: {
          spaceBetween: 64,
        },
      },
    };
    //apply a module with defaults settings (canc override them using the options object above)
    const modules = {
      navigation: true,
      pagination: false,
      scrollbar: false,
      autoplay: false,
    };
    const sliders = createSlider(components, options, modules);
  };
  //////////////////////////////
  //Control Functions on page load
  const gsapInit = function () {
    let mm = gsap.matchMedia();
    mm.add(
      {
        //This is the conditions object
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px)  and (max-width: 991px)',
        isDesktop: '(min-width: 992px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (gsapContext) => {
        let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
        //functional interactions
        lenis = initLenis();
        hoverActive(gsapContext);
        marquee(gsapContext);
        load(gsapContext);
        //conditional interactions
        if (!reduceMotion) {
          scrollIn(gsapContext);
          // window.addEventListener('resize', function () {
          //   setTimeout(() => {
          //     scrollIn(gsapContext);
          //   }, 300);
          // });
          scrolling(gsapContext);
        }
        //sliders
        resultsSlider();
        testimonialsSlider();
        aboutHeroSlider();
        aboutRemoteSlider();
        workSlider();
      }
    );
  };
  gsapInit();

  //reset gsap on click of reset triggers
  const scrollReset = function () {
    //selector
    const RESET_EL = '[data-ix-reset]';
    //time option
    const RESET_TIME = 'data-ix-reset-time';
    const resetScrollTriggers = document.querySelectorAll(RESET_EL);
    resetScrollTriggers.forEach(function (item) {
      item.addEventListener('click', function (e) {
        //reset scrolltrigger
        ScrollTrigger.refresh();
        //if item has reset timer reset scrolltriggers after timer as well.
        if (item.hasAttribute(RESET_TIME)) {
          let time = attr(1000, item.getAttribute(RESET_TIME));
          //get potential timer reset
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, time);
        }
      });
    });
  };
  scrollReset();
});
