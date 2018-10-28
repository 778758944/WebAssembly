(function(W) {
    W.loadAssembly = function(url, config) {
        return fetch(url).then(res => {
            return res.arrayBuffer();
        }).then((buffer) => {
            return WebAssembly.compile(buffer)
        }).then((mod) => {
            let importConf = config || {};
            return new WebAssembly.Instance(mod, importConf);
        }).catch((err) => {
            console.log(err);
        });
    }
})(window)