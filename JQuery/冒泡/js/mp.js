!function(window,document,$,undefined){
function abc(){
    var $left = $('.left');


    $left
        .on('mouseenter',function() { //mouseover
            $left.animate({right:0},300);
        })
        .on('mouseleave',function() { //mouseout
            $left.animate({right:'-50px'},300);
        })

};

abc();


}(window,document,jQuery)



