var $regForm = $('#regForm'),
    $submitBtn = $('#submitBtn');

$submitBtn.on('click',function(){

    var $name = $('#name'),
        $education = $('#education'),
        $gender = $('[name=gender]:checked'),
        $hobby = $('[name=hobby]');

    if ($name.val() == '') {
        alert('姓名不能为空！');
        return;
    };
    if ($gender.val() == undefined ) {
        alert('姓别不能为空！');
        return;
    };
    if ($education.val() == 0 ) {
        alert('请选择学历');
        return;
    };

    alert('恭喜！注册成功');

})