// worker.js

// Simula uma tarefa longa, como contagem de visitantes
let count = 546554689;

function countVisitors() {
    // Simula uma operação em segundo plano
    for (let i = 0; i < 1e9; i++) {
        count++;
    }
    // Envia a contagem de volta para o thread principal
    postMessage(count);
}

onmessage = function (e) {
    if (e.data === "startCounting") {
        countVisitors();
    }
};
