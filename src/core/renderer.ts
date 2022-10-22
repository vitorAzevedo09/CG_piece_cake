import { WebGLRenderer, PCFShadowMap } from "three"
import { sizes } from "./camera"

const canvas: HTMLElement = document.querySelector("#experience") as HTMLElement

export const renderer = new WebGLRenderer({
  canvas,
})
renderer.setSize(sizes.width, sizes.height)

// var size_window = new Vector2()
// renderer.getSize(size_window)
// console.log(size_window)
document.body.appendChild(renderer.domElement)

renderer.shadowMap.enabled = true
renderer.shadowMap.type = PCFShadowMap
renderer.physicallyCorrectLights = true

export function updateRenderer() {
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(sizes.width / sizes.height, 2))
}

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  updateRenderer()
})
