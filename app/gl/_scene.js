import { Scene, MeshNormalMaterial } from "three";
// import gsap from "gsap";

import Rig from "./rig";

export default class extends Scene {
  constructor({ camera, model }) {
    super();
    this.camera = camera;
    this.model = this.loop(model);

    // this.anim = { sc: 0.1 };
    this.create();
  }

  create() {
    this.rig = new Rig(this.model);
    this.add(this.rig);
  }

  render(t) {
    // console.log(t);
    if (this.rig) this.rig.render(t);
  }

  /**
   * Utils
   */

  loop(model) {
    model.model.traverse((o) => {
      if (o.isMesh) {
        o.material = new MeshNormalMaterial();
        o.frustumCulled = false;
      }

      if (!o.isMesh && o.name === "Camera_Orientation") o.add(this.camera);
    });

    return model;
  }
}
