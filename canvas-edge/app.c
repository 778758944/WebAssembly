int Laplacian[3][3] = {
    {0, 1, 0},
    {1, -4, 1},
    {0, 1, 0},
};
short arr[1000000];

int gray(int R, int G, int B) {
    int a = (int)((R*299 + G*587 + B*114 + 500) / 1000);
    return a + 1;
};

int calcMask(int mask[][3], int rows, int x, int y, int width) {
    int maskWidth = rows;
    int maskHeight = 3;
    int temp = 0;
    int i, j;
    for(i = 0; i < maskHeight; i++) {
        for(j = 0; j < maskWidth; j++) {
            int tx = x + j;
            int ty = y + i;
            int gray = arr[(tx + (ty * width)) * 4];
            temp += (mask[i][j]) * gray;
        }
    }
    return temp;
}

void toGray(int width, int height) {
    int i;
    int len = width * height * 4;
    for(i = 0; i < len; i += 4) {
        int temp = gray(arr[i], arr[i + 1], arr[i + 2]);
        arr[i] = temp;
        arr[i + 1] = temp;
        arr[i + 2] = temp;
        arr[i + 3] = 255;
    }
}

void lapColor(int width, int height){
    int len = width * height * 4;
    int i;
    for(i = 0; i < len; i += 4){
        int x = (i/4) % width,
            y = ((i/4) / width) >> 0;
        int temp = calcMask(Laplacian, 3, x, y, width);
        temp = temp > 0 ? temp : 0;
        temp = temp < 255 ? temp : 255;
        arr[i] = temp;
        arr[i + 1] = temp;
        arr[i + 2] = temp;
        arr[i + 3] = 255;
    }
}