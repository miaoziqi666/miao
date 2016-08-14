!function(window,document,$,undefined) {

    $(window).on('scroll',function(){
        console.log(scroll);
        var $this = $(this);
        var st = $this.scrollTop();
        var theight = $('.top-menu').height();
        var $lingdong = $('.lingdong');
        var $bottom = $('.bottom');

        if(st >= theight) {
            $lingdong.add($bottom).addClass('fixed');
        }else{
            $lingdong.add($bottom).removeClass('fixed');
        }


     if(st >= theight) {
         $lingdong.addClass('fixed');
     }else{
         $lingdong.removeClass('fixed');
     }
     if(st >= theight) {
         $bottom.addClass('fix');
     }else{
         $bottom.removeClass('fix');
     }
    })


    $(window).on('scroll',function(){
        var $this = $(this);
        var st = $this.scrollTop();
        var wheight = $this.height();
        var $sm = $('.bottom-sm');
        if(st>wheight){
            $sm.slideDown();
        }else{
            $sm.slideUp();
        }


    })
    $('.bottom-sm').on('click',function(){
        $('body').animate({'scroll-top':0},300);//{'scroll-top':0} ={scrollTop:0}
    })

}(window,document,jQuery)



