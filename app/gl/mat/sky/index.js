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
uniform float u_daylight;
varying vec2 v_uv;

const vec3 sky_dark = vec3(0.058823529411764705, 0.10196078431372549, 0.3568627450980392);
const vec3 sky_light = vec3(0.3215686274509804, 0.5529411764705883, 0.7725490196078432);
const vec3 col_bg = vec3(0.9176470588235294, 0.9098039215686274, 0.8705882352941177);
const vec3 col_black = vec3(0., 0., 0.);


void main() {
  float mask = distance(v_uv.y, 0.);
  mask = smoothstep(1., .5, mask);
  float finishController = smoothstep(.8, 1., u_daylight);
  float finalMask = smoothstep(0., 1., mask * u_daylight + finishController);
  
  vec3 final = mix(sky_dark, sky_light, finalMask);

  /* SUN */
  float sun = distance(v_uv, vec2(
    .5, 
    .5 + u_daylight * .05 
  ));
  sun = smoothstep(0., u_daylight * .06, sun);
  sun = smoothstep(1., 0., sun);

  /* GRADIENT */
  float y_grad = distance(v_uv.y, 0.);
  y_grad = smoothstep(.0, .8, y_grad);

  final += sun;
  final = mix(col_bg, final, y_grad);

  // final mix with black
  float final_mix = smoothstep(0., .3, u_daylight);
  vec3 mixed_final = mix(col_black, final, final_mix);

  gl_FragColor = vec4(mixed_final, 1.);
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
      u_daylight: { value: 0 },
    };

    this.side = DoubleSide;
    // this.wireframe= true;
    // this.transparent = true;

    // this.depthTest = false;
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }

  set daylight(val) {
    this.uniforms.u_daylight.value = val;
  }
}
