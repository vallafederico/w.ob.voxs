import { Vector2 } from "three";
import { EffectComposer } from "./util/postprocessing/EffectComposer";
import { RenderPass } from "./util/postprocessing/RenderPass";
import { UnrealBloomPass } from "./util/postprocessing/UnrealBloomPass";

export default class Post {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    this.composer = new EffectComposer(renderer);

    this.create();
    this.isActive = true;
  }

  create() {
    // render
    this.rpass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.rpass);

    this.createBloom();
  }

  createBloom() {
    const bloomMultip = 1;
    const bloomPass = new UnrealBloomPass(
      new Vector2(
        window.innerWidth * bloomMultip,
        window.innerHeight * bloomMultip
      ),
      0.19,
      0.2,
      0.1
    );

    this.composer.addPass(bloomPass);
  }

  render(t) {
    if (!this.isActive) return;
    this.composer.render(t);
  }
}
