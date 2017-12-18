#include <stdio.h>
#include <emscripten.h>
void Alert(const char * str);

int main(void){
    Alert("Hello form C");
}

void Alert(const char * str){
    EM_ASM_ARGS({
        var msg = Pointer_stringify($0);
        console.log(msg);
    }, str);
}