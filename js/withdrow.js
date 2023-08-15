// step-01
document.getElementById('btn-withdrow').addEventListener('click', function(){ 
     // step-03
     const inputWithdrow=document.getElementById('withdrow-field');
     const withdrowFeildString=inputWithdrow.value;
     const withdrowFieldAmount=parseFloat(withdrowFeildString);
     // step-07
     inputWithdrow.value='';
     
     if(isNaN(withdrowFieldAmount)){
        alert('Please provide valid number');
        return;
     }

    // step-02
    const currentWithdrow=document.getElementById('withdrow-input');
    const withdrowString=currentWithdrow.innerText;
    const withdrowAmount=parseFloat(withdrowString);
    
    // step-05
    const balanceElement=document.getElementById('balance-field');
    const balanceString=balanceElement.innerText;
    const balancePrevious=parseFloat(balanceString);
     

    if(withdrowFieldAmount > balancePrevious){
        alert('Needed Deposit Balance')
        return;
    }
    
     // step-04
     const currentWithdrowTotal=withdrowAmount + withdrowFieldAmount;
     currentWithdrow.innerText=currentWithdrowTotal;

    // step-06
    const finalBalance=balancePrevious - withdrowFieldAmount;
    balanceElement.innerText=finalBalance;
    
   
    


})