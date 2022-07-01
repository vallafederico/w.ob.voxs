import { GLTFLoader } from "./GLTFLoader.js";

export default (url, id) => {
  const loader = new GLTFLoader();

  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => {
      const result = {
        model: gltf.scene,
        anim: gltf.animations,
      };

      resolve(result);
    });
  });
};
