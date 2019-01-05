#include <iostream>
#include <map>
#include <string>
#include <utility>


using namespace std;


int main() {
    map<string, int> m;
    m["name"] = 3;
    m["age"] = 11;

    for (pair<string, int> p : m) {
        cout << p.first << " = " << p.second << endl;
    }

    return 0;
}