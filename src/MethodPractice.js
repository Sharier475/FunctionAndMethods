//By Normal method we use basic calculation.
{
    let arr = [2, 5, 6, 8];

    arr.forEach(
        (num) => {
            console.log(num * num);
        }
    );
}


//Map Method basically we use map to create a new array. 
{
    let num = [32,67,48];

   let newArr = num.map(
        (val) =>{
            return val*val;
        }
    );
    console.log(newArr);
}


//Filter Method
{
    let arr1 = [34,35,32,67,56,98,45];
    let evenArray = arr1.filter((num) =>
    {
        return num % 2 === 0;
    }
);
console.log(evenArray);
}

//Reduce Method

{
    let arr2 = [1,2,34,,56,6];
    const output = arr2.reduce(
        (prev,curr) =>{
            return prev + curr;
        }
    );
    console.log(output);
}

// Using reduce method to get smallest number.
{
    let arr2 = [1,2,34,,56,6];
    const output = arr2.reduce(
        (prev,curr) =>{
            return prev > curr ? prev : curr;
        }
    );
    console.log(output);
}