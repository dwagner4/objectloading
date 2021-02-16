

export function walk(avatar, time) {
    var speed = 10;
    var size = 100;
    var position = Math.sin(speed * time) * size;
    avatar.getObjectByName("rh").position.z = position;
    avatar.getObjectByName("lh").position.z = -position;
    avatar.getObjectByName("rf").position.z = -position;
    avatar.getObjectByName("lf").position.z = position;
}