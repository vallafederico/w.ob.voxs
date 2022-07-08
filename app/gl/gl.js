import Emitter from "tiny-emitter";
import { WebGLRenderer } from "three";
import gsap from "gsap";
import Post from "./pp";

import loadModel from "./util/model-loader";
import loadTexture from "./util/texture-loader";

import { LIB, TX, STX } from "./assets/lib.js";

import Camera from "./_camera";
import Scene from "./_scene";

import Scroll from "./scroll";

export default class extends Emitter {
  constructor() {
    super();
    this.time = 0;
    this.isActive = false;
    this.sceneAnimation = { intro: 0 };
  }

  setup({ canvas, scrollElement, ctaElement, sliderElement }) {
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
    // this.camera.position.set(0, 0, 0);

    this.load();

    this.paused = false;
  }

  /**
   * Loading & Init Ops
   */
  async load() {
    console.time("loading");
    this.loaded = {};
    console.time("MODEL load");

    const [
      tx_wormh,
      tx_clouds2,
      tx_clouds4,
      tx_clouds9,
      tx_conv,
      tx_dragon,
      tx_shelf,
      tx_capitan,
    ] = await Promise.all([
      loadTexture(TX.tx_wormh),
      loadTexture(TX.tx_clouds2),
      loadTexture(TX.tx_clouds4),
      loadTexture(TX.tx_clouds9),
      loadTexture(TX.tx_conv),
      loadTexture(TX.tx_dragon),
      loadTexture(TX.tx_shelf),
      loadTexture(TX.tx_capitan),
    ]);

    this.emit("loading", 30); // >>>>>>>>>>>> Emitting first loading Event (30%)

    const [model] = await Promise.all([loadModel(LIB.model)]);
    console.timeEnd("MODEL load");
    this.emit("loading", 82); // >>>>>>>>>>>> Emitting first loading Event (80%)

    // * Souls Loading
    console.time("SOULS load");
    const [
      tx_artisan_d,
      tx_artisan_n,
      tx_healer_d,
      tx_healer_n,
      tx_hermit_d,
      tx_hermit_n,
      tx_hunter_d,
      tx_hunter_n,
      tx_leader_d,
      tx_leader_n,
      tx_maverick_d,
      tx_maverick_n,
      tx_sage_d,
      tx_sage_n,
      tx_scholar_d,
      tx_scholar_n,
      tx_star_d,
      tx_star_n,
      tx_trickster_d,
      tx_trickster_n,
      tx_wanderer_d,
      tx_wanderer_n,
      tx_warrior_d,
      tx_warrior_n,
    ] = await Promise.all([
      loadTexture(STX.tx_artisan_d),
      loadTexture(STX.tx_artisan_n),
      loadTexture(STX.tx_healer_d),
      loadTexture(STX.tx_healer_n),
      loadTexture(STX.tx_hermit_d),
      loadTexture(STX.tx_hermit_n),
      loadTexture(STX.tx_hunter_d),
      loadTexture(STX.tx_hunter_n),
      loadTexture(STX.tx_leader_d),
      loadTexture(STX.tx_leader_n),
      loadTexture(STX.tx_maverick_d),
      loadTexture(STX.tx_maverick_n),
      loadTexture(STX.tx_sage_d),
      loadTexture(STX.tx_sage_n),
      loadTexture(STX.tx_scholar_d),
      loadTexture(STX.tx_scholar_n),
      loadTexture(STX.tx_star_d),
      loadTexture(STX.tx_star_n),
      loadTexture(STX.tx_trickster_d),
      loadTexture(STX.tx_trickster_n),
      loadTexture(STX.tx_wanderer_d),
      loadTexture(STX.tx_wanderer_n),
      loadTexture(STX.tx_warrior_d),
      loadTexture(STX.tx_warrior_n),
    ]);
    console.timeEnd("SOULS load");
    this.emit("loading", 100); // >>>>>>>>>>>> Emitting first loading Event (80%)

    this.loaded.model = model;
    this.textures = {
      // basic
      tx_wormh,
      tx_clouds2,
      tx_clouds4,
      tx_clouds9,
      tx_conv,
      tx_dragon,
      tx_shelf,
      tx_capitan,
      // souls
      tx_artisan_d,
      tx_artisan_n,
      tx_healer_d,
      tx_healer_n,
      tx_hermit_d,
      tx_hermit_n,
      tx_hunter_d,
      tx_hunter_n,
      tx_leader_d,
      tx_leader_n,
      tx_maverick_d,
      tx_maverick_n,
      tx_sage_d,
      tx_sage_n,
      tx_scholar_d,
      tx_scholar_n,
      tx_star_d,
      tx_star_n,
      tx_trickster_d,
      tx_trickster_n,
      tx_wanderer_d,
      tx_wanderer_n,
      tx_warrior_d,
      tx_warrior_n,
    };

    // -------- *** POST LOAD ops
    console.time("POST load");
    for (const tx in this.textures) this.textures[tx].flipY = false;

    this.camera.placements = this.findCamPlacements(this.loaded.model.model);
    this.camera.computePlacements();

    this.create();
    this.emit("loaded"); // >>>>>>>>>>>> Emitting last loading Event (100%)
    console.timeEnd("POST load");
    console.timeEnd("loading");
    this.playIntro();

    this.isActive = true;
  }

  findCamPlacements(model) {
    const camPlacements = [];
    model.traverse((o) => {
      if (!o.isMesh && o.name.substring(0, 6) === "place_") {
        // console.log(o.name);
        camPlacements.push(o.position);
      }
    });

    return camPlacements;
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

    this.setupEvents();
    this.initPost();
  }

  initPost() {
    this.post = new Post(this.renderer, this.scene, this.camera);
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
      this.scene.sky.position.y = this.scroll.scroller.step * 200;

      this.scene.wormEnd.material.open = this.scroll.scroller.step;
    }

    this.post?.isActive
      ? this.post.render(this.time)
      : this.renderer.render(this.scene, this.camera);

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

    // slider events
  }

  /**
   * Animations
   */

  setupEvents() {
    this.scroll.on("sliderIn", (bool) => this.camera.punchZoom(bool));
    this.scroll.on("ctaIn", (bool) => this.camera.fadeOut(bool));
  }

  playIntro() {
    /*** DURATION 6 */
    // animation time
    gsap.to(this.sceneAnimation, {
      intro: 1,
      duration: 6,
      delay: 2,
      ease: "power1",
      onUpdate: () => this.introTime(this.sceneAnimation.intro),
      onComplete: () => this.emit("canScroll"),
    });
  }

  introTime(t) {
    // Playhead
    this.scene.rig.skin.time.intro = t * 7.83565614415884;
    // Clouds Shader
    this.scene.cloudMat.daylight = t;
    this.scene.dragonMat.daylight = t;
    this.scene.beltMat.daylight = t;
    this.scene.introSouls.hermit.material.daylight = 1 - t;
    this.scene.souls.healer.material.daylight = 1 - t;
    // sky Shader
    this.scene.sky.material.daylight = t;
  }

  /**
   * DOM Events
   */

  soulIndexChanged({ soulIndex }) {
    this.camera.toSliderPosition(soulIndex);
  }

  soulInChanged({ soulIn }) {
    this.camera.soulIn(soulIn);
  }
}
