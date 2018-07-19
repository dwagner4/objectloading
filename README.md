# objectloading
index.html will point to several interesting pages.

## duck.html and figure.html
Both of these load .glTF models into an aframe scene.  the duck and box man are .glTF while the walking robot is .fbx converted using Blender from maximo.com.  I have failed to convert the moose in blender, so I'm loading both bullmoose and cow from a script.

## animals.html
Loads a moose .fbx model into a scene using only three.js.  contains 21 animations.

## loader.html
This is a minimalist threejs page which loads a .json model exported from the THREE.js editor.

##  salsatest.html
directly imports an FBX model into threejs page with one animation included and then adds two more animations striped from other .fbx models.  all downloaded from Mixamo.com, the two additional models are meshless.

## zombie.html
Similar to salsatest.html except that it uses a generic makeFBXcharacter method to assemble the Mixamo.com files into an animated character using a JSON params object.

## zombieattack.html
Does two things.  1) solves a problem with some Mixamo.com animations which do not translate the character or remain stationary by reaching inside the animationclip to retrieve the last X and Z coordinate and then translating there upon next animation call.  It loops through all animations by listening for the 'finished' event.  2) implements First Person Shooter controls.
