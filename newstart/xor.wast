(module
 (import "env" "__memory_base" (global $__memory_base i32))
 (global $STACKTOP (mut i32) (i32.const 0))
 (global $STACK_MAX (mut i32) (i32.const 0))
 (export "__post_instantiate" (func $__post_instantiate))
 (export "_xor" (func $_xor))
 (export "runPostSets" (func $runPostSets))
 (func $_xor (; 0 ;) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  ;;@ xor.c:2:0
  (set_local $2
   (i32.xor
    (get_local $1)
    (get_local $0)
   )
  )
  (get_local $2)
 )
 (func $runPostSets (; 1 ;)
  (nop)
 )
 (func $__post_instantiate (; 2 ;)
  (set_global $STACKTOP
   (get_global $__memory_base)
  )
  (set_global $STACK_MAX
   (i32.add
    (get_global $STACKTOP)
    (i32.const 5242880)
   )
  )
  (call $runPostSets)
 )
)
