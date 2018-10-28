#include <stdio.h>
#include <string.h>
char arr[10] = "world";
typedef struct Person {
    char name[10];
    long age;
} Person;

Person p = {
    .age = 13,
    .name = "Messi",
};

int add(int a, int b) {
    int c = a + b;
    return c;
}

int getNum() {
    return arr[0];
}

int getAge() {
    printf("%s", p.name);
    if (strcmp(p.name, "Jack") == 0) {
        return p.age;
    }
    return 100;
}