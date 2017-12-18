(function(W){
	function loadWebAssembly(path, importEnv) {
		importEnv = importEnv || {};
		return fetch(path)
			.then(res => res.arrayBuffer())
			.then((buffer) => {
                return WebAssembly.compile(buffer);
            })
			.then(mod => {
                console.log(mod);
                var defaultEnv = {
                    memoryBase: 0,
                    tableBase: 0,
                    memory: new WebAssembly.Memory({initial: 256, maximum: 256}),
                    table: new WebAssembly.Table({initial: 0, maximum: 0, element: "anyfunc"})
                };
                var imports = {env: {}};
                var env = Object.assign(defaultEnv, importEnv);


                Object.assign(imports.env, env);
                return new WebAssembly.Instance(mod, imports);
            })
	}

	W.loadWebAssembly = loadWebAssembly;

})(window);