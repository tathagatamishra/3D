import * as THREE from 'three'
import './style.css'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


//* ---------Basic setup-------------

const scene = new THREE.Scene()

//! Sizes  Really...!!!  Howaaaaaaaiiiiiiiiiiiiiii..........
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.01, 2000)

camera.position.set(10, 0, 28)
camera.rotation.set(0, 15, 0)


const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl'),
    preserveDrawingBuffer: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)


//^ -------------------------------------------
//* -------------ScreenShot--------------------


document.querySelector('.capture').addEventListener('click', saveAsImage)

function saveAsImage() {
    
        let strMime = "image/jpeg"
        let imgData = renderer.domElement.toDataURL(strMime)

        saveFile(imgData.replace(strMime), "P L A N E T.jpg")
}

let saveFile = function (strData, filename) {

    let link = document.createElement('a')

    if (typeof link.download === 'string') {

        document.body.appendChild(link); //!Firefox requires the link to be in the body
        link.download = filename
        link.href = strData
        link.click();
        document.body.removeChild(link); //!remove the link when done
    }
    else {
        location.replace(uri);
    }
}

//? https://codepen.io/shivasaxena/pen/QEzrrv
//^ -------------------------------------------



//* ------------Controller----------------

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
// controls.enablePan = false
// controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 0.2


//* -----------Responsive-------------------

window.addEventListener('resize', () => {

    //^ Update Sizes ----
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //^ Update Camera ----
    camera.updateProjectionMatrix()
    camera.aspect = sizes.width / sizes.height
    renderer.setSize(sizes.width, sizes.height)
})


//* ------------Lights-----------------

const pointLit = new THREE.PointLight(0xffffff)
pointLit.position.set(15, 15, 15)
const ambLight = new THREE.AmbientLight(0xffffff)
ambLight.intensity = 0.05
scene.add(pointLit, ambLight)

// scene.background = new THREE.TextureLoader().load('public/stary_skyTexture.jpg')


//* ------------Materials----------------

const planetTexture = new THREE.TextureLoader().load('/Jupiter_Map.jpg')
const ringTexture = new THREE.TextureLoader().load('/2k_jupiter.jpg')


//* -----------3D Objects--------------

const planet = new THREE.Mesh(
    new THREE.SphereGeometry(3, 80, 64),
    new THREE.MeshStandardMaterial({
        map: planetTexture
    })
)
planet.rotation.y = 2
scene.add(planet)


const geometry = new THREE.TorusGeometry(4, 0.3, 2, 100)
const material = new THREE.MeshBasicMaterial({ map: ringTexture })
const ring = new THREE.Mesh(geometry, material)
ring.rotation.x = 2
ring.rotation.y = 3
scene.add(ring)


function addStar() {
    const geometry = new THREE.SphereGeometry(0.3, 10, 10)
    const material = new THREE.MeshBasicMaterial({ color: '#ffffff' })
    const star = new THREE.Mesh(geometry, material)

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(2000))

    star.position.set(x, y, z)
    scene.add(star)
}

Array(10000).fill().forEach(addStar)

//* -------------------------------------


const listener = new THREE.AudioListener();
camera.add(listener)

const sound = new THREE.Audio( listener );

const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sounds/SpaceAmbientmusic.ogg', 
(buffer)=>{
    sound.setBuffer(buffer)
    sound.setVolume(0.05)
    sound.setLoop(true)
    sound.play()
});


//* -----------Helpers-------------------

// const lightHelper = new THREE.PointLightHelper(pointLit)
// const gridHelper = new THREE.GridHelper(200, 50)
// scene.add(lightHelper, gridHelper)


//* ---------Animation-------------------

const animPlanet = gsap.timeline({ defaults: { duration: 10 } })
animPlanet.delay(4).timeScale(0.5).fromTo(planet.scale, { z: 6, x: 6, y: 6 }, { z: 1, x: 1, y: 1 })


const animRing = gsap.timeline({ defaults: { duration: 10 } })
animRing.delay(4).timeScale(0.5).fromTo(ring.scale, { z: 6, x: 6, y: 6 }, { z: 1, x: 1, y: 1 })


const animTxt = gsap.timeline({ defaults: { duration: 3 } })
animTxt.fromTo('.header', { y: '-100%' }, { y: '0%' })
animTxt.fromTo('.footer', { y: '70%' }, { y: '0%' })


const opacity = gsap.timeline({ defaults: { duration: 2 } })
opacity.delay(1.2).timeScale(0.5).fromTo('.opacity', { opacity: 0 }, { opacity: 1 })

const opacity2 = gsap.timeline({ defaults: { duration: 1 } })
opacity2.delay(0.5).timeScale(0.5).fromTo('.header', { opacity: 0 }, { opacity: 1 })
opacity2.delay(0.5).timeScale(0.5).fromTo('.footer', { opacity: 0 }, { opacity: 1 })


//* ----------Recursion------------------

function loop() {
    controls.update()

    ring.rotation.z += 0.01
    planet.rotation.y -= 0.002


    renderer.render(scene, camera)
    requestAnimationFrame(loop)
}
loop()