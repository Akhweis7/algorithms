
function comma(input) {
    const first = [];
    const second = [];
    const third = [];
    const fourth = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "?") {
            first.push(input[i]);
        } else if (input[i] === "!") {
            second.push(input[i]);
        } else if (input[i] === ",") {
            third.push(input[i]);
        } else if (input[i] === ".") {
            fourth.push(input[i]);
        }
    }

    if ((first.length === second.length) && (third.length === fourth.length)) {
        const result = [];
        
        const maxLength = Math.max(first.length, third.length);
        for (let i = 0; i < maxLength; i++) {
            if (i < first.length) {
                result.push(first[i]);
            }
            if (i < second.length) {
                result.push(second[i]);
            }
            if (i < third.length) {
                result.push(third[i]);
            }
            if (i < fourth.length) {
                result.push(fourth[i]);
            }
        }
        
        console.log(result.join(""));
    } else {
        console.log("False");
    }
}
