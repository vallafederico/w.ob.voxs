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
uniform sampler2D u_tm0;
uniform float u_daylight;
varying vec2 v_uv;


void main() {
  vec3 img1 = texture2D(u_t1, v_uv).rgb;
  vec3 img2 = texture2D(u_t2, v_uv).rgb;
  vec3 img3 = texture2D(u_tm0, v_uv).rgb;
  float alpha = texture2D(u_t1, v_uv).a;

  // masking OPS
  float mask = distance(img1.r, img2.r);
  float finishController = smoothstep(.0, 1., u_daylight);
  float finalMask = smoothstep(0., 1., mask * u_daylight + finishController);

  // mixing OPS
  float step1 = smoothstep(0., .5, finalMask);
  float step2 = smoothstep(.5, 1., finalMask);

  vec3 final = mix(img1, img3, step1); 
  final = mix(final, img2, step2);

  gl_FragColor.rgb = final;
  gl_FragColor.a = alpha;
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
      u_daylight: { value: 0 },
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
