#include <stdio.h>
#include <emscripten/emscripten.h>

int main(int argc, char **argv) {
	printf("Hello World\n");
}

void EMSCRIPTEN_KEEPALIVE myFunction(int argc, char ** argv){
	printf("myFunction called\n");
}