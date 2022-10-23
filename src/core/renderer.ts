import { WebGLRenderer, PCFShadowMap } from "three"
import { sizes } from "./camera"

const canvas: HTMLElement = document.querySelector("#experience") as HTMLElement

export const renderer = new WebGLRenderer({
  canvas,
  antialias: true,
})
renderer.setSize(window.innerWidth, window.innerHeight)

// var size_window = new Vector2()
// renderer.getSize(size_window)
// console.log(size_window)
document.body.appendChild(renderer.domElement)

// More realistic shadows
renderer.shadowMap.enabled = true
renderer.shadowMap.type = PCFShadowMap
renderer.physicallyCorrectLights = true

renderer.toneMappingExposure = 1

export function updateRenderer() {
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  updateRenderer()
})
