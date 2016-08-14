!function(window,document,$,undefined) {

    var lis = [
        {name:'中'},
        {name:'中国'},
        {name:'中国人'},
        {name:'中国人民银行'},
        {name:'中国建设银行'},
        {name:'中国农业银行'},
        {name:'中国人打小日本'},
        {name:'中雍志刀'},
        {name:'中我id卡给你'},
        {name:'中你麻痹'}
    ];

    var $div = $('.div'),
        $ul = $div.find('ul'),
        $input = $div.find('input'),
        index;

    $input.on('keyup',function (e) {
        var val = this.value,
            key = e.keyCode,
            len = $ul.find('li').size();

        if (key == 38 || key == 40) {

            index = $ul.find('li.hover').index();
            if (index<0) {
                index=0;
            }else{
                index++;
            }

            if(index > len-1){
                index = 0;
            }

            $ul
                .find('li:eq('+index+')')
                .addClass('hover')
                .siblings('.hover')
                .removeClass('hover');
            return
        };

        if(val == ''){
            $ul.hide();
        }else{
            $ul.html(bianli(lis,val));
            $ul.show();
        }

    });




    function bianli(xingcan,names) {

        var liss=[];
        for (var i = 0; i < xingcan.length; i++) {
            var name = xingcan[i].name;

            if (name.indexOf(names)>-1) {
                liss.push('<li>',name,'</li>');
            };

        };
        return liss.join('');

    } 




}(window,document,jQuery)