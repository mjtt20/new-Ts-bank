document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInputValue = inputValue('withdraw-field');
    const withdrawTotalValue = textValue('withdraw-total');
    const total = withdrawTotalValue + withdrawInputValue;
    const presentBalance = textValue('balance-total');
    const totalBalance = presentBalance - withdrawInputValue;
    if(withdrawInputValue <= presentBalance ){
        setValue('withdraw-total', total);
        setValue('balance-total', totalBalance);
    }
    else if(isNaN(withdrawInputValue)){
        document.getElementById('p-tag2').innerText = "!!!!please enter number!!!!";
    }
    else{
        document.getElementById('p-tag2').innerText = "Withdrawal Exceeds Available Balance: Please enter an amount within your available balance to proceed!";
    }
})