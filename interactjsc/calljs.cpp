#include <emscripten.h>
#include <stdio.h>


EM_JS(void, call_alert, (), {
  alert('hello world!');
  document.body.innerHTML = "HELLO, WORLD";
});

int main() {
//   call_alert();
  EM_ASM({
      alert("hello, wasm" + $0);
  }, 100);

  int x = EM_ASM_INT({
      return $0 + 1;
  }, 100);

  printf("i receive %d\n", x);
  return 0;
}