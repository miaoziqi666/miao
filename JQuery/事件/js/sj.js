var div = document.createElement('div');
var txt = document.createTextNode('abc');

div.appendChild(txt);

document.body.appendChild(div);

$('body').append('<div>abc2</div>')
$('<div>abc3</div>').appendTo('body')





// $('#btn').on('click',function(){

// })
// 
// 
// var getTotal = function(a,b) {
//     var total=0;
//     for (var i = a; i <= b; i++) {
//         total += i;
//     };
//     return total;
// }

// var a = getTotal(30,90);
// console.log(a);          

var myBtn=document.getElementById('myBtn');

function show() {
    alert('def');
}

myBtn.addEventListener('click',show,false);

var removeEntBtn=document.getElementById('removeEntBtn');

removeEntBtn.addEventListener('click',function(){
    myBtn.removeEventListener('click',show);
});

// var getTotal = function(from,to) {
//     var total=0;
//     for (var i = from; i <= to; i++) {
//         if(i%2 == 0){
//             total += i;
//         }
//     };
//     return total;
// }

// var a = getTotal(3,50);
// console.log(a);
// 


// var getTotal = function(from) {
//     var total=1;
//     for (var i = 1; i <= from; i++) {
//             total *= i;
//     };
//     return total;
// }

// var a = getTotal(5);
// console.log(a);