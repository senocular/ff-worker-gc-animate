const worker = new Worker("./src/worker.js");
const box = document.querySelector("#box");

function onReceivedMessage(event) {
    const { data } = event;
    if (data.type === "rotate") {
        box.style.rotate = `${data.rotation}deg`;
    }
}

function sendOptions() {
    worker.postMessage({
        type: "options",
        options: {
            objectCount: document.getElementById("objects-num").valueAsNumber,
            maxBlocks: document.getElementById("blocks-num").valueAsNumber,
        },
    });
}

worker.onmessage = onReceivedMessage;
document.getElementById("apply-btn").onclick = sendOptions;

sendOptions();
