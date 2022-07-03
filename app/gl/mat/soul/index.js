import { ShaderMaterial, DoubleSide } from "three";

const vertexShader = `
#define MPI 3.1415926535897932384626433832795

#include <skinning_pars_vertex>

attribute vec2 uv2;
uniform float u_time;
varying vec2 v_uv;


void main() {
  #include <uv_vertex>
  #include <skinbase_vertex>
  vec3 pos = position;

  vec4 tr = modelViewMatrix * vec4(position, 1.0);

  //gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  v_uv = uv2;

  #include <begin_vertex>
  // #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <worldpos_vertex>
}
`;

const fragmentShader = `
uniform float u_time;
uniform sampler2D u_t1;
uniform sampler2D u_t2;
uniform float u_daylight;

varying vec2 v_uv;
// varying vec3 vPosition;


void main() {
  vec4 img = texture2D(u_t1, v_uv);
  vec4 img_night = texture2D(u_t2, v_uv);

  img = mix(img, img_night, u_daylight + .1);

  gl_FragColor.rgb = img.rgb;
  gl_FragColor.a = 1.;
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

    // this.side = DoubleSide;
    // this.wireframe = true;
    // this.transparent= true;
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }

  set daylight(val) {
    this.uniforms.u_daylight.value = val;
  }
}
