#include <iostream>
#include <emscripten.h>
#include <emscripten/val.h>
#include <emscripten/bind.h>
#include <string>
#include <cstdint>
#include <vector>
#include <stdlib.h>
#include <stdint.h>

struct Point2f {
    float x;
    float y;
};

struct PersonRecord {
    std::string name;
    int age;
};

struct pos {
    int x;
    int y;
    char * str;
};

struct Test64 {
    uint64_t x;
    uint64_t y;
};

// prevent c++ name mangling
extern "C" {
    void print(char * str) {
        std::cout << str << std::endl;
    }

    void showTagName(const emscripten::val &node) {
        std::string tagName = node["tagName"].as<std::string>();
        std::cout << tagName << std::endl;
    }

    int * getNumArr() {
        int * p = (int *) calloc(2, sizeof(int));
        p[0] = 11;
        p[1] = 12;
        return p;
    }

    struct pos * getPos() {
        struct pos * p = (struct pos *) calloc(1, sizeof(struct pos));
        char * str = (char *) calloc(6, sizeof(char));
        str[0] = 'H';
        str[1] = 'E';
        str[2] = 'L';
        str[3] = 'L';
        str[4] = 'O';
        p->x = 2;
        p->y = 3;
        p->str = str;
        return p;
    }

    int float_multiply_array(float factor, float * arr, int length) {
        for (int i = 0; i < length; i++) {
            arr[i] = factor * arr[i];
        }

        return 0;
    }

    void showPtr() {
        uint8_t r = 202;
        struct Test64 * p = (struct Test64 *) calloc(1, sizeof(struct Test64));
        p->x = r;
        printf("x = %lu\n", p->x);
    }
}

// bind class
class MyClass {
    public:
        MyClass(int x, std::string y): x(x), y(y) {}

        void incrementX() {
            ++x;
        }

        int getX() const {
            return x;
        }

        void setX(int _x) {
            x = _x;
        }

        static std::string getStringFromInstance(const MyClass &inst) {
            return inst.y;
        }
    private:
        int x;
        std::string y;
};

PersonRecord findPersonAtPos(Point2f) {
    struct PersonRecord p = {
        .name = "Jack",
        .age = 10 
    };

    return p;
}

EMSCRIPTEN_BINDINGS(my_module) {
    // bind function
    emscripten::function("showTagName", &showTagName);
    // bind class
    emscripten::class_<MyClass>("MyClass")
    .constructor<int, std::string>()
    .function("incrementX", &MyClass::incrementX)
    .property("x", &MyClass::getX, &MyClass::setX)
    .class_function("getStringFromInstance", &MyClass::getStringFromInstance);

    // bind value type
    emscripten::value_array<Point2f>("Point2f")
        .element(&Point2f::x)
        .element(&Point2f::y);

    emscripten::value_object<PersonRecord>("PersonRecord")
        .field("name", &PersonRecord::name)
        .field("age", &PersonRecord::age);

    emscripten::function("findPersonAtPos", &findPersonAtPos);
}


