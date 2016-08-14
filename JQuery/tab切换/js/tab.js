
function  renderTabByClass(className) {
 var $target = $(className);
 console.log($target)
 $target.each(function(i,obj){
     console.log(i)
     console.log(obj)
     var $obj = $(obj),
         $lis = $obj.find('ul>li'),  
         $divs = $obj.find('div>div'),
         evt,
         timer;

     if($obj.hasClass('mover')){
         evt='mouseover';
     }else {
         evt = 'click';
     }

     if(evt == 'click'){

         $lis.on(evt,function(){
             var $this = $(this),
                 $index = $this.index();
             $this.addClass('on').siblings('.on').removeClass('on');
             
             $divs.eq($index).show().siblings().hide();
         });
     }else{
         $lis.on(evt,function(){
             var $this = $(this),
                 $index = $this.index();
            timer = setTimeout(function(){
                 $this.addClass('on').siblings('.on').removeClass('on');
                 $divs.eq($index).show().siblings(':visible').hide();
            },250)
            })
            .on('mouseout',function(){
                timer&&clearTimeout(timer);
            })

     }

 })
}

renderTabByClass('.tab');