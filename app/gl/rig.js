import { Group } from "three";
import Skin from "./skin";

export default class extends Group {
  constructor(data, textures) {
    super();
    this.data = data;

    // scroll parameters
    this.scroll = 0;
    this.sliderProgress = 0;
    this.ctaProgress = 0;

    this.create();
  }

  create() {
    this.add(this.data.model);
    this.skin = new Skin(this.data.anim, this.data.model);
  }

  render(t) {
    if (this.skin) this.skin.goToTime(this.scroll);
    // this.position.x = Math.sin(t);
    // console.log(this.ctaProgress);
    // if (this.ctaProgress !== 0) {

    // }
  }
}
