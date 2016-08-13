

// 函数时钟  与 电脑时间相比 慢一秒

// setInterval(function() {
//     var now=new Date(),
//         h= now.getHours(),
//         m= now.getMinutes(),
//         s= now.getSeconds(),
//         clock =document.getElementById('clock');

//         // 被注释掉部分与 function fill0相同作用
//     // if (s<10) {
//     //     s='0'+s
//     // };
//     var times=fill0(h)+":"+fill0(m)+":"+fill0(s);
//     clock.innerHTML=times
// },1000)

// function fill0(num){
//     return num<10 ? "0"+num : num ;
// }
//

// 函数时钟 s++的方法 与上面的 不同 这个方法与  正点一样


clock =document.getElementById('clock');

     var now=new Date();
     var h= now.getHours();
     var m= now.getMinutes();

 setInterval(function() {

     var s= now.getSeconds();

     s++;
   
     
     var s= now.getSeconds(now.setSeconds(s));

     var times=fill0(h)+":"+fill0(m)+":"+fill0(s);
     clock.innerHTML=times;
 },1000)

function fill0(num){
 return num<10 ? "0"+num : num ;
}

setTimeout()


var obj = {};

obj.clock = function(date) {
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	
	return [h,m,s]
	
}

obj.fill0 = function(num) {
	return num < 10 ? "0" + num : num;
}

var initClock = function(){
	var d = new Date();
	var arr = obj.clock(d);
	var time = obj.fill0(arr[0])+":"+obj.fill0(arr[1])+":"+obj.fill0(arr[2])
	clock.innerHTML=time;
}

initClock();

setInterval(initClock,1000)
