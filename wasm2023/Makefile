exportfun: test.c
	emcc test.c -o test.js -s WASM=1 -s EXPORTED_FUNCTIONS='["_fib", "_main"]' -s EXPORTED_RUNTIME_METHODS='["cwrap"]' -s ALLOW_MEMORY_GROWTH=1

callJS: test2.c
	emcc test2.c -o test2.js -s WASM=1

memory1: test3.c
	emcc test3.c -o test3.js -s WASM=1 -s EXPORTED_FUNCTIONS='["_addOne", "_addOneArray", "_malloc", "_free", "_testPrint"]' -s EXPORTED_RUNTIME_METHODS='["cwrap", "getValue", "setValue"]' -s IMPORTED_MEMORY -s SHARED_MEMORY=1

debug: temp.c
	emcc -g temp.c -o temp.html
