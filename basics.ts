function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase+ result);
    }
    return result;
}

let number1:number;
let number2 = 2.8;
const printResult = true;
let resultPhrase: string;

add(number1, number2, printResult, resultPhrase);