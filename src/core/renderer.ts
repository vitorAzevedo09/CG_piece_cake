import { WebGLRenderer, PCFShadowMap } from "three"
import { sizes } from "./camera"

const canvas: HTMLElement = document.querySelector("#experience") as HTMLElement

export const renderer = new WebGLRenderer({
  canvas,
})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

renderer.shadowMap.enabled = true
renderer.shadowMap.type = PCFShadowMap
renderer.physicallyCorrectLights = true

export function updateRenderer() {
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  updateRenderer()
})
