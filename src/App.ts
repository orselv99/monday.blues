import * as THREE from 'three';
import { StageInfo, StageParameter } from './types/components';
import { Camera, Renderer } from './cores';
import { CoreParameter, Resolution } from './types/cores';
import { Terrain } from './components';

const Stage = (core: CoreParameter, info: StageParameter): StageInfo => {
  const renderer = core.renderer;
  const camera = core.camera;
  const scene = core.scene;

  const terrain = Terrain('#123432');
  scene.add(terrain.mesh);

  const render = () => {
    console.log('render!');

    terrain.mesh.rotation.z += 0.0005;

    // render
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
  };

  return {
    colors: info.themeColor,
    render: render,
  };
};

window.onload = () => {
  console.log('on Load');

  // core 설정
  const resolution: Resolution = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const camera = Camera(resolution);
  const renderer = Renderer(resolution);
  const windowResizeHandler = () => {
    resolution.width = window.innerWidth * 0.9;
    resolution.height = window.innerHeight * 0.9;
    renderer.setSize(resolution.width, resolution.height);
    camera.aspect = resolution.width / resolution.height;
    camera.updateProjectionMatrix();
  };
  const scene = new THREE.Scene();

  // world 설정
  const world = document.getElementById('world')!;
  world.style.position = 'absolute';
  world.style.width = '90%';
  world.style.height = '90%';
  world.style.overflow = 'hidden';
  //world.style.background = 'linear-gradient(#e4e0ba, #f7d9aa)';
  world.appendChild(renderer.domElement);
  window.addEventListener('resize', windowResizeHandler, false);

  // stage
  const stageInfos: StageParameter[] = [
    {
      level: 0,
      gameSpeed: 1,
      themeColor: {
        background: ['#7FFFD4', '#F7D9AA'],
        cloud: '222222',
        terrain: '333333',
        hurdles: ['111111', '222222', '333333'],
        enemies: ['444444', '555555', '666666'],
        sweets: ['777777', '888888', '999999'],
      },
    },
  ];

  // stage 설정
  const stage = Stage(
    { camera: camera, renderer: renderer, scene: scene },
    stageInfos[0]
  );

  // stage draw 시작
  world.style.background = `linear-gradient(${stage.colors.background[0]}, ${stage.colors.background[1]})`;
  stage.render();
};

// TODO: github.io 에 배포해볼까 https://www.npmjs.com/package/gh-pages
// stage 를 갖는 횡스크롤 달리기 게임
