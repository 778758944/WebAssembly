(function(W){
	function loadWebAssembly(path, importEnv) {
		// importEnv = importEnv || {};
		return fetch(path)
			.then(res => res.arrayBuffer())
			.then((buffer) => {
                var defaultEnv = {
                    memoryBase: 0,
                    tableBase: 0,
                    memory: new WebAssembly.Memory({initial: 256, maximum: 256}),
                    table: new WebAssembly.Table({initial: 0, maximum: 0, element: "anyfunc"})
                };
                var imports = {env: {}};
                var env = importEnv ? Object.assign(defaultEnv, importEnv) : defaultEnv;


                Object.assign(imports.env, env);

                return WebAssembly.instantiate(buffer, imports);
            })
	}

	W.loadWebAssembly = loadWebAssembly;

})(window);