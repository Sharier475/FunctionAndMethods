{
    function countVowels(str) {

        let count = 0
        for (const char of str) {
            if (char === "a" ||
                char === "e" ||
                char === "i" ||
                char === "o" ||
                char === "u"
            ) { count++; }
        }
        return count;
    };

    console.log(countVowels("Sharier"));
}



//same solution using Arrow Function
{
    const countVowels = (str) => {
        let count = 0;
        for (const char of str) {
            if (char === "a" ||
                char === "e" ||
                char === "i" ||
                char === "o" ||
                char === "u") {
                count++;
            }
        }
        return count;

    }
    console.log(countVowels("ILoveBangladesh"));

}

// Letter Checker Count 
{
    const letterChecker = (str) => {
        let upperCaseCount = 0;
        let lowerCaseCount = 0;
        for (const char of str) {
            if (/[A-Z]/.test(char)) {
                upperCaseCount++;
            }
            else if (/[a-z]/.test(char)) {
                lowerCaseCount++;
            }
            else {
                console.log("Invalid Input");
            }
        }
        return {
            Uppercase: upperCaseCount,
            Lowercase: lowerCaseCount
        };
    }
    // const userInput = prompt("Enter a string: ");
    // console.log(letterChecker(userInput));


}

//Write a function fizzBuzz that logs numbers from 1 to 50. But for multiples of 3, log "Fizz", for multiples of 5 log "Buzz", and for multiples of both, log "FizzBuzz".

{
    const fizzBuzz = () => {
        for (i = 1; i <= 50; i++) {
            if (i % 15 === 0) console.log("FizzBuzz");
            else if (i % 3 === 0) console.log("Fizz");
            else if (i % 5 === 0) console.log("Buzz");
            else console.log(i);
        }
    }

    fizzBuzz();

}



