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
        }
        return {
            Uppercase: upperCaseCount,
            Lowercase: lowerCaseCount
        };
    }
    const userInput = prompt("Enter a string: ");
    console.log(letterChecker(userInput));


}
