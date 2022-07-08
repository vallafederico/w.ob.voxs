import { Scene, MeshNormalMaterial, MeshBasicMaterial } from "three";

import WormholeMaterial from "./mat/worm";
import CloudMaterial from "./mat/clouds";
import BeltMaterial from "./mat/belt";
import DragonMaterial from "./mat/dragon";
import ShelfMaterial from "./mat/shelf";
import CaptainMaterial from "./mat/dragon";
import SoulMaterial from "./mat/soul";
import HoleMaterial from "./mat/hole";
// import gsap from "gsap";

import Rig from "./rig";
import Sky from "./sky";

export default class extends Scene {
  constructor({ camera, model, textures }) {
    super();
    this.camera = camera;
    this.textures = textures;
    this.createMaterials();
    this.model = this.loop(model);
    // console.log(this.souls, this.introSouls);

    this.create();
  }

  create() {
    this.rig = new Rig(this.model);
    this.add(this.rig);

    this.sky = new Sky();
    this.add(this.sky);
  }

  render(t) {
    // console.log(t);
    if (this.rig) this.rig.render(t);
  }

  /**
   * Animations
   */

  /**
   * Utils - LOOP THROUGH
   */

  createMaterials() {
    // intro
    this.cloudMat = new CloudMaterial({
      u_t1: this.textures.tx_clouds2,
      u_tm0: this.textures.tx_clouds4,
      u_t2: this.textures.tx_clouds9,
    });

    this.beltMat = new BeltMaterial({
      u_t1: this.textures.tx_conv,
    });

    this.dragonMat = new DragonMaterial({
      u_t1: this.textures.tx_dragon,
    });

    this.shelfMat = new ShelfMaterial({
      u_t1: this.textures.tx_shelf,
    });

    this.capMat = new CaptainMaterial({
      u_t1: this.textures.tx_capitan,
    });

    // GP
    this.whMat = new WormholeMaterial({
      u_t1: this.textures.tx_wormh,
    });
  }

  loop(model) {
    // EXPORTS
    this.souls = {};
    this.introSouls = {};

    model.model.traverse((o) => {
      if (o.isMesh) {
        o.material = new MeshNormalMaterial();
        o.frustumCulled = false;

        if (o.name === "m_wormh_pcs" || o.name === "m_wormh")
          o.material = this.whMat;
        if (o.name === "m_cloud" || o.name === "m_sky")
          o.material = this.cloudMat;
        if (o.name === "m_conv") o.material = this.beltMat;
        if (o.name === "m_dragon") o.material = this.dragonMat;
        if (o.name === "m_shelf") o.material = this.shelfMat;
        if (o.name === "Captain") o.material = this.capMat;
        if (o.name === "white_hole") {
          this.wormEnd = o;
          o.material = new HoleMaterial();
        }

        // souls
        if (o.name.substring(0, 3) === "The") {
          // console.log(o.name);

          if (o.name === "The_Artisan") {
            this.souls.artisan = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_artisan_d,
              u_t2: this.textures.tx_artisan_n,
            });
          }
          if (o.name === "The_Healer4-0") {
            this.souls.healer = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_healer_d,
              u_t2: this.textures.tx_healer_n,
            });
            o.material.daylight = 1;
          }
          if (o.name === "The_Hermit001") {
            this.introSouls.hermit = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_hermit_d,
              u_t2: this.textures.tx_hermit_n,
            });
            o.material.daylight = 1;
          }
          if (o.name === "The_Hermit") {
            this.souls.hermit = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_hermit_d,
              u_t2: this.textures.tx_hermit_n,
            });
          }
          if (o.name === "The_Hunter") {
            this.souls.hunter = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_hunter_d,
              u_t2: this.textures.tx_hunter_n,
            });
          }
          if (o.name === "The_Maverick") {
            this.souls.maverick = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_maverick_d,
              u_t2: this.textures.tx_maverick_n,
            });
          }
          if (o.name === "The_Sage001") {
            this.souls.sage = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_sage_d,
              u_t2: this.textures.tx_sage_n,
            });
          }
          if (o.name === "The_Scholar") {
            this.souls.scholar = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_scholar_d,
              u_t2: this.textures.tx_scholar_n,
            });
          }
          if (o.name === "The_New_Star") {
            this.souls.newStar = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_star_d,
              u_t2: this.textures.tx_star_n,
            });
          }
          if (o.name === "The_Trickster") {
            this.souls.trickster = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_trickster_d,
              u_t2: this.textures.tx_trickster_n,
            });
          }
          if (o.name === "The_Wanderer") {
            this.souls.wanderer = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_wanderer_d,
              u_t2: this.textures.tx_wanderer_n,
            });
          }
          if (o.name === "The_Warrior-1") {
            this.souls.warrior = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_warrior_d,
              u_t2: this.textures.tx_warrior_n,
            });
          }
          if (o.name === "The_Leader001") {
            this.souls.leader = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_leader_d,
              u_t2: this.textures.tx_leader_n,
            });
          }
        }
      }

      if (!o.isMesh && o.name === "Camera_Orientation") o.add(this.camera);
    });

    return model;
  }
}
