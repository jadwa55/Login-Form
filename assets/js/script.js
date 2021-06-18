const togglePassword = document.querySelectorAll('.togglePassword');
const inputs = document.querySelectorAll('input');

togglePassword.forEach((el,key)=>{
    el.addEventListener('click',()=>{
        let password = el.parentNode.querySelector('input');
        if(password.getAttribute('type') == 'text'){
            password.setAttribute('type','password');
        }else{
            password.setAttribute('type','text');
        }
        console.log(password);
    });
});

inputs.forEach((el,key)=>{
    el.addEventListener('focus',()=>{
        el.parentNode.querySelector('label').style.color = "red";
    });
});