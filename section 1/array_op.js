const nums = [3, 56, 23, 8, 23, 98];

// WAP to print all the even number in the array

// 1st way - using traditional foe loop

for(let i=0; i<nums.length; i++ ){
    console.log(nums[i]);
}

console.log('--------------');

for(let i=0; i<nums.length; i++){
    if(nums[i]%2 === 0){
        console.log(nums[i]);
    }
};

console.log('--------for of loop--------');

// 2nd way - using for of loop

for (let n of nums){
    if(n%2===0)
    console.log(n);


}

console.log('--------for each function---------');
// 3rd way - using for each function

nums.forEach( (n) =>{
    if(n%2 === 0)
    console.log(n);

})

// WAP to print square of all the number in given array
const newNums = [14, 16, 18, 25, 120]
for(let a of newNums){
    // console.log( a**2);
}

