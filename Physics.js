import Matter from "matter-js";

const Physics = (entities, { touches, time }) => {
    let engine = entities.physics.engine;
    let bird = entities.bird.body;

    touches.filter(t => t.type === "press").forEach(t => {
        Matter.Body.applyForce(bird, bird.position, { x: 0.0, y: -0.1});   
    });

    for(let i=1; i<=4; i++){
        Matter.Body.translate(entities["pipe" + i].body, {x: -1, y: 0 })
    }

    Matter.Engine.update(engine, time.delta);
    return entities;
}
export default Physics;