

export const makeLandscape = ( scene ) => {
    function makeTreeAt(x, z) {
        var trunk = new THREE.Mesh(
            new THREE.CylinderGeometry(50, 50, 200),
            new THREE.MeshBasicMaterial({color: 'sienna'})
        );
        var top = new THREE.Mesh(
            new THREE.SphereGeometry(150),
            new THREE.MeshBasicMaterial({color: 'forestgreen'})
        );
        top.position.y = 175;
        trunk.add(top);

        trunk.position.set(x, -75, z);
        scene.add(trunk);
    }
    makeTreeAt( 500, 0);
    makeTreeAt(-500, 0);
    makeTreeAt( 750, -1000);
    makeTreeAt(-750, -1000);

}