import "../index.css"
import * as THREE from 'three';
import { OrbitControls} from "three/addons/controls/OrbitControls.js";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import * as dat from 'dat.gui';
import {createLightBlue} from "./lights.js";
import {createLightRed} from "./lights.js";

// Loader
const textureLoader = new THREE.TextureLoader().load('src/assets/mesh_normalmap.png')
const textureLoader2 = new THREE.TextureLoader().load('src/assets/space.jpg')

// Debug
// const gui = new dat.GUI(); // lightweight control panel for three

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Objects
const geometry = new THREE.SphereGeometry(1, 64, 64);


const particlesGeometry = new THREE.BufferGeometry;
const particleCount = 3000;
const posArray = new Float32Array(particleCount * 3);
for(let i=0; i < particleCount * 3; i++){
    posArray[i] = (Math.random() - 0.5) * 10;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));



// Materials
const material = new THREE.MeshStandardMaterial();
material.color = new THREE.Color('blue');
material.roughness = 0.273;
material.metallness = 0.769;
material.transparent = true;
material.opacity = 0.3;
material.normalMap = textureLoader;

const particleMaterial = new THREE.PointsMaterial({
    size: 0.005
})

// Mesh
const sphere = new THREE.Mesh(geometry, material);
const particleMesh = new THREE.Points(particlesGeometry, particleMaterial);

// Scene
const scene = new THREE.Scene();

scene.add(particleMesh, sphere);


createLightBlue(scene)
createLightRed(scene)

/**
 * SIZES
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    //Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    //Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
})

const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 100);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableZoom = false;

const loader = new GLTFLoader();
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.set(0, 0, 5);

function animate(){
    requestAnimationFrame(animate);

    // sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.005;

    renderer.render(scene, camera);
}
animate();

