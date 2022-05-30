#include <iostream>

using namespace std;

int main()
{
  string name;
  int age;
  cout << "Enter your name: ";
  getline(cin, name);

  cout << "Enter your age: ";
  cin >> age;

  cout <<  "Hi my name is " << name << endl;
  cout << "I am " << age << " years old" << endl;
  return 0;
}