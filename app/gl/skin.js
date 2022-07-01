import { AnimationMixer, Clock } from "three";
// import gsap from "gsap";

export default class {
  constructor(clips, model) {
    this.clips = clips;
    this.model = model;
    this.clock = new Clock();
    this.mixer = new AnimationMixer(this.model);
    this.getClipValue();
    this.setAllClips();
    this.goToTime(this.timeSteps.minTime);

    // intro animation - SETUP
    this.goToTime(0);
  }

  getClipValue() {
    const singleClip = this.clips[0].duration;
    this.time = { current: 0, intro: 0 };
    // console.log(singleClip);

    this.timeSteps = {
      intro: 7.83565614415884,
      minTime: singleClip / 2,
      single: singleClip / 2,
      total: singleClip * 0.999,
    };
  }

  setAllClips() {
    this.clips.forEach((clip) => {
      //   console.log(clip.duration, clip.name);
      this.mixer.clipAction(clip).play();
    });
  }

  goToTime(time) {
    // const remappedTime = this.time.current + time * (this.timeSteps.total - 8);
    const remappedTime =
      this.time.intro + time * (this.timeSteps.total - this.timeSteps.intro);

    this.mixer.setTime(remappedTime);
  }

  /**
   * Animations
   */
}

/**
 * ---- NOTES
 *
 * Intro Animaiton Duration 7.83565614415884
 */

/*
  playIntro(duration = 5) {
    // // this.tweenToTime(8, duration);
    // gsap.to(this.time, {
    //   current: 7.5,
    //   duration: duration,
    //   ease: "expo.inOut",
    //   onUpdate: () => {
    //     this.mixer.setTime(this.time.current);
    //   },
    // });
  }
  
*/
