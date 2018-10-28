(module
  (type (;0;) (func (param i32 i32) (result i32)))
  (type (;1;) (func))
  (func $add/add (type 0) (param i32 i32) (result i32)
    get_local 0
    get_local 1
    i32.add)
  (func $null (type 1))
  (table (;0;) 1 anyfunc)
  (memory (;0;) 0)
  (global (;0;) i32 (i32.const 8))
  (export "memory" (memory 0))
  (export "table" (table 0))
  (export "add" (func $add/add))
  (elem (i32.const 0) $null))
