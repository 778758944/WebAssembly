/* 不考虑溢出 */
long fibonacci(int num){
    if(num <= 0) return 0;
    if(num == 1 || num == 2) return 1;
    long fn = 1,
        fn1 = 1,
        fn2 = fn + fn1;
    for(int i = 4; i <= num; i++){
        fn = fn1;
        fn1 = fn2;
        fn2 = fn1 + fn;
    }
    return fn2;
}