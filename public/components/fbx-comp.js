/**
 * FBX loader with animation?
 */
AFRAME.registerComponent('fbx-comp', {
  // let action = null;
  init: function () {
    console.log('FBX, FBX!');
    var cow = document.getElementById('cow');
    var bull = document.getElementById('bull');
    var objectLoader = new THREE.FBXLoader();
    objectLoader.load("models/Forest_fbx/Low_Moose_cow_v01.fbx", ( obj2 ) => {      
      cow.setObject3D('cow', obj2);
    } );
    objectLoader.load("models/Forest_fbx/Low_Moose_bull_v01.fbx", ( obj2 ) => {
      bull.setObject3D('bull', obj2);
    } );
  }
//
  // update: function () {
  //   _doAction();
  // }
  //
  // _doAction: function () {
  //   console.log("yoho Dean")
  // }
});
