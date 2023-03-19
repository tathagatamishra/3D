import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'



// ----------------------------------------

// Canvas
const canvas = document.querySelector('canvas')

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



// Scene
const scene = new THREE.Scene()


// Camera
const camera = new THREE.PerspectiveCamera(35, 300/400, 0.1, 10000)

camera.position.z = 5

scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})

renderer.setSize(300,400)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3))




// ----------------------------------------

// Loader
const loadingManager = new THREE.LoadingManager()

// Texture
const textureLoader = new THREE.TextureLoader(loadingManager)
const bookTexture = textureLoader.load('1.jpg')
bookTexture.magFilter = THREE.NearestFilter


// Objects

const book = new THREE.BoxGeometry(1.5, 2, .3)

const paint = new THREE.MeshStandardMaterial({ map: bookTexture })

const coloredBook = new THREE.Mesh(book, paint)

scene.add(coloredBook)

coloredBook.rotation.set(.3,-.4,0)
coloredBook



// Lights

const light = new THREE.PointLight({ color: 'white' })
light.position.set(-2, 3, 2)
light.intensity = 2
scene.add(light)


const ambLight = new THREE.AmbientLight({ color: 'white' })
ambLight.intensity = 0.31

scene.add(ambLight)




// ----------------------------------------


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true



// Animate

const loop = () => {

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(loop)
}

loop()
