var one = document.getElementById('one');

    var a=1;
// var t = setInterval(function(){
//     if(a>10){
//         clearInterval(t)
//         return;
//     }
//     one.innerHTML+=a;
//     a++;
// },1000)
var t = setInterval(function(){

    one.innerHTML+=a;
    if(a<10){
        a++;
    }else{
        clearInterval(t);
        return;
    };
},1000)


for(var i=0;i<10;i++){
	(function(j){
		setTimeout(function(){
    		console.log(j)
		},1000*j);
	})(i)
}
