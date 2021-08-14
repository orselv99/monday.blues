import * as THREE from 'three';
import { TerrainInfo } from '../types/components';

// 왕창 큰 구체를 회전시키자
export const Terrain = (color: number): TerrainInfo => {
  const geometry = new THREE.CylinderGeometry(800, 600, 800, 40, 10);
  geometry.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

  const material = new THREE.MeshPhongMaterial({
    color: color,
    transparent: true,
    opacity: 0.6,
    flatShading: true,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.receiveShadow = true;
  mesh.position.y = -500;

  return {
    geometry: geometry,
    material: material,
    mesh: mesh,
  };
};
