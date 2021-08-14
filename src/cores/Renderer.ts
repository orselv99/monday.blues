import * as THREE from 'three';
import { Resolution } from '../types/cores';

export const Renderer = (resolution: Resolution): THREE.WebGLRenderer => {
  const result = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  result.setSize(resolution.width, resolution.height);
  result.shadowMap.enabled = true;
  return result;
};
