#include <stdio.h>
long add(int x, int y){
	long a = (long) x + y;
	printf("%ld\n", a);
	return a;
}

int square(int x) {
	return x * x;
}