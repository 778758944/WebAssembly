#include <stdio.h>
#define SIZE 10
int data[SIZE];
char str[SIZE];

void add(int value) {
	for (int i = 0; i < SIZE; i++){
		data[i] = data[i] + value;
	}
}

void showStr(){
	// printf("%s\n", str);
}

float addFloat(float f1, float f2){
	return f1 + f2;
}



int* getData() {
	return &data[0];
}

char* getStr() {
	return &str[0];
}