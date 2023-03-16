import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import GUI from 'lil-gui'


const sizes = {
    height: window.innerHeight,
    width: window.innerWidth
}

// canvas
const canvas = document.querySelector('canvas')

// room
const room = new THREE.Scene()


// camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height)
room.add(camera)
camera.position.z = 60




// renderer
const renderer = new THREE.WebGLRenderer({canvas, alpha: true})
renderer.setSize(sizes.width , sizes.height)
renderer.setPixelRatio(3)


// object

const material = new THREE.MeshNormalMaterial()


const box = new THREE.Mesh(
    new THREE.TorusKnotGeometry(7,2,200,20,2,3),
    material
)
room.add(box)
// box.position.set(15,13,0)



// light
// const light = new THREE.PointLight()
// room.add(light)
// light.position.set(-12,15,15)


// const ambLight = new THREE.AmbientLight()
// room.add(ambLight)
// ambLight.intensity = 0.1



// Helper

// const lightHelper = new THREE.PointLightHelper(light)
// room.add(lightHelper)

// const gui = new GUI()

// gui.addColor(material, 'color').name('Color')
// gui.add(material, 'metalness').min(0).max(1).step(0.0001).name('metalness')
// gui.add(material, 'roughness').min(0).max(1).step(0.0001).name('roughness')




// Controller
const control = new OrbitControls(camera, canvas)
control.enableDamping = true
control.enableZoom = false
// control.enableRotate = false
control.enablePan = false


// Final line


const gameLoop = () => {

    control.update()

    box.rotation.x += 0.001
    box.rotation.z += 0.001
    box.rotation.y += 0.001

    renderer.render(room, camera)


    window.requestAnimationFrame(gameLoop)
}

gameLoop()



// responsive

window.addEventListener('resize', () => {

    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})