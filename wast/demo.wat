(module
    (import "env" "log" (func $log (param i32)))
    (import "env" "logString" (func $logString (param i32 i32)))
    (import "env" "memory" (memory 1))
    (table 2 anyfunc)
    (data (i32.const 0) "Hi")
    (func $add (param $lhs i32) (param $rhs i32) (result i32)
        get_local $lhs
        get_local $rhs
        i32.add
    )
    (func $getAnwser (param $i i32) (result i32)
        get_local $i
        i32.const 2
        i32.add
    )
    (func $f1 (result i32)
        i32.const 42
    )
    (func $f2 (result i32)
        i32.const 13
    )
    (elem (i32.const 0) $f1 $f2)
    (type (;0;) (func (result i32)))
    (func (export "callByIndex") (param $i i32) (result i32)
        get_local $i
        call_indirect (;0;) (type 0)
    )
    (func (export "getAnwserPlus1") (result i32)
        i32.const 2
        call $getAnwser
        i32.const 1
        i32.add
    )
    (func (export "logIt") 
        i32.const 13
        call $log
    )
    (func (export "writeHi")
        i32.const 0
        i32.const 2
        call $logString
    )
    (export "add" (func $add))
)