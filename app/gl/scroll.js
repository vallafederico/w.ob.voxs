import gsap from "gsap";
import Emitter from "tiny-emitter";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

export default class extends Emitter {
  constructor(scrollEl, ctaEl, sliderEl) {
    super();
    this.scrollEl = scrollEl;
    this.ctaEl = ctaEl;
    this.sliderEl = sliderEl;

    this.scroller = {
      active: false,
      step: 0,
      cta: 0,
      slider: 0,
      sliderActive: false,
      ctaActive: false,
    };

    this.init();
  }

  init() {
    gsap.registerPlugin(ScrollTrigger);

    // create MAIN SCROLL CONTROL
    ScrollTrigger.create({
      trigger: this.scrollEl,
      start: "top bottom",
      end: "bottom top",
      // onToggle: (self) => (this.scroller.active = self.isActive),
      onUpdate: (self) => {
        this.scroller.step = self.progress;
        // console.log(this.scroller.step);
      },
    });

    // create SLIDER SCROLL CONTROL
    ScrollTrigger.create({
      trigger: this.sliderEl,
      start: "top center",
      end: "bottom bottom",
      onToggle: (self) => this.toggleSliderZoom(self.isActive),
      // onUpdate: (self) => {
      //   this.scroller.slider = self.progress;
      //   // console.log(this.scroller.slider);
      // },
    });

    // create CTA SCROLL CONTROL
    ScrollTrigger.create({
      trigger: this.ctaEl,
      start: "top bottom",
      end: "bottom bottom",
      onToggle: (self) => this.toggleCtaZoom(self.isActive),
      onUpdate: (self) => {
        this.scroller.cta = self.progress;
        // console.log(this.scroller.cta);
      },
    });
  }

  toggleSliderZoom(bool) {
    // console.log(bool);
    this.emit("sliderIn", bool);
  }

  toggleCtaZoom(bool) {
    this.emit("ctaIn", bool);
  }
}
