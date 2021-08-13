import * as THREE from 'three';
import { Resolution } from '../types/cores';

export const Camera = (res: Resolution): THREE.PerspectiveCamera => {
  const fieldOfView = 60;
  const near = 0.1;
  const far = 10000;
  const result = new THREE.PerspectiveCamera(
    fieldOfView,
    res.Width / res.Height,
    near,
    far
  );

  result.position.x = 0;
  result.position.y = 200;
  result.position.z = 100;

  return result;
};
