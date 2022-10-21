import "./style.css"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const scene = new THREE.Scene()

const VERTICAL_FIELD_OF_VIEW = 45
const NEAR = 0.1
const FAR = 1000

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const camera = new THREE.PerspectiveCamera(
  VERTICAL_FIELD_OF_VIEW,
  sizes.width / sizes.height,
  NEAR,
  FAR
)

camera.position.set(9, 4, 9)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.normalBias = 0.05
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const canvas: HTMLElement = document.querySelector("#experience") as HTMLElement

const renderer = new THREE.WebGLRenderer({
  canvas,
})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap
renderer.physicallyCorrectLights = true

function updateRenderer() {
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  updateRenderer()
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
})

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshToonMaterial({
    color: new THREE.Color("#5EDCAE"),
  })
)

sphere.position.set(0, 2, 0)
sphere.castShadow = true

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
export const controls = new OrbitControls(camera, renderer.domElement)
controls.enabledDamping = true

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
