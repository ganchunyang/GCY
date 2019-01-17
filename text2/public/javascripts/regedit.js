function btn(){
    let  user =document.getElementById("user").value;
    let  password=document.getElementById("password").value;
    let  password1=document.getElementById("password1").value;
    if(user==""){
        document.getElementById("tishi1").innerHTML = "请输入邮箱！";
        return false;
    }
    if(password == ""){
        document.getElementById("tishi2").innerHTML = "请输入密码！";
        return false;
    }
    var ee = /^\w{6,12}$/;
    if(!ee.test(password)){
        alert('密码必须是6-15位字母数字下划线');
        return false;
    }
    if(password != password1){
        document.getElementById("tishi3").innerHTML = "前后密码不符！";
        return false;
    }
}