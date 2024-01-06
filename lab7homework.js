var result = document.querySelector(".result");
var minus = document.querySelector('.minus');
var add = document.querySelector('.add');
var reset = document.querySelector(' .reset')
var a = 0;
var b = 0;
var a1 = 0;
var a2 = 0;
console.log(minus);
console.log(add);
function calc(on){
    if(on==" add"){
        a++;
        result.innerText = ":"+(b+a);
    }else if(on==" minus"){
        b--;
        result.innerText = ":"+(a+b);
    }
}
function res(restart){
    a = 0;
    b = 0;
    result.innerText = ":" +(b+a);
}