import {
    Scene,
    AmbientLight,
    DirectionalLight,
    Mesh,
    MeshBasicMaterial,
    MeshToonMaterial,
    PlaneGeometry,
    Color,
    BoxGeometry,
    ConeGeometry,
    CylinderGeometry,
    CircleGeometry
} from "three"
import {updateRenderer} from "../core/renderer"

export const scene = new Scene()

// Light Code
const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

// Plane Code
const plane = new Mesh(
    new PlaneGeometry(10, 10, 10, 10),
    new MeshToonMaterial({
        color: new Color("#444"),
    })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)

scene.add(plane)

// Plate Code
const material = new MeshBasicMaterial({color: 0xffffff});

const basePlate = new Mesh(
    new BoxGeometry(1, 1, 0.5)
    , material);

const topPlate = new Mesh(
    new ConeGeometry(2, 0.5, 32),
    material);

basePlate.rotation.set(-Math.PI / 2, 0, 0);
basePlate.position.set(0, 0.2, 0);
topPlate.rotation.set(Math.PI, 0, 0);
topPlate.position.set(0, 0.2, 0);

scene.add(basePlate);
scene.add(topPlate);

// Piece of cake code

const cakeMaterial = new MeshBasicMaterial({color: 0x5c63c})

const sideLeft = new Mesh(
    new BoxGeometry(0.01, 0.5, 2.02),
    cakeMaterial,
)
sideLeft.position.set(-0.3, 0.5, 0);
sideLeft.rotation.set(0, 0.30, 0);

const sideRight = new Mesh(
    new BoxGeometry(0.01, 0.5, 2.02),
    cakeMaterial,
)
sideRight.position.set(0.3, 0.5, 0);
sideRight.rotation.set(0, -0.30, 0);

const sideBack = new Mesh(
    new CylinderGeometry(1.05, 1.05, 0.5, 32, 1, false, 2.54, 1.2),
    cakeMaterial,
);
sideBack.position.set(0, 0.5, -0.1);
sideBack.rotation.set(0, 0, 0);

scene.add(sideRight);
scene.add(sideLeft);
scene.add(sideBack);


// Piece of cake 1 code

const cakeMaterial1 = new MeshBasicMaterial({color: 0xf47f6b})

const sideLeft1 = new Mesh(
    new BoxGeometry(0.01, 0.5, 2.02),
    cakeMaterial1,
)
sideLeft1.position.set(-0.3, 1, 0);
sideLeft1.rotation.set(0, 0.30, 0);

const sideRight1 = new Mesh(
    new BoxGeometry(0.01, 0.5, 2.02),
    cakeMaterial1,
)
sideRight1.position.set(0.3, 1, 0);
sideRight1.rotation.set(0, -0.30, 0);

const sideBack1 = new Mesh(
    new CylinderGeometry(1.05, 1.05, 0.5, 32, 1, false, 2.54, 1.2),
    cakeMaterial1,
);
sideBack1.position.set(0, 1, -0.1);
sideBack1.rotation.set(0, 0, 0);

scene.add(sideRight1);
scene.add(sideLeft1);
scene.add(sideBack1);


// Piece of cake 2 code

const cakeMaterial2 = new MeshBasicMaterial({color: 0xbb5098})

const sideLeft2 = new Mesh(
    new BoxGeometry(0.01, 0.5, 2.02),
    cakeMaterial2,
)
sideLeft2.position.set(-0.3, 1.5, 0);
sideLeft2.rotation.set(0, 0.30, 0);

const sideRight2 = new Mesh(
    new BoxGeometry(0.01, 0.5, 2.02),
    cakeMaterial2,
)
sideRight2.position.set(0.3, 1.5, 0);
sideRight2.rotation.set(0, -0.30, 0);

const sideBack2 = new Mesh(
    new CylinderGeometry(1.05, 1.05, 0.5, 32, 1, false, 2.54, 1.2),
    cakeMaterial2,
);
sideBack2.position.set(0, 1.5, -0.1);
sideBack2.rotation.set(0, 0, 0);

scene.add(sideRight2);
scene.add(sideLeft2);
scene.add(sideBack2);


// Piece of cake 3 code

const cakeMaterial3 = new MeshBasicMaterial({color: 0x7a5197})

const sideLeft3 = new Mesh(
    new BoxGeometry(0.01, 0.5, 2.02),
    cakeMaterial3,
)
sideLeft3.position.set(-0.3, 2, 0);
sideLeft3.rotation.set(0, 0.30, 0);

const sideRight3 = new Mesh(
    new BoxGeometry(0.01, 0.5, 2.02),
    cakeMaterial3,
)
sideRight3.position.set(0.3, 2, 0);
sideRight3.rotation.set(0, -0.30, 0);

const sideBack3 = new Mesh(
    new CylinderGeometry(1.05, 1.05, 0.5, 32, 1, false, 2.54, 1.2),
    cakeMaterial3,
);
sideBack3.position.set(0, 2, -0.1);
sideBack3.rotation.set(0, 0, 0);

scene.add(sideRight3);
scene.add(sideLeft3);
scene.add(sideBack3);

// The cake top

const topCake = new Mesh(
    new CircleGeometry(2, 32, 1.27, 0.6),
    cakeMaterial3,
)
topCake.rotateX(-Math.PI / 2);
topCake.position.set(0, 2.22, 0.96);

scene.add(topCake);

export function updateScene() {
    updateRenderer()
}






