globalThis.wasmInterop = new class {

    getOpener() {
        // Fake Window object, for cross-origin opener, most operations will throw an error
        // return window.opener;

        const proxy = new Proxy({
            postMessage: (msg) => {
                alert(msg);
            }
        }, {
            getOwnPropertyDescriptor(target, p) {
                console.log(p + " descriptor requested");
                throw new Error("Permission denied");
            }
        });

        return globalThis.debugObj = proxy;
    }

    sendReadyMessage(window, op) {
        window.postMessage({
            op,
        });
    }

}();