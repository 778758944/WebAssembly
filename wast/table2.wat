(module
  (type (;0;) (func (param i32)))
  (type (;1;) (func))
  (type (;2;) (func (result i32)))
  (type (;3;) (func (result f64)))
  (import "env" "memoryBase" (global (;0;) i32))
  (import "env" "tableBase" (global (;1;) i32))
  (import "env" "abort" (func (;0;) (type 0)))
  (import "env" "_pass_fptr_to_js" (func (;1;) (type 0)))
  (import "env" "memory" (memory (;0;) 256))
  (import "env" "table" (table (;0;) 4 anyfunc))
  (func (;2;) (type 1)
    get_global 1
    i32.const 1
    i32.add
    call 1
    get_global 1
    i32.const 2
    i32.add
    call 1)
  (func (;3;) (type 2) (result i32)
    i32.const 26)
  (func (;4;) (type 2) (result i32)
    i32.const 42)
  (func (;5;) (type 1)
    nop)
  (func (;6;) (type 1)
    get_global 0
    set_global 2
    get_global 2
    i32.const 5242880
    i32.add
    set_global 3
    call 5)
  (func (;7;) (type 3) (result f64)
    i32.const 0
    call 0
    f64.const 0x0p+0 (;=0;))
  (global (;2;) (mut i32) (i32.const 0))
  (global (;3;) (mut i32) (i32.const 0))
  (export "__post_instantiate" (func 6))
  (export "_callback_0" (func 3))
  (export "_callback_1" (func 4))
  (export "_run_test" (func 2))
  (export "runPostSets" (func 5))
  (elem (get_global 1) 7 3 4 7))
