#!/bin/bash
#emcc $1.c -Os -s WASM=1 -s SIDE_MODULE=1 -o $1.wasm
emcc -O2 -o $1.js $1.c
