#include <stdio.h>
#include <emscripten/emscripten.h>
#include <string.h>
#define SIZE 10

int main(int argc, char ** argv) {
	printf("Hello World\n");
}

EMSCRIPTEN_KEEPALIVE
int myFunction() {
	// printf("MyFunction called");
	return strlen("abc");
	// return 1;
}

EMSCRIPTEN_KEEPALIVE
int * myArray() {
	int arr[SIZE] = {1, 2, 3, 4, 5};
	return arr;
}