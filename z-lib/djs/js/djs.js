var daojishi=function() {
    var startBtn=$('startBtn');
    var userIpt=$('userIpt');
    var userSel=$('userSel');
    var time=$('time');
   	var timer;
   	var a=true;


    startBtn.onclick=function(){
        var sel=userSel.value;
        var ipt=userIpt.value;
        var total;
        if(isNaN(ipt)||ipt==''){
        	alert('请输入一个数字！')
        }
        
        if (sel==0) {
            return
        };
        //数据检查
        //return;
//      startBtn.disabled="disabled";//setAttribute('disabled');
		startBtn.innerHTML='暂停';
		startBtn.onclick=function(){
			if(a===false){
				startBtn.innerHTML='暂停';
				a=true;
			}else{
				startBtn.innerHTML='继续';
				a=false;				
			}
/*			a=false;  //第二次试验 lose
			startBtn.innerHTML='继续';
			startBtn.onclick=function(){
				a=true;
				startBtn.innerHTML='展厅';
			}*/
//			clearInterval(timer);  //第一次试验 lose
//			startBtn.innerHTML='继续';
		};
        total = sel*ipt;
        countDown(total);
        h=Math.floor(total/(60*60));
        m=Math.floor((total%(60*60))/60);
        s=Math.floor(total%60);
        
        time.innerHTML=fill0(h)+':'+fill0(m)+':'+fill0(s);
        // console.log(total)
    }


    function countDown(seconds) {
        var h,m,s;
        function go(){
	        if(a){
	        	seconds--;
	        }else{
	        	seconds;
	        }
		        if(seconds == 0){
		        	filll = "0"+"0"+":"+"0"+"0"+":"+"0"+"0";
		        	time.innerHTML=filll;
		            clearInterval(timer);
		//          startBtn.removeAttribute('disabled');
		            alert('计时结束');
		        }else if(seconds<10){
		            // time.className='red-txt'; 加载css中带有class标签的的样式
		            time.style.color='red';
		        }
		        h=Math.floor(seconds/(60*60));
		        m=Math.floor((seconds%(60*60))/60);
		        s=Math.floor(seconds%60);
		
		        time.innerHTML=fill0(h)+':'+fill0(m)+':'+fill0(s);
        };

        	timer=setInterval(go,1000)

    }
}
daojishi();























// var daojishi = function() {

//     var startBtn = $('startBtn');
//     var userIpt = $('userIpt');
//     var userSel = $('userSel');
//     var time=$('time');

//     startBtn.onclick = function(){
//         var ipt = userIpt.value;
//         var sel = userSel.value;
//         var total;
//         total=ipt*sel;
//         countDown(total);

//         console.log(total);
//     }

//     function countDown(seconds) {

//         setInterval(function(){
//             seconds--;

//             var h,m,s;
//             h=Math.floor(seconds/(60*60));
//             m=Math.floor(seconds%(60*60)/60);
//             s=Math.floor(seconds%60);

//             time.innerHTML = fill0(h)+':'+fill0(m)+':'+fill0(s);

//         },1000)
//     }
// };

// daojishi();


