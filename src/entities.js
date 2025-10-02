import k from "./kaplayCtx";
export function makeSonic(position) {
    return k.add([
        k.sprite("sonic", { anim: "run" }),
        k.scale(3),
        k.area(),
        k.anchor("center"),
        k.pos(position),
        k.body({ jumpForce: 1700 }),
        {
            setControls() {
                k.onButtonPress("jump", () => {
                    if (this.isGrounded()) {
                        this.play("jump");
                        this.jump();
                        k.play("jump", { volume: 0.5 });
                    }
                });
            },
            setEvents() {
                this.onGround(() => {
                    this.play("run");
                });
            },
        },
    ]);
}
export function makeRing(position) {
    return k.add([
        k.sprite("ring", { anim: "spin" }),
        k.area(),
        k.scale(3),
        k.anchor("center"),
        k.pos(position),
        k.offscreen(),
        "ring",
    ]);
}
export function makeMotobug(position) {
    return k.add([
        k.sprite("motobug", { anim: "run" }),
        k.area({ shape: new k.Rect(k.vec2(-5, 0), 32, 32) }),
        k.scale(3),
        k.anchor("center"),
        k.pos(position),
        k.offscreen(),
        "enemy",
    ]);
}
