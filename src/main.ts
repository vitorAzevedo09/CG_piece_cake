import "./style.css"
import * as THREE from "three"
import "./core/controls"
import { renderer, updateRenderer } from "./core/renderer"
import { camera } from "./core/camera"
import { gui, fpsGraph } from "./core/gui"
import WebGL from "three/examples/jsm/capabilities/WebGL.js"

const scene = new THREE.Scene()

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  color: "#5EDCAE",
  diameter: 80,
}

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshToonMaterial({
    color: new THREE.Color(PARAMS.color),
    wireframe: false,
  })
)

sphere.position.set(0, 2, 0)
sphere.castShadow = true

const sphereCtrls = gui.addFolder({
  title: "Sphere",
})

sphereCtrls.addInput(sphere.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(sphere.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(sphere.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})
console.log(sphere.material)
sphereCtrls.addInput(PARAMS, "color")

sphereCtrls.addInput(sphere.material, "wireframe")

scene.add(sphere)

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10, 10, 10),
  new THREE.MeshToonMaterial({
    color: new THREE.Color("#444"),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

updateRenderer()

function animate() {
  fpsGraph.begin()
  sphere.material.color = new THREE.Color(PARAMS.color)
  renderer.render(scene, camera)
  fpsGraph.end()
  requestAnimationFrame(animate)
}

if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  animate()
} else {
  const warning = WebGL.getWebGLErrorMessage()
  const app = document.querySelector("#experience")
  app!.appendChild(warning)
}
