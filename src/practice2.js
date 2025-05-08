{
    let marks = [80,87,89,90,92,97,78,45,76,99,100]

    let score = marks.filter(
        (res) =>{
            return res > 90 && res <= 100 ;
        }
    );
    console.log(score);
}

{
    let n = prompt("Enter a number: ")

    let arr = [];
    
    for (let i = 1; i<=n; i++){
        arr[i-1] = i; 
    }
    console.log(arr);

    let sum = arr.reduce(
        (res,curr) =>{
            return res + curr;
        }
    );
    console.log(sum);

    let multification = arr.reduce(
        (res,curr) =>{
            return res * curr;
        }
    );
    console.log(multification);



}