// we ad any matrix 
const mat = [
    [3,8,9,10],
    [1,7,2,4],
    [14,15,13,11],
    
]
// empty array to store all elements
const allElements = [];
// loop through each row

// sort the array
//if the sum in positive then sort a is greater than b
//if the sum in negative then sort a is less than b
//if the sum is zero then sort a is equal to b by order
allElements.flat().sort((a,b) => a-b);
// create a new matrix
let newMat = [];
// loop through the array and create a new matrix
for (let i = 0; i < allElements.length; i+=4){
    // push the elements to the new matrix
    //i is the starting index and i+4 is the ending index
    newMat.push(allElements.slice(i,i+4));
}
console.log(newMat);

