// step-01 add event handeler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-02 get the email address from the input feild
    const emailInput=document.getElementById('input-email');
    const email=emailInput.value;
    // step-03 get password
    const inputPasword=document.getElementById('input-password')
    const password=inputPasword.value;
    // step-04 verify email and password
    if(email==='ar@bank.com' && password ==='mybank'){
        window.location.href='bank.html';
    }
    else{
        alert('Please provide actual email and passward.')
    }
})