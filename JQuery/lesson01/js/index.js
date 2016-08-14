var $btn=$('#btn');
$btn.on('click',function(){
    $('#txt').val($('#sel').val('上海'));
    // $('#sel').val()
    // $('#txt').val('abc'); //设置一个值   
    // $('#txt').val('abc'); //清空原来的值    
})




// 通过样式查找是否被点击

$('.header').on('click',function(){
    var $content=$('.content');
    $content.toggleClass('show');
    if($content.hasClass('show')){
        this.innerHTML='隐藏';
    }else{
        this.innerHTML='显示';
    }
});

// 通过文本查找是否被点击
// $('.header').on('click',function(){
//         if(this.innerHTML=='显示'){
//             this.innerHTML='隐藏';
//         }else{
//             this.innerHTML='显示';
//         };
//         $('.content').toggleClass('show');
//     })

//     $('.header').on('click',function(){
//         if(this.innerHTML=='显示'){
//             this.innerHTML='隐藏';
//         }else{
//             this.innerHTML='显示';
//         };
//         $('.content').toggleClass('show');
// })

// $('span').removeClass('red')

// $('#test').addClass('red')//给指定元素 添加CSS中的样式 red在这里是css中的class='red';

// $('#test').removeAttr('title')//删除一个属性

// $('#test').attr('title','abc')//attr里面有两个值得时候是 设置 并添加返回值

// $('#test').attr('class')//attr后面是一个值 就是 得到 所选的属性值

// var span = document.getElementById('test');

// span.title = 'abc';

// console.log(span)

// var $span = $('span');//选中页面上所有的span元素,前面的$可以不加

// var $span = $('span#test');

// $('#myBtn').css('background-color','red');

// $('.abc').css('background-color','pink');

// $('p').css('background-color','pink');


// $('span').css('background-color','blue');
// $('div span').css('background-color','green');


// jQuery('#myBtn').css('background-color','red')

// var myBtn = jQuery('#myBtn');
// myBtn.css('background-color','red')


// myBtn[0].style.backgroundColor = 'red';
// console.log(myBtn[0])



// var myBtn = document.getElementById('myBtn');

// console.log(myBtn);