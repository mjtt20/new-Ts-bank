document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInputValue = inputValue('deposit-field');
    const depositTotalValue = textValue('deposit-total');
    const total = depositTotalValue + depositInputValue;
    const presentBalance = textValue('balance-total');
    const totalBalance = presentBalance + depositInputValue;
    if(isNaN(depositInputValue)){
        document.getElementById('p-tag').innerText = "!!!!please enter number!!!!";
    }
    else{
        setValue('deposit-total', total);
        setValue('balance-total', totalBalance);
    }
})