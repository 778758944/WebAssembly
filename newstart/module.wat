(module
    (type $return_i32 (func (result i32)))
    (import "console" "log" (func $log (param i32)))
    (import "console" "consoleLogString" (func $logString (param i32) (param i32)))
    ;; 导入内存
    (import "js" "mem" (memory 1))
    ;; 数据存入内存　
    (data (i32.const 0) "Hi")
    ;; 导入表格
    (table 2 anyfunc)
    (elem (i32.const 0) $f1 $f2)
    (func $f1 (result i32)
        i32.const 42
    )
    (func $f2 (result i32)
        i32.const 13
    )
    (func $add (param $lhs i32) (param $rhs i32) (result i32)
        get_local $lhs
        get_local $rhs
        i32.add
    )
    (export "add" (func $add))
    (func $getAnswer (result i32) i32.const 42)
    (func (export "getAnswerPlus1") (result i32)
        call $getAnswer
        i32.const 1
        i32.add
    )

    (func (export "logIt")
        i32.const 13
        call $log
    )

    (func (export "sayHi")
        i32.const 0
        i32.const 2
        call $logString
    )

    (func (export "callByIndex") (param $i i32) (result i32)
        get_local $i
        call_indirect (type $return_i32)
    )
)
