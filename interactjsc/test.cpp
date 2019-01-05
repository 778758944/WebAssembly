// #include <math.h>
// #include <stdio.h>
#include <emscripten.h>

/*
extern "C" {
    int int_sqrt(int x, char * s) {
        return sqrt(x);
    }
}
*/
/*
EMSCRIPTEN_KEEPALIVE
int daysInWeek() {
    return 7;
}
*/

// emscripten_run_script("alert('hi')");

EM_JS(void, call_alert, {
    alert("haha");
    throw "all done";
});

int main() {
    call_alert();
    return 0;
}


