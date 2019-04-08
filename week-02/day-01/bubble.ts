//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

function bubble(arr:number[]){
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<arr.length-i-1;j++){
            if (arr[j]>arr[j+1]){
                //swap
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

function advancedBubble(arr:number[],io:boolean){
    if (io) {
        return bubble(arr).reverse();
    }else{
        return bubble(arr);
    }
}




