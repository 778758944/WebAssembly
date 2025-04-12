
void addOne(int * input_ptr, int * output_ptr) {
    *output_ptr = (*input_ptr) + 1; 
};

void addOneArray(int *input_ptr, int *output_ptr, int len) {
    for (int i = 0; i < len; i++) {
        output_ptr[i] = input_ptr[i] + 1;
    }
}

int testPrint(int * p) {
    return p[0];
}