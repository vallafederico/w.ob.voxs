import { PerspectiveCamera } from "three";
import gsap from "gsap";

export default class extends PerspectiveCamera {
  constructor(fov, aspect, near, far) {
    super();

    this.isSliderMode = false;
    this.sliderCurrent = 0;
    this.mouse = { x: 0, y: 0, ex: 0, ey: 0 };

    if (window.innerWidth < window.innerHeight) this.isMobile = true;

    this.addZ = -3;
    if (this.isMobile) this.addZ = -2;
    this.rPosX = 1.1;

    this.fov = 28;
    this.initEvents();
  }

  initEvents() {
    if (this.isMobile) return;
    const wX = window.innerWidth,
      wY = window.innerHeight;

    document.onmousemove = (e) => {
      this.mouse.x = -((e.clientX / wX) * 2 - 1) * 0.02;
      this.mouse.y = -((e.clientY / wY) * 2 - 1) * 0.02;
      this.rotateCam(this.mouse);
    };
  }

  rotateCam({ x, y }) {
    if (this.isSliderMode) {
      gsap.to(this.rotation, {
        x: y * 2,
        y: x * 2,
        duration: 1,
        ease: "slow.inOut",
      });
    } else {
      gsap.to(this.rotation, {
        x: y,
        y: x,
        duration: 1,
        ease: "slow.inOut",
      });
    }
  }

  /*
   * Animation
   */

  punchZoom(bool) {
    // movement z
    let z = this.addZ;

    if (bool) {
      this.isSliderMode = true;
      if (this.punchZoomAnim) this.punchZoomAnim.kill();
      this.punchZoomAnim = gsap.to(this.position, {
        z: z,
        x: this.placements[this.sliderCurrent].x,
        y: this.placements[this.sliderCurrent].y - 0.5,
        ease: "expo.out",
        duration: 1,
      });
    } else {
      this.isSliderMode = false;
      if (this.punchZoomAnim) this.punchZoomAnim.kill();
      this.punchZoomAnim = gsap.to(this.position, {
        z: 0,
        x: 0,
        y: 0,
        ease: "expo.out",
        duration: 1,
      });
    }
  }

  fadeOut(bool) {
    // console.log("fadeOut");
    if (bool) {
      this.isSliderMode = true;
      if (this.punchZoomAnim) this.punchZoomAnim.kill();
      this.punchZoomAnim = gsap.to(this.position, {
        z: -3,
        x: this.placements[this.sliderCurrent].x,
        y: this.placements[this.sliderCurrent].y - 0.5,
        ease: "expo.out",
        duration: 1,
      });
    }
  }

  soulIn(bool) {
    let z = this.addZ - 0.5;
    let x = this.isMobile ? 0 : 0.2;

    if (bool) {
      this.isSliderMode = true;
      if (this.punchZoomAnim) this.punchZoomAnim.kill();
      this.punchZoomAnim = gsap.to(this.position, {
        z: z,
        x: this.placements[this.sliderCurrent].x + x,
        y: this.placements[this.sliderCurrent].y - 0.5,
        ease: "expo.out",
        duration: 1,
      });
    } else {
      this.isSliderMode = false;
      if (this.punchZoomAnim) this.punchZoomAnim.kill();
      this.punchZoomAnim = gsap.to(this.position, {
        z: this.addZ,
        x: this.placements[this.sliderCurrent].x,
        y: this.placements[this.sliderCurrent].y - 0.5,
        ease: "expo.out",
        duration: 1,
      });
    }
  }

  /**
   * Slider
   */

  computePlacements() {
    this.placements.forEach((placement) => {
      placement.y = placement.y - this.placements[11].y;
    });
  }

  toSliderPosition(index) {
    // console.log(index);
    this.sliderCurrent = index;
    if (this.sliderAnim) this.sliderAnim.kill();
    this.sliderAnim = gsap.to(this.position, {
      x: this.placements[index].x, //+ 1,
      y: this.placements[index].y - 0.5,
      duration: 0.8,
      ease: "expo.out",
    });
  }
}
