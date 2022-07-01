import { Scene, MeshNormalMaterial } from "three";

import WormholeMaterial from "./mat/worm";
import CloudMaterial from "./mat/clouds";
import BeltMaterial from "./mat/belt";
import DragonMaterial from "./mat/dragon";
import ShelfMaterial from "./mat/shelf";
import CaptainMaterial from "./mat/dragon";
// import gsap from "gsap";

import Rig from "./rig";

export default class extends Scene {
  constructor({ camera, model, textures }) {
    super();
    this.camera = camera;
    this.textures = textures;
    this.model = this.loop(model);

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
    this.sliderPlacements = [];
    // matrials
    const whMat = new WormholeMaterial({
      u_t1: this.textures.tx_wormh,
    });

    const cloudMat = new CloudMaterial({
      u_t1: this.textures.tx_clouds2,
      u_tm0: this.textures.tx_clouds4,
      u_t2: this.textures.tx_clouds9,
    });

    const beltMat = new BeltMaterial({
      u_t1: this.textures.tx_conv,
    });

    const dragonMat = new DragonMaterial({
      u_t1: this.textures.tx_dragon,
    });

    const shelfMat = new ShelfMaterial({
      u_t1: this.textures.tx_shelf,
    });

    const CapMat = new CaptainMaterial({
      u_t1: this.textures.tx_capitan,
    });

    model.model.traverse((o) => {
      if (o.isMesh) {
        o.material = new MeshNormalMaterial();
        o.frustumCulled = false;

        if (o.name === "m_wormh_pcs" || o.name === "m_wormh") {
          o.material = whMat;
        }

        if (o.name === "m_cloud" || o.name === "m_sky") {
          o.material = cloudMat;
        }

        if (o.name === "m_conv") {
          o.material = beltMat;
        }

        if (o.name === "m_dragon") {
          o.material = dragonMat;
        }

        if (o.name === "m_shelf") {
          o.material = shelfMat;
        }

        if (o.name === "Captain") {
          o.material = CapMat;
        }
      }

      if (!o.isMesh) {
        if (o.name === "Camera_Orientation") o.add(this.camera);
        // if (o.name.substring(0, 6) === "place_") {
        //   this.sliderPlacements.push(o.position);
        //   // console.log(o.name);
        // }
      }
    });

    return model;
  }
}
