import Emitter from "tiny-emitter";
import { WebGLRenderer } from "three";
import gsap from "gsap";

import loadModel from "./util/model-loader";
import loadTexture from "./util/texture-loader";

import { LIB, TX } from "./assets/lib.js";

import Camera from "./_camera";
import Scene from "./_scene";

import Scroll from "./scroll";

export default class extends Emitter {
  constructor() {
    super();
    this.time = 0;
    this.sceneAnimation = { intro: 0 };
  }

  setup({ canvas, scrollElement, ctaElement, sliderElement }) {
    // console.log("GL SETUP", canvas);

    /* Dom Elements */
    this.scrollElement = scrollElement;
    this.ctaElement = ctaElement;
    this.sliderElement = sliderElement;

    /* Init WebGl */
    this.renderer = new WebGLRenderer(canvas);
    this.renderer.antialias = true;
    // this.renderer.outputEncoding = sRGBEncoding;

    this.vp = {
      w: window.innerWidth,
      h: window.innerHeight,
      aspect: function () {
        return this.w / this.h;
      },
      pixelRatio: Math.min(window.devicePixelRatio, 2),
      container: canvas,
    };

    this.renderer.setPixelRatio(this.vp.pixelRatio);
    this.renderer.setSize(this.vp.w, this.vp.h);
    canvas.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0xeae8de, 1); // 0xeae8de

    // camera
    this.camera = new Camera(50, this.vp.aspect(), 0.00001, 1000);
    this.camera.position.set(0, 0, 0);

    this.load();

    this.paused = false;
  }

  /**
   * Loading & Init Ops
   */
  async load() {
    this.loaded = {};

    // Loading Ops
    this.loaded.model = await loadModel(LIB.model);

    const tx_wormh = await loadTexture(TX.tx_wormh);
    const tx_clouds2 = await loadTexture(TX.tx_clouds2);
    const tx_clouds4 = await loadTexture(TX.tx_clouds4);
    const tx_clouds9 = await loadTexture(TX.tx_clouds9);
    const tx_conv = await loadTexture(TX.tx_conv);
    const tx_dragon = await loadTexture(TX.tx_dragon);
    const tx_shelf = await loadTexture(TX.tx_shelf);
    const tx_capitan = await loadTexture(TX.tx_capitan);

    this.textures = {
      tx_wormh,
      tx_clouds2,
      tx_clouds4,
      tx_clouds9,
      tx_conv,
      tx_dragon,
      tx_shelf,
      tx_capitan,
    };

    // flipY
    for (const tx in this.textures) this.textures[tx].flipY = false;

    this.create();
    this.emit("loaded");
    this.playIntro();
  }

  create() {
    this.scene = new Scene({
      camera: this.camera,
      model: this.loaded.model,
      textures: this.textures,
    });

    this.initEvents();
    this.render();

    // Init Scroll Track
    this.scroll = new Scroll(
      this.scrollElement,
      this.ctaElement,
      this.sliderElement
    );
  }

  /**
   * Render Loop
   */

  render() {
    if (this.paused) return;
    this.time += 0.01;

    if (this.scene) this.scene.render(this.time);

    if (this.scroll) {
      this.scene.rig.scroll = this.scroll.scroller.step;
      this.scene.rig.sliderProgress = this.scroll.scroller.slider;
      this.scene.rig.ctaProgress = this.scroll.scroller.cta;
    }

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }

  /**
   * Resize Event
   */

  resize() {
    // console.log("resize Event");
    this.vp.w = this.vp.container.offsetWidth;
    this.vp.h = this.vp.container.offsetHeight;

    this.renderer.setSize(this.vp.w, this.vp.h);
    this.camera.aspect = this.vp.w / this.vp.h;
    this.camera.updateProjectionMatrix();

    this.resizeChild();
  }

  resizeChild() {}

  /**
   * Handle Events
   */

  initEvents() {
    // resize
    new ResizeObserver((entry) => this.resize(entry[0].contentRect)).observe(
      this.vp.container
    );

    // tab
    document.addEventListener("visibilitychange", () => {
      document.hidden ? (this.paused = true) : (this.paused = false);
    });
  }

  /**
   * Animations
   */

  playIntro() {
    gsap.to(this.sceneAnimation, {
      intro: 1,
      duration: 0.5,
      delay: 0.2,
      ease: "power2.out",
      onUpdate: () => {
        this.scene.rig.skin.time.intro =
          this.sceneAnimation.intro * 7.83565614415884;
      },
      onComplete: () => this.emit("canScroll"),
    });
  }
}
