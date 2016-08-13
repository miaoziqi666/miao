var checkForm=function(){

    var name = $('name'),
        age = $('age'),
        mobile = $('mobile'),
        email = $('email'),
        education = $('education'),
        mobileREG=/^1\d{10}$/,
        filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        hobbies = document.getElementsByName('hobby');

        console.log(hobbies);
// 姓名
    if(name.value == ''){
        alert('姓名不能为空!');
        return false;
    }
// 年龄
    if(age.value == ''){
        alert('年龄不能为空!');
        return false;
    }
    if(isNaN(age.value)){
        alert('年龄必须为一个数字!');
        return false;
    }
// 手机号
    if(mobile.value == ''){
        alert('手机号不能为空!');
        return false;
    }
    if(!mobileREG.test(mobile.value)){
        alert('手机号格式不正确!');
        return false;
    }
// 邮箱
    if(email.value == ''){
        alert('邮箱不能为空!');
        return false;
    }
    if(!filter.test(email.value)){
        alert('邮箱格式不正确!');
        return false;
    }

// 爱好
    if(!checkHobby(hobbies)){
            alert('必须选择一个爱好！')
            return false;
         }
// 学历
    if(education.value == 0){
        alert('学历不能为空!');
        return false;
    }

        alert('表单可以提交');
    return false;
}


// 爱好函数
function checkHobby(hobbies){
    var i,len=hobbies.length;
        for (var i = 0; i < len; i++) {
            if (hobbies[i].checked) {
                return true;
        };
    }
    return false;
}

var ipt = document.getElementById("ipt")

ipt.onkeypress =  function(){
    console.log(this.value)
}
ipt.onkeyup =  function(){
    console.log(this.value)
}