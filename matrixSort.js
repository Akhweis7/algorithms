const mat = [
    [3,8,9,10],
    [1,7,2,4],
    [14,15,13,11],
    
]
const allElements = [];
for (let i = 0; i < mat.length; i++){
    for (let j = 0; j < mat[i].length; j++){
        allElements.push(mat[i][j]);
    }
}
allElements.sort((a,b) => a-b);
let newMat = [];
for (let i = 0; i < allElements.length; i+=4){
    newMat.push(allElements.slice(i,i+4));
}
console.log(newMat);

