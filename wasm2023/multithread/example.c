#include <stdio.h>
#include <unistd.h>
#include <pthread.h>
#include <emscripten.h>

void *thread_callback(void * arg) {
    sleep(10);
    printf("Inside the thread: %d\n", *(int *)arg);
    return NULL;
}

void *thread_callback2(void * arg) {
    int i;
    for (i = 0; i < 10000; i++) {
        sleep(5);
        puts("call thread 2");
    }
    return NULL;
}

void *thread_callback3(void * arg) {
    sleep(5);
    puts("call javascript");
    EM_ASM({
        console.log(22);
        testReturn();
    });
    return NULL;
}

void testThread() {
    pthread_t thread_id;
    int t = 30;
    pthread_create(&thread_id, NULL, thread_callback, &t);
    // pthread_detach(thread_id);
    puts("After the thread 1");
}

void testThread2() {
    pthread_t thread_id;
    pthread_create(&thread_id, NULL, thread_callback2, NULL);
    // pthread_detach(thread_id);
    puts("After the thread 2");
}

void testThread3() {
    pthread_t thread_id;
    pthread_create(&thread_id, NULL, thread_callback3, NULL);
    puts("After the thread 3");
}

// int main() {
//     puts("Before the thread");
//     pthread_t thread_id;
//     int arg = 42;
//     pthread_create(&thread_id, NULL, thread_callback, &arg);
//     pthread_join(thread_id, NULL);
//     puts("After the thread");
//     return 0;
// }