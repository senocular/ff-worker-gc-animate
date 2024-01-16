const options = {
    maxBlocks: 500,
    objectCount: 300,
};
const blocks = [];
let rotation = 0;

function onReceivedMessage(event) {
    const { data } = event;
    if (data.type === "options") {
        Object.assign(options, data.options);
        console.log("Worker options:", JSON.stringify(options));
    }
}

function onFrame() {
    generateBlocks();
    rotation += 15;
    sendRotation();
    requestAnimationFrame(onFrame);
}

function generateBlocks() {
    blocks.unshift(Array.from({ length: options.objectCount }).map((_, index) => ({ [index]: index })));
    blocks.length = options.maxBlocks;
}

function sendRotation() {
    postMessage({
        type: "rotate",
        rotation,
    });
}

onmessage = onReceivedMessage;
requestAnimationFrame(onFrame);
