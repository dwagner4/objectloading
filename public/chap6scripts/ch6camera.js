/** makes and returns a camera */

export const makeCamera = () => {
    var aspectRatio = window.innerWidth / window.innerHeight;
	var camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000);
    camera.position.z = 500;
    return camera
}


