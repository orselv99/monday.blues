import * as THREE from 'three';
import { Resolution } from '../types/cores';

export const Renderer = (res: Resolution): THREE.WebGLRenderer => {
  const result = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  result.setSize(res.Width, res.Height);
  result.shadowMap.enabled = true;
  return result;
};
