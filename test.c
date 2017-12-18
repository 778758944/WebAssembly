#include <stdio.h>
#include <emscripten.h>
int main(void){
	EM_ASM({ alert('from c') });
	printf("hello world");
	return 0;
}