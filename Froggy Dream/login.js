var zh=document.getElementById('zh');
var mm=document.getElementById('mm');
function login(){
    if(zh.value==""||mm.value==""){
        alert("Account number or Password cannot be empty");
        return false;
    }
    else if(zh.value!="123"||mm.value!="123456"){    
        alert("Wrong account or password (you can choose guest login)");
        return false;
    }
}