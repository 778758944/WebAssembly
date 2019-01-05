#!/bin/bash
#/Users/wentaoxing/Documents/emsdk/emscripten/1.38.20/emcc test.cpp -o index.html -s EXPORTED_FUNCTIONS='["_int_sqrt"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'
/Users/wentaoxing/Documents/emsdk/emscripten/1.38.20/emcc test.cpp -o index.html