function btn(){
    var user =document.getElementById("user").value;
    var password=document.getElementById("password").value;
    if(user==""){
        alert('请输入邮箱！');
        return false;
    }
    if(password == ""){
        alert('请输入密码！')
        return false;
    }
    var ee = /^\w{6,12}$/;
    if(!ee.test(password)){
        alert('密码必须是6-12位字母数字下划线');
        return false;
    }
}