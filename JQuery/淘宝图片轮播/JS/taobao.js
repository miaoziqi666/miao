/*!function(window,document,$,undefined) {

    function renderImgSlider($target){

        if($target.length == 0){
            return;
        }
        var $indicator = $target.find('.indicator').find('li')

        $indicator.on('click' ,function(){
            var $this = $(this),
                index = $this.index(),
                $lis = $('.img-slider ul li');
            // $this.find('li')
            $this.addClass('on').siblings().removeClass('on');
            $lis.eq(index).show().siblings().hide();

        })

    }

    renderImgSlider($('.img-slider'));

}(window,document,jQuery);
*/ 





// !function(window,document,$,undefined) {

//     function renderImgSlider($target){

//             if($target.length == 0){
//                 return;
//             }
//         var $indicator = $target.find('.indicator').find('li');

//         $indicator.on('click',function(){
//             var $this = $(this),
//                 index = $this.index(),
//                 $ul = $target.find('ul'),
//                 $lis = $ul.find('li'),
//                 width = $lis.width();

//             $this.addClass('on').siblings().removeClass('on');
//             // $lis.eq(index).show().siblings().hide();
//             $ul.animate({'margin-left': - index * width + 'px'},500,function(){

//         //     $ul.animate({'margin-left':'-520px'},1000,function(){
//         //         $ul
//         //             .append($lis.eq(0))
//         //             .css({'margin-left':0});
//             });
//         })

//     }


//     renderImgSlider($('.img-slider'))
// }(window,document,jQuery)



function renderImgSlider($target){
    if($target.length == 0){
        return;
    }
    var $indicator = $target.find('.indicator').find('li');
    var $arrows = $target.find('.prev a');
    var $timer,
        $ul = $target.find('ul'),
        $lis = $ul.find('li'),
        width = $lis.width();

    $ul.find('li').each(function(i,obj){
        $(obj).attr('indx',i);
    })
    $ul.find('li').each(function(i,obj){
        $(obj).attr('index',i)
    })
    $indicator.on('click',function(e,type,direction){
        var $this = $(this),
            index = $this.index(),
            $lis = $ul.find('li');
            if($('ul:animated').length > 0) {
                return;
            }

         $this.addClass('on').siblings().removeClass('on');
        if(type){
            if (direction =='right') {
                $ul/*.stop()*/.animate({'margin-left':'-520px'},500,function(){
                    $ul
                        .append($lis.eq(0))
                        .css({'margin-left':0});
                });
            } else {
                    $ul
                        .prepend($lis.eq($lis.length-1))
                        .css({'margin-left':'-520px'});
                $ul/*.stop()*/.animate({'margin-left':0},500,function(){

                });

            }
        }else{
            $ul.animate({'margin-left':-index*width+'px'},500)

        }
    })

    $target
        .on('mouseover',function(){
            $arrows.show();
            clearInterval(timer)
        })
        .on('mouseout',function(){
            $arrows.hide();
            run();
        })
        // .on('click',function(){
        // })

    $arrows.on('click',function(){
        var $this=$(this),
            currIndex = getCurrIndex(),
            direction = 'right';

        if($this.hasClass('left')){
            // todo 点击向左翻
            currIndex--;
            if (currIndex<0) {
                currIndex = $indicator.length-1;
            };
            direction = 'left';
            // $indicator.eq(currIndex).trigger('click')
        }else{
            currIndex++;
            if (currIndex>$indicator.length-1) {
                currIndex = 0;
            };
        }
            $indicator.eq(currIndex).trigger('click',['trigger',direction])
    })


    function run() {
        timer = setInterval(function(){
            $arrows.filter('.right').trigger('click')
        },3000)
    }
    run();

    function getCurrIndex() {
        return $indicator.filter('.on').index();
        // console.log(index);
    }

}

renderImgSlider($('.img-slider'))