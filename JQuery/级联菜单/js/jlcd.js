 !function(window,document,$,undefined){
    //模拟后台数据
    var data = [
        {name:'北京市',id:100},
        {name:'河北省',id:101},
        {name:'山西省',id:202},
        {name:'天津市',id:20}
    ];


    var data2 = {
        100: [
            {name:'北京市',id:1001}
        ],
        101: [ 
            {name:'石家庄市',id:1011},
            {name:'邯郸市',id:1012},
            {name:'廊坊市',id:1013},
            {name:'保定市',id:1014},
            {name:'唐山市',id:1015},
        ],
        202: [
            {name:'太原市',id:2021},
            {name:'大同市',id:2022},
            {name:'忻州市',id:2023},
            {name:'临汾市',id:2024},
            {name:'运城市',id:2025},
        ],
        20: [
            {name:'天津市',id:201}
        ]
    };

    var $province = $('#province'),
        $city = $('#city'),
        $area= $('#area');

    function renderOptions(arr){

        var opts = [];
        for (var i = 0; i < arr.length; i++) {
            opts.push('<option value="',arr[i].id,'">',arr[i].name,'</option>')
        };
        console.log(opts.join(''))
        return opts.join('')
    }
    function renderOptions(arr){
        var opts =[];
        for (var i = 0; i < arr.length; i++) {
            opts.push('<option value="',arr[i].id,'">',arr[i].name,'</option>')
        };
        return opts.join('')
    }
    $province
            .append(renderOptions(data))//$province.html(renderOptions(data));html是改变 province 里面的内容
            .on('change',function(){
                var val = this.value,
                    city = data2[val];


                    if (val == -1) {
                        return
                    };


                $city.html('<option value="">请选择</option>'+renderOptions(city));
            });

}(window,document,jQuery); 