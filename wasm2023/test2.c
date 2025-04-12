#include <time.h>
#include <stdlib.h>
#include <stdio.h>
#include <emscripten.h>

int main() {
    printf("WASM is running!\n");

    srand(time(NULL));
    int color_idx = rand() % 3;

    EM_ASM(
        console.log("(1) I have been printed from inline JavaScript!");
        console.log("I have no parameters and I do not return anything :(");
    );

    EM_ASM_({
        console.log("(2) I have received a parameter! It is:", $0);
        console.log("Setting the background to that color index!");
        set_background_color($0);
    }, color_idx);

    int result = EM_ASM_INT({
        console.log("(3) I received two parameters! They are:", $0, $1);
        console.log("Let's return their sum!");
        return sum($0, $1);

        function sum(a, b) {
            return a + b;
        }
    }, 13, 10);

    printf("(4) The C code received %d as result!\n", result);
    return 0;
}