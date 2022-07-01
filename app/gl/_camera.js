import { PerspectiveCamera } from "three";
import gsap from "gsap";

export default class extends PerspectiveCamera {
  constructor(fov, aspect, near, far) {
    super();
    // this.createAnimationTrack();
  }

  // createAnimationTrack() {
  //   this.timeline = gsap.timeline({
  //     paused: true,
  //   });

  //   // --- TIMELINE
  //   this.timeline.to(this.position, {
  //     y: -6,
  //     duration: 1,
  //     delay: 0.1,
  //     ease: "linear",
  //   });

  //   this.timeline.to(
  //     this.rotation,
  //     {
  //       x: -1.5,
  //       duration: 0.5,
  //       delay: 0.2,
  //       ease: "linear",
  //     },
  //     "<"
  //   );
  // }

  // animateThroughTrack(time) {
  //   // console.log(time);
  //   this.timeline.seek(time);
  // }
}
