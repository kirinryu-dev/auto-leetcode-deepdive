#include <iostream> 

// data container 
struct Person {
    std::string name ;
    int age ; 
} ;

// main function 
int main() {
    // how to define variable 
    int x ; // define a variable named x
    int y, z; // define tow variable named y and z
    
    // variable assignment 
    // int width ;
    // width = 4 ;
    // width = 5 ;
    // std::cout << width ;
    // width = 6 ;


    // std::cout << width ;
    // int width {5} ;// define variable and initialize with initial value 5 
    // std::cout << width ;

    // different form of initialization 
    // int a ; // default initialization with no initializer
    // int b = 5 ; // initialisation with assignment operator = 
    // int c (6) ; // initialization with initial value in parenthesis
    // this is modern initialization [prefered ways]
    // int d {7} ;
    // int e {} ;
    // e = 8 ;
    // std::cout << d  << std::endl ;
    // std::cout << e << std::endl ;
    // the initialization that is accepted is brace initialization 
    // int hight {9} ;
    // int width = {10} ;
    // std::cout << hight << std::endl ;
    // std::cout << width << std::endl ;
    // why this brace-initialization is more appraciated is 
    //  its a modern way and its prevent *narrowing* data loss 
    // so list-init says : if you might lose data , i wont let you compile !!

    // here are the basics type 
    int a {11} ;
    double b {12} ;
    char c {'x'} ;

    // array
    int arr[]{1,2,3}
    
    // Point p{10,10} ;
    // std::cout << a << std::endl ;
    // std::cout << b << std::endl ;
    // std::cout << c << std::endl ;
    // std::cout << arr << std::endl ;
    // std::cout<< p.x << std::endl ;

    Person P1{"Alice", 25} ;
    Person P1{"Kafka", 30} ;
    std::cout << P1.name << std::endl ;


    return 0 ;
}

