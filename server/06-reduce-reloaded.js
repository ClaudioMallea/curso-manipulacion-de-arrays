let arr = [1,2,3,3]

function quantityArray(arr){
    let F = (acc, value)=>{

        let b = {...acc}
        if(acc[value]){
            acc[value] = b[value] +1;
        }
        else{
            acc[value] = 1;
        }

        return acc

    };
    return arr.reduce(F, {} )

}

console.log(quantityArray(arr));

let a = {1:2};
console.log(a[1]);