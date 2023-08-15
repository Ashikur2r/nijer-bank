// setp-01 add even handler to deposite button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2 get the deposit ammount from the deposite field
    const inputDeposit = document.getElementById('deposit-field');
    const depositString = inputDeposit.value;
    const deposit=parseFloat(depositString);
    
    // clear the deposite field
    inputDeposit.value='';
    if(isNaN(deposit)){
        alert('Please provide valid number');
        return;
     }

    
    // step-03 get the current deposite total
    const currentDeposit = document.getElementById('deposit-total');
    const depositTotalString = currentDeposit.innerText;
    const depositTotal=parseFloat(depositTotalString);

    // step -04 add Number to set the total deposit 
    const finaldeposit = depositTotal+deposit;
    currentDeposit.innerText = finaldeposit;

    // step-05 add the value to the balance
    const balanceAmount=document.getElementById('balance-field');
    const balanceTotalString=balanceAmount.innerText;
    const balanceTotal=parseFloat(balanceTotalString);

    // step-06 calculate current total balance
    const finalBalance=balanceTotal+finaldeposit;
    balanceAmount.innerText=finalBalance;

    

})
