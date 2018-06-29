#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
long fibonacci(int n);

int main(int agvc, char ** argv){
	int num;
	long res[50];
    struct timeval t_start, t_end;
    gettimeofday(&t_start, NULL);
    for (num = 1; num < 47; num++) {
        fibonacci(num);
    }
    gettimeofday(&t_end, NULL);
    int use = 1000000 * (t_end.tv_sec - t_start.tv_sec) + (t_end.tv_usec - t_start.tv_usec);
    float f_use = use / 1000;
    printf("time use %d us\n", use);

    // t_end = time(NULL);
    // printf("time: %.0f s\n", difftime(t_end, t_start));
	return 0;
}

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