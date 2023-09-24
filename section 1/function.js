function addNums(a, b){
    var c = a+b;
    console.log(c);

}
addNums(34,678);
// console.log(c);
const getAvg = function(m1, m2, m3, m4){
    let total = (m1+m2+m3+m4)*100
    console.log(total+'%');
}

let parcentage = getAvg(136, 199, 67, 136);
console.log(parcentage);
// Arrow Function
const fact = ( n ) => {
    let f = 1;
    for(let i=2; i<=n; i++){
        f = f*i;

    };
}
let ans = fact(6)
console.log(ans);
//  WAP to check if a number is prime.
const perfect=(n)=>{
    num=n**0.5;
    if (num%1==0){
        console.log('perfect sqrt',n);
    } 
}
for(let i=a; i<=b; i++)
    perfect(i);
}
//  WAP to check if a number is palindrome.
//  WAP TO take sum of all perfect square from 10 to 100. 