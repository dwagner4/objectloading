

camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
camera.position.set( 10, 20, 30 );

controls = new THREE.OrbitControls( camera );
controls.target.set( 0, 1, 0 );
controls.update();
