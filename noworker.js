let maxBlocks = 500;
let objectCount = 500;
const blocks = [];
const box = document.querySelector("#box");
let rotation = 0;

function onFrame() {
    generateBlocks();
    rotation += 15;
    box.style.rotate = `${rotation}deg`;
    requestAnimationFrame(onFrame);
}

function generateBlocks() {
    blocks.unshift(Array.from({ length: objectCount }).map((_, index) => ({ [index]: index })));
    blocks.length = maxBlocks;
}

function updateOptions() {
    objectCount = document.getElementById("objects-num").valueAsNumber;
    maxBlocks = document.getElementById("blocks-num").valueAsNumber;
}

requestAnimationFrame(onFrame);
document.getElementById("apply-btn").onclick = updateOptions;
