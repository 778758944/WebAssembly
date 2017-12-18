#include <stdio.h>
#include <emscripten.h>

int main() {
	int val1 = 21;
	int val2 = EM_ASM_INT({return $0 * 2}, val1);
	printf("%d", val2);
	return 0;
}
