#include <iostream> 
#include "function.hpp" 

int main() {
    std::cout << "=== Programm Start ===" << '\n';
    std::cout << "Enter a number : " << '\n' ;
    int x {} ;
    std::cin >> x ;
    
    std::cout << "The number is : X = " << x << '\n' ;

    // extra result from :
    // header : function.hpp
    // source : function.cpp
    // main (here) : main.cpp 

    std::cout << "A + B = " << add(10,5) <<  '\n' ;
    std::cout << "A * B = " << multiply(30,10) << '\n' ;


    return 0 ;
}