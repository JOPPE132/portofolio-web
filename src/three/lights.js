import * as THREE from 'three'

const pointLight = new THREE.PointLight('blue', 1, 100);
const pointLight2 = new THREE.PointLight(0xff0000, 1, 100);
export {pointLight, pointLight2}

/**
 * Creates a blue light inside the scene
 * @param scene to add the light to
 */
export function createLightBlue(scene){
    pointLight.position.set(-0.84,1.24,0.07);
    pointLight.intensity = 1.81;
    scene.add(pointLight);
}

/**
 * Creates a red light inside the scene
 * @param scene to add the light to
 */
export function createLightRed(scene){
    pointLight2.position.set(1.05,-1.16,0.72);
    pointLight2.intensity = 20;
    scene.add(pointLight2);
}

/**
 * Creates a dat.gui folder for more accurate measurements
 * @param pointlight the light to add to the gui
 * @param gui gui
 */
export function createGuiHelper(pointlight, gui){
    const pointlight_gui = gui.addFolder('Light1');
    gui.add(pointlight.position, 'x').min(-3).max(3).step(0.01);
    gui.add(pointlight.position, 'y').min(-3).max(3).step(0.01);
    gui.add(pointlight.position, 'z').min(-3).max(3).step(0.01);
    gui.add(pointLight, 'intensity').min(0).max(50).step(0.01);
    pointlight_gui.open();
}

/**
 * Creates a dat.gui folder for more accurate measurements
 * @param pointlight the light to add to the gui
 * @param gui gui
 */
export function createGuiHelper2(pointlight, gui){
    const pointlight_gui = gui.addFolder('Light2');
    gui.add(pointlight.position, 'x').min(-3).max(3).step(0.01);
    gui.add(pointlight.position, 'y').min(-3).max(3).step(0.01);
    gui.add(pointlight.position, 'z').min(-3).max(3).step(0.01);
    gui.add(pointLight, 'intensity').min(0).max(50).step(0.01);
    pointlight_gui.open();
}

/**
 * Creates a model to represent the light. Works well with createGuiHelper()
 * @param scene the scene to add the helper to
 */
export function createLightHelper(scene){
    const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
    scene.add(pointLightHelper);
}

/**
 * Creates a model to represent the light. Works well with createGuiHelper()
 * @param scene the scene to add the helper to
 */
export function createLightHelper2(scene){
    const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 1);
    scene.add(pointLightHelper2);
}
