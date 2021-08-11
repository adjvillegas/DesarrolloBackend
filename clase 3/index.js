let arr1 = ["2**2","**", "3**3**"];
let arr2 = ["a", "**", "ssss"];
let arr3 = ["**"];
let arr4 = [3,"**", 4, "**", 4, "**", 3];

// Forma 1
function a1 (arr) {
    if (arr.includes("**") && !arr.includes("**", -1)) 
    if (!isNaN(arr[0]) && !isNaN(arr[2]))
        return arr[0] ** arr[2]
        else
        return null;
    
}

function a2 (arr) {
    arr.forEach(e => {
        if ()
    });
    return 0
}

console.log('Forma 1:' + a1(arr2))
console.log('Forma 2:' + a2(arr1))


function test(...a) {
    console.log(a.reduce(a, b => a+b,0))
}

test(1,2,3,4,5,)
