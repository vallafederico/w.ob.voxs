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
uniform float u_time;
// uniform sampler2D u_t1; vec4 img = texture2D(u_t1, v_uv);

varying vec2 v_uv;
// varying vec3 vPosition;


void main() {

  float central_grad = distance(vec2(0.5), v_uv);
  central_grad = smoothstep(.5, 0., central_grad);


  gl_FragColor = vec4(1., 1., 1., central_grad);
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
      u_t1: { value: options?.u_t1 || null },
    };

    this.side = DoubleSide;
    this.transparent = true;
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }
}
