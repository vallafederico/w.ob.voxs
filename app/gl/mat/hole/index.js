import { ShaderMaterial, DoubleSide } from "three";

// import vertexShader from "./vertex.vert";
// import fragmentShader from "./fragment.frag";

const vertexShader = `
#define MPI 3.1415926535897932384626433832795

uniform float u_time;
varying vec2 v_uv;


void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv;
}
`;

const fragmentShader = `
uniform float open;
uniform float u_time;
// uniform sampler2D u_t1; vec4 img = texture2D(u_t1, v_uv);

varying vec2 v_uv;
// varying vec3 vPosition;


void main() {

  float remap = open;
  float circ = distance(v_uv, vec2(.5, .45));
  circ = smoothstep(.5 * remap, 1. * remap, circ);


  gl_FragColor = vec4(1., 1., 1., circ);
  // gl_FragColor = vec4(1., 0., 0., 1.);
}
`;

export default class extends ShaderMaterial {
  constructor(options) {
    super({
      vertexShader,
      fragmentShader,
    });

    this.uniforms = {
      u_time: { value: options?.u_time || 0 },
      // u_t1: { value: options?.u_t1 || null },
      open: { value: 0 },
    };

    this.side = DoubleSide;
    // this.wireframe= true;
    this.transparent = true;
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }

  set open(val) {
    this.uniforms.open.value = val;
  }
}
