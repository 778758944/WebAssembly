#!/bin/bash
emcc $1.c -O1 -g4 -s WASM=1 -s SIDE_MODULE=1 -o $1.wasm --source-map-base http://localhost:8888/