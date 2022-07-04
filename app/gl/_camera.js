import { PerspectiveCamera } from "three";
import gsap from "gsap";

export default class extends PerspectiveCamera {
  constructor(fov, aspect, near, far) {
    super();

    this.isSliderMode = false;
    this.sliderCurrent = 0;

    this.addZ = -1;
    this.rPosX = 1.1;
    this.position.z = this.addZ;
  }

  /*
   * Animation
   */

  punchZoom(bool) {
    if (bool) {
      this.isSliderMode = true;
      if (this.punchZoomAnim) this.punchZoomAnim.kill();
      this.punchZoomAnim = gsap.to(this.position, {
        z: -4,
        x: this.placements[this.sliderCurrent].x + this.rPosX,
        y: this.placements[this.sliderCurrent].y - 0.5,
        ease: "expo.out",
        duration: 1,
      });
    } else {
      this.isSliderMode = false;
      if (this.punchZoomAnim) this.punchZoomAnim.kill();
      this.punchZoomAnim = gsap.to(this.position, {
        z: this.addZ,
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
    console.log(this.placements[1].x - this.placements[11].x);
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
