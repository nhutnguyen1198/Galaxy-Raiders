import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('danmove')
export class danmove extends Component {


    start() {

    }

    update(deltaTime: number) {
        let pos = this.node.getPosition();
        let speed = this.node.up.clone().multiplyScalar(10);
        pos.add(speed.clone().multiplyScalar(deltaTime));
        this.node.setPosition(pos);
    }
}


