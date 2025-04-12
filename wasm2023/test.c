#include <stdio.h>
#include <emscripten.h>

int fib(int n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

int main() {
    emscripten_run_script("set_background_color(1)");
    printf("Hello world!\n");
    int res = fib(5);
    printf("fib(5) = %d\n", res);
    return 0;
}