import * as THREE from 'three';
import { Camera, Renderer } from './cores';
import { Resolution } from './types/cores';

const resolution: Resolution = {
  Width: window.innerWidth * 0.9,
  Height: window.innerHeight * 0.9,
};
const camera = Camera(resolution);
const renderer = Renderer(resolution);

const windowResizeHandler = () => {
  resolution.Width = window.innerWidth;
  resolution.Height = window.innerHeight;
  renderer.setSize(resolution.Width, resolution.Height);
  camera.aspect = resolution.Width / resolution.Height;
  camera.updateProjectionMatrix();
};

window.onload = () => {
  console.log('on Load');

  const container = document.getElementById('world')!;
  container.appendChild(renderer.domElement);
  window.addEventListener('resize', windowResizeHandler, false);
  const scene = new THREE.Scene();
  const loop = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  };

  loop();
};
