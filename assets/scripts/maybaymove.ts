import { _decorator, Component, director, EventKeyboard, Input, input, instantiate, KeyCode, Node, Prefab, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('maybaymove')
export class maybaymove extends Component {

    speed: Vec3 = new Vec3(0, 0, 0);

    danP: Vec3 = new Vec3(0, 0, 0);

    @property(Prefab)
    dan: Prefab;

    private isLeftPressed = false;
    private isRightPressed = false;

    start() {
        this.node.setPosition(0, -7.021, 0);

        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    update(deltaTime: number) {
        if (this.isLeftPressed && !this.isRightPressed) {
            this.speed.x = -12;
        } else if (this.isRightPressed && !this.isLeftPressed) {
            this.speed.x = 12;
        } else {
            this.speed.x = 0;
        }

        let pos = this.node.getPosition();
        pos.add(this.speed.clone().multiplyScalar(deltaTime));
        this.node.setPosition(pos);
    }

    onKeyDown(EventType: EventKeyboard) {
        if (EventType.keyCode == KeyCode.ARROW_LEFT) {
            this.isLeftPressed = true;
        }
        else if (EventType.keyCode == KeyCode.ARROW_RIGHT) {
            this.isRightPressed = true;
        }

        if (EventType.keyCode == KeyCode.SPACE) {
            this.fire();
        }
    }

    fire() {
        this.danP = this.node.getPosition().clone();
        this.danP.y += 3;

        let g = instantiate(this.dan);
        g.setPosition(this.danP);
        g.parent = director.getScene();
    }

    onKeyUp(EventType: EventKeyboard) {
        if(EventType.keyCode == KeyCode.ARROW_LEFT){
            this.isLeftPressed = false;
        }
        else if(EventType.keyCode == KeyCode.ARROW_RIGHT){
            this.isRightPressed = false;
        }
    }

}


