var btn = document.getElementById('myBtn');
    ul = document.getElementsByTagName('ul')[0],
    div =document.getElementById('div'),
    input = document.getElementsByTagName('input'),
    sub = document.getElementById('sub'),
    border = document.getElementById('border'),
    // span = document.getElementsByTagName('span')[0],
    length = 0



    btn.onclick = function(){

        var text = document.createTextNode('删除');   
        var kong = document.createTextNode(' ');   
        var div = document.createElement('div');
        var span = document.createElement('span');
        var input = document.createElement('input');
        var button = document.createElement('button');
        ul.appendChild(div);
        div.appendChild(input);
        div.appendChild(span);
        span.appendChild(kong);
        div.appendChild(button);
        button.appendChild(text);

        if (length >= 3) {
            btn.disabled = "disabled";
        };
        console.log(length)
                
        button.onclick=function(){
        	if(confirm('你确定要删除么？')){
        		ul.removeChild(div);
            	btn.disabled = "";
            	length--
        	}else{
        		return;
        	}

        };

        length++

    }

    sub.onclick = function(){
        var arr=[]
        for (var i = 0; i < input.length; i++) {
            arr.push(input[i].value);
        };
        border.innerHTML=arr.join(' ');
    }




// var ul = document.getElementsByTagName('ul')[0];
// var div = document.getElementById('div');
// var input = document.getElementsByTagName('input');
// var myBtn = document.getElementById('myBtn');
// var sub = document.getElementById('sub');
// var border = document.getElementById('border');
// // var span = document.getElementsByTagName()[0];
// var length = 0;
//     console.log(border)

// myBtn.onclick=function(){
//     var div = document.createElement('div');
//     var text = document.createTextNode('删除');
//     var input = document.createElement('input');
//     var span = document.createElement('span');
//     var button = document.createElement('button');
//     var span = document.createElement('span');
//     var kong = document.createTextNode(' ');
//     ul.appendChild(div);
//     div.appendChild(input);
//     div.appendChild(span);
//     div.appendChild(button);
//     span.appendChild(kong);
//     button.appendChild(text);

//     if (length >= 3) {
//         myBtn.disabled = 'disabled';
//     };

//     length++

//     button.onclick=function() {
//         ul.removeChild(div);
//         length--;
//     }

// }

// sub.onclick=function(){
//     var arr = [];
//     for (var i = 0; i < input.length; i++) {
//         arr.push(input[i].value)
//     };
//     border.innerHTML=arr.join(' ');
// }





// var btn = document.getElementById('myBtn');
//     ul = document.getElementsByTagName('ul')[0],
//     div =document.getElementById('div'),
//     input = document.getElementsByTagName('input'),
//     sub = document.getElementById('sub'),
//     border = document.getElementById('border'),
//     // span = document.getElementsByTagName('span')[0],
//     length = 0



//     btn.onclick = function(){
//         if (length <= 3) {

//             var text = document.createTextNode('删除');   
//             var kong = document.createTextNode(' ');   
//             var div = document.createElement('div');
//             var span = document.createElement('span');
//             var input = document.createElement('input');
//             var button = document.createElement('button');
//             ul.appendChild(div);
//             div.appendChild(input);
//             div.appendChild(span);
//             span.appendChild(kong);
//             div.appendChild(button);
//             button.appendChild(text);

                
                    
//             button.onclick=function(){
//                 ul.removeChild(div);
//                 length--
//             };

//             length++

//         }
//     }

//     sub.onclick = function(){
//         var arr=[]
//         for (var i = 0; i < input.length; i++) {
//             arr.push(input[i].value);
//         };
//         border.innerHTML=arr.join(' ');
//     }