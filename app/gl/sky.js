import { Mesh, PlaneBufferGeometry } from "three";
import SkyMaterial from "./mat/sky";

export default class Sky extends Mesh {
  constructor() {
    super();

    this.geometry = new PlaneBufferGeometry(200, 200, 1, 1);
    this.material = new SkyMaterial();

    this.position.z = -37;
  }
}
