export type Resolution = {
  height: number;
  width: number;
};

export type CoreParameter = {
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
};
