$('button').on('click',function(){
    
        var param = {
        'margin-left':'500px',
        'width':'100px',
        'height':'100px',
        'border-radius':'50px'
    }

    $('.red-div').animate(param,1000,function(){
        var $this = $(this);

        $this.css('background-color','blue');
        $this.animate({'margin-left':'0',
                        'width': '150px',
                        'height': '150px',
                        // 'background': 'red',
                        // 'border':'10px solid #000',
                        'border-radius':'0px',
        },1000,function(){
            $this.css({'background-color':'red'});
        });

    })
})
