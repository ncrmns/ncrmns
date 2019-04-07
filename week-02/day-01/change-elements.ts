// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

var numlist= [1,2,3,8,5,6];

var numlist2 = numlist.map(item => {
         if (item==8){
        return 4;    
        }else{
            return item;
        }
    })

console.log(numlist2);





