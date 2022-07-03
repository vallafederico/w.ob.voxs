import { Scene, MeshNormalMaterial } from "three";

import WormholeMaterial from "./mat/worm";
import CloudMaterial from "./mat/clouds";
import BeltMaterial from "./mat/belt";
import DragonMaterial from "./mat/dragon";
import ShelfMaterial from "./mat/shelf";
import CaptainMaterial from "./mat/dragon";
import SoulMaterial from "./mat/soul";
// import gsap from "gsap";

import Rig from "./rig";

export default class extends Scene {
  constructor({ camera, model, textures }) {
    super();
    this.camera = camera;
    this.textures = textures;
    this.model = this.loop(model);
    // console.log(this.souls, this.introSouls);

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
   * Animations
   */

  /**
   * Utils - LOOP THROUGH
   */

  loop(model) {
    // EXPORTS
    this.souls = {};
    this.introSouls = {};

    // materials * BASE
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

        // prettier-ignore
        if (o.name === "m_wormh_pcs" || o.name === "m_wormh")o.material = whMat;
        if (o.name === "m_cloud" || o.name === "m_sky") o.material = cloudMat;
        if (o.name === "m_conv") o.material = beltMat;
        if (o.name === "m_dragon") o.material = dragonMat;
        if (o.name === "m_shelf") o.material = shelfMat;
        if (o.name === "Captain") o.material = CapMat;

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
          }
          if (o.name === "The_Hermit001") {
            this.introSouls.hermit = o;
            o.material = new SoulMaterial({
              u_t1: this.textures.tx_hermit_d,
              u_t2: this.textures.tx_hermit_n,
            });
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
