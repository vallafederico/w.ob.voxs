import { PerspectiveCamera } from "three";
import gsap from "gsap";

export default class extends PerspectiveCamera {
  constructor(fov, aspect, near, far) {
    super();

    this.isSliderMode = false;
    this.sliderCurrent = 0;
  }

  /*
   * Animation
   */

  punchZoom(bool) {
    if (bool) {
      this.isSliderMode = true;
      if (this.punchZoomAnim) this.punchZoomAnim.kill();
      this.punchZoomAnim = gsap.to(this.position, {
        z: -3.7,
        x: this.placements[this.sliderCurrent].x + 1,
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
    console.log("fadeOut");
  }

  /**
   * Slider
   */

  computePlacements() {
    this.placements.forEach((placement) => {
      placement.x = placement.x - this.placements[11].x;
      placement.y = placement.y - this.placements[11].y;
      // placement.z = placement.z - this.placements[11].z;
    });
  }

  toSliderPosition(index) {
    // console.log(index);
    this.sliderCurrent = index;
    if (this.sliderAnim) this.sliderAnim.kill();
    this.sliderAnim = gsap.to(this.position, {
      x: this.placements[index].x + 1,
      y: this.placements[index].y - 0.5,
      duration: 0.8,
      ease: "expo.out",
    });
  }
}
