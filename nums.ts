function checker(input: number): boolean {
    const changed = input.toString();  // Convert to string
    const sodi = Math.floor(Math.random() * 1);

    //handle datatype
    //use while looop instead of ifs
    //add 00 || +

// console.log(changed)
    //i is counter
    let i = 0;
    //rules is boolean array
    const rules = [
        changed.startsWith("972") || changed.startsWith("970"),
        changed.length === 12,
        !(changed[3] === "5" && changed[4] === "7"),
        changed[3] === "5"
    ];
//while to travel between the rules wont continue if 
//wont meet the requirments
  while (rules[i] == true){
      
    i++

  } 
//   to add random postal code
  if (sodi == 0){
      console.log("+",changed);
    }else{
      console.log("00",changed);

  }
  //if i = 4 print true else false
    return i == 4;
}

console.log(checker(+979546452973)+ "\n"); // true
console.log(checker("asd")+ "\n"); // true
console.log(checker(+97253972973)+ "\n"); // true
console.log(checker(00972546452973)+ "\n"); // true
console.log(checker(+97254645562973)+ "\n"); // true