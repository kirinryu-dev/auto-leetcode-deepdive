#include <iostream>
#include <string>


// class
class Secret {
public:
   std::string name ;

private:
   int password ;

public:
   void sayHi(){
    std::cout << "Hiii!!!" << std::endl ;

   }

};
// struct 
struct Person {
    std::string name ;
    int age ;

};

int main () {
    // struct 
    Person P1{"Alice", 25} ;
    std::cout << P1.name << std::endl ;
    std::cout << P1.age << std::endl ;
    
    // class
    Secret mySecret ;
    mySecret.name = "secret agent 007" ;
    std::cout << "Im secret agent : " << mySecret.name << std::endl ;
    

}