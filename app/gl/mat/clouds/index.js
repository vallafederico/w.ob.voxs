import { ShaderMaterial, DoubleSide } from "three";

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
uniform sampler2D u_t1;
uniform sampler2D u_t2;
uniform float u_daylight;

varying vec2 v_uv;


void main() {
  vec4 img = texture2D(u_t1, v_uv);
  vec4 img_night = texture2D(u_t2, v_uv);

  // fade to transparent 
  // float bot_grad = distance(0.0, v_uv.y);
  // bot_grad = smoothstep(1.0, 0.2, bot_grad);

  img = mix(img, img_night, u_daylight);

  gl_FragColor.rgb = img.rgb;
  // gl_FragColor.rgb = vec3(bot_grad);
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
      u_tm0: { value: options?.u_tm0 || null },
      u_t2: { value: options?.u_t2 || null },
      u_daylight: { value: 1 },
    };

    this.side = DoubleSide;
    // this.wireframe= true;
    this.transparent = true;
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }

  set daylight(val) {
    this.uniforms.u_daylight.value = val;
  }
}
