<h1 align="center">
Haunted House
</h1>

<h3 align="center">https://scary-house.netlify.app/</h3>

## CONTROLS

<img align='right' src="https://media.giphy.com/media/7281x5yOLwyiRqWAM7/giphy.gif" width="230">

1. This is a 3D interactive website

2. User can interact with mouse click & scroll

3. Left mouse button :  rotate the camera view

4. Middle mouse button :  scroll / click & drag to zoom in & out


## TECHNOLOGY

1. Created using `HTML`, `CSS`, `JAVASCRIPT`, `THREE.JS`, `VITE`

2. 3D implemented using `THREE.JS`


## THREE.JS

Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL

https://threejs.org/


## VITE

Vite. js allows developers to set up a development environment for frameworks like Vue, TezJS and React and even for Vanilla JavaScript app with a dev server

https://vitejs.dev/


### Run This Project On Your Local Device

```sh
git clone https://github.com/tathagatamishra/3D.git

cd 3D

git checkout Haunted-House

npm i

npm run dev
```

<h3 align="center">
<img src="https://user-images.githubusercontent.com/114053180/227112004-afcc4996-95d6-4c5f-913a-dd0b665abb57.png">
</h3>

<ul>
  <li>
The code is a Three.js project that creates a 3D model of a house. It sets up a scene with a camera and a renderer, and uses textures to create realistic materials for the walls, roof, and door. It also adds fog to the scene for atmospheric effect.
  </li>
    <li>
The code uses a group to store all the parts of the house, and adds each part (walls, roof, and door) to the group. The walls are a box geometry with a brick material that includes a color map, ambient occlusion map, normal map, and roughness map. The roof is a cone geometry with a material that has a solid color. The door is a plane geometry with a material that includes various maps for color, transparency, ambient occlusion, displacement, normal, and metalness.
  </li>
    <li>
The code also includes the OrbitControls library, which allows the user to rotate and zoom the camera using the mouse. The textures are loaded using the TextureLoader library, and the code sets up the textures to repeat and wrap seamlessly for tiling.
  </li>
      <li>
The GUI library, dat.GUI, is commented out, but it can be used to add controls to the scene and manipulate various properties, such as the camera position. Overall, the code creates a 3D scene of a house with realistic textures and lighting, and allows the user to explore it interactively using mouse controls.
  </li>
</ul>
