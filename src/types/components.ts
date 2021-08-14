export type TerrainInfo = {
  geometry: THREE.CylinderGeometry;
  material: THREE.MeshPhongMaterial;
  mesh: THREE.Mesh;
};

export type StageThemeColor = {
  background: string[];
  cloud: string;
  terrain: string;
  hurdles: string[];
  enemies: string[];
  sweets: string[];
};

export type StageParameter = {
  level: number;
  gameSpeed: number;
  themeColor: StageThemeColor;
};
export type StageInfo = {
  colors: StageThemeColor;
  render(): void;
};
