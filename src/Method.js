{
    let arr = ["Dhaka", "Cumilla", "khulna", "Rajshahi"];

arr.forEach(
    (val) => {
        console.log(val);
    });


}

{
    let arr = ["Mango","Banana","Lichi","Apple"]

arr.forEach(
    (val) => {
        console.log(val.toUpperCase());
    }
);
}


{
    let arr = ["Mango","Banana","Lichi","Apple"]

    arr.forEach(
        (val,indx,arr) => {
            console.log(val.toUpperCase(),indx,arr);
        });
}