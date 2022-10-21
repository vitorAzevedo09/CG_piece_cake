import { Pane } from "tweakpane"
import * as EssentialPlugin from "@tweakpane/plugin-essentials"

export const gui = new Pane()
gui.registerPlugin(EssentialPlugin)

export const fpsGraph = gui.addBlade({
	view: 'fpsgraph',
	label: 'FPS'
})
