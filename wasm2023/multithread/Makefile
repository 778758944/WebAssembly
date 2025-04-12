example: example.c
	emcc -g -pthread -s EXPORTED_FUNCTIONS='["_testThread", "_testThread2", "_testThread3"]' -s EXPORTED_RUNTIME_METHODS='["cwrap"]' example.c -o example.js