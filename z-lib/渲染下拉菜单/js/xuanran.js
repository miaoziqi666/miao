// 声明变量,当点击的时候开始循环，并将循环的结果 存入指定 变量,最后 将 输出的变量存入 html

var chengshi=[
    '--请输入--', 
    '北京',
    '上海',
    '天津',
    '杭州',
    '深圳'
]

var select=document.getElementById('select');
var btn=document.getElementById('btn');
// btn.onclick=function(){
//     var selectHTML=[];
//     for (var i = 0; i < chengshi.length; i++) {
//        selectHTML.push('<option>'+chengshi[i]+'</option>') 
//     };
//     select.innerHTML=selectHTML.join('')
// }


// btn.onclick=function(){
//     var selectHTML=[];
//     for (var i = 0; i < chengshi.length; i++) {
//         selectHTML.push('<option>'+chengshi[i]+'</option>')
//     };
//     select.innerHTML=selectHTML.join(' ')
// }


// 方法二渲染菜单
var chengshi=[
    '--请输入--', 
    '北京',
    '上海',
    '天津',
    '杭州',
    '深圳'
]

$('btn').onclick=function(){

    var i,len=chengshi.length,str='';
    for(i=0;i<len;i++){
        str += '<option>'+chengshi[i]+'</option>';
    }
    $('select').innerHTML=str;
    
}