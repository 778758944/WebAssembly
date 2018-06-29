#include <emscripten.h>
extern "C" {
  double SquareVal(double val) {
    return val * val;
  }
}