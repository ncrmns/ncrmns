'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.


var num:number = 100 ;
var fizz:number = 3;
var buzz:number = 5;


for (let i = 1 ; i <= num ; i++ ){


    if ( i % fizz === 0 && i % buzz === 0){
        console.log( 'FizzBuzz' );

    } else if ( i % fizz === 0){
        console.log( 'Fizz')

    } else if ( i % buzz === 0){
        console.log( 'Buzz');
        
    } else {
        console.log( i );
    }

} 



