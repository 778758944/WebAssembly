#!/bin/bash
# EXPORTED_FUNCTIONS  FUNCTION NEED EXPORT
# SIDE_MODULE JUST WASM
# EXTRA_EXPORTED_RUNTIME_METHODS="['cwrap', 'ccall']"
emcc $1.c -Os -s WASM=1 -s SIDE_MODULE=1 -s EXPORTED_FUNCTIONS='["_xor"]' -o $1.wasm

emcc xor.cpp -Os -s WASM=1 -s EXPORTED_FUNCTIONS='["_xo
r"]' -o xor.js

