import { ShaderMaterial, DoubleSide } from "three";

// import vertexShader from "./vertex.vert";
// import fragmentShader from "./fragment.frag";

const vertexShader = `
#define MPI 3.1415926535897932384626433832795
 
attribute vec2 uv2;
uniform float u_time;
varying vec2 v_uv;


void main() {
  vec3 pos = position;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv2;
}
`;

const fragmentShader = `
uniform float u_time;
uniform sampler2D u_t1;
uniform sampler2D u_t2;
uniform float u_daylight;

varying vec2 v_uv;
// varying vec3 vPosition;

const vec4 col_black = vec4(0., 0., 0., 1.);


void main() {
  vec4 img = texture2D(u_t1, v_uv);
  // vec4 img_night = texture2D(u_t2, v_uv);


  img = mix(col_black, img, u_daylight);

  gl_FragColor.rgb = img.rgb;
  gl_FragColor.a = img.a;
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
      u_t2: { value: options?.u_t2 || null },
      u_daylight: { value: 0 },
    };

    this.side = DoubleSide;
    // this.wireframe= true;
    // this.transparent= true;
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }

  set daylight(val) {
    this.uniforms.u_daylight.value = val;
  }
}
