///REQUIRES CHROME 113 OR NEWER TO RUN

import * as BABYLON from '@babylonjs/core';

// Get the canvas element from the DOM.
const canvas = document.getElementById("canvas");

// Create a Babylon.js engine using WebGPU
const engine = new BABYLON.WebGPUEngine(canvas);

///////
//THIS AWAIT SEEMS TO BE THE PROBLEM
///////
await engine.initAsync();

// Create a scene
const scene = new BABYLON.Scene(engine);
// Create a camera
const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);
// Create a light
const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

//Geo
const sphere = BABYLON.MeshBuilder.CreateTorusKnot("torusKnot", {radius: 1, tube: 0.2, radialSegments: 256, tubularSegments: 3096}, scene);
var shapeMaterial = new BABYLON.StandardMaterial("mat", scene);
shapeMaterial.backFaceCulling = true;
	shapeMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0);
	shapeMaterial.specularColor = new BABYLON.Color3(1, 1, 0);
  shapeMaterial.emissiveColor = new BABYLON.Color3(0.1,0,0);
	//material.alpha = 0.5;
// Apply the material to the sphere
sphere.material = shapeMaterial;

// Render the scene
engine.runRenderLoop(() => {
    scene.render();
});