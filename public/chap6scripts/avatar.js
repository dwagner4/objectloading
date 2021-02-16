export const makeAvatar = () => {
    var body = new THREE.SphereGeometry(100);
    var cover = new THREE.MeshNormalMaterial();
    var avatar = new THREE.Mesh(body, cover);

    var hand = new THREE.SphereGeometry(50);

    var rightHand = new THREE.Mesh(hand, cover);
    rightHand.position.set(-150, 0, 0);
    rightHand.name = "rh"
    avatar.add(rightHand);

    var leftHand = new THREE.Mesh(hand, cover);
    leftHand.position.set(150, 0, 0);
    leftHand.name = "lh"
    avatar.add(leftHand);

    var foot = new THREE.SphereGeometry(50);

    var rightFoot = new THREE.Mesh(foot, cover);
    rightFoot.position.set(-75, -125, 0);
    rightFoot.name = "rf"
    avatar.add(rightFoot);

    var leftFoot = new THREE.Mesh(foot, cover);
    leftFoot.position.set(75, -125, 0);
    leftFoot.name = "lf"
    avatar.add(leftFoot);

    console.log(avatar.children)

    return avatar
}