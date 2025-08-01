
const readline = require('readline').createInterface({
    
    input: process.stdin,
    output: process.stdout,
    
});

const ones = {
  "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
  "six": 6, "seven": 7, "eight": 8, "nine": 9,
  "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13,
  "fourteen": 14, "fifteen": 15, "sixteen": 16,
  "seventeen": 17, "eighteen": 18, "nineteen": 19
};

const tens = {
  "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50,
  "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90
};

const kteer = {
  "hundred": 100,
  "thousand": 1000,
};


function changer(ques){
  const lower = ques.toLowerCase().split(/[\s-]+/);
  let total = 0;
  let current = 0;

    for (words of lower){
         if (ones[words]) {
      current += ones[words];
    } else if (tens[words]) {
      current += tens[words];
    } else if (words === "hundred") {
      current *= 100;
    } else if (words === "thousand") {
      total += current * 1000;
      current = 0;
    } else {
      console.log(`Unknown word: ${words}`);
    }
    }
    if (global.gc){
      console.log("garbage collected")
    }else{
      console.log("Didn't collect the garbage\nrun the code with (node --expose-gc --inspect .\word2num.js) to collect")
    }
 return total + current;
}




readline.question("7t raqam ktabeh: ",function(answer){
    const result = changer(answer);
  console.log(`Result: ${result}`);
  readline.close();
})