globalThis.wasmInterop = new class {

    getOpener() {
        return globalThis.parent;
    }

    sendReadyMessage(window, op) {
        window.postMessage({
            op,
        });
    }

}();