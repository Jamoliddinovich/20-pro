const userName = document.getElementById('userName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const repassword = document.getElementById('rePassword')
const button = document.querySelector('.submit')

button.addEventListener('click',(e)=>{
    e.preventDefault()
    checkEmail()
    checkSize(8,20)
    checkRequired()
    checkPass()
 
})
function checkPass(){
    if(password.value !=repassword.value){
    showError(repassword,'these passwords are not the same')
    }
}
function checkSize(min,max){
if(password.value.length>max){
    password.value = ''
    showError(password,'this password too long')
}else if(password.value.length<min){
    password.value = ''
    showError(password,'this password too short')
}


}
function checkEmail(){
    if(/.+@.+\.\w+/.test(email.value)){
        showSuccess(email)
    }
    else{
        showError(email,"this email is not matched")
    }
}
function showError(e,m){
e.parentElement.parentElement.className = "control-form error"
e.parentElement.parentElement.lastElementChild.innerHTML = m
}
function showSuccess(e){
    e.parentElement.parentElement.className = "control-form success"
}

function checkRequired(){
    document.querySelectorAll('input').forEach((a)=>{
        if(a.value.trim()==''){
            showError(a,`${a.id} is Required`)
        }else{
            showSuccess(a)
        }
    })
}