document.getElementById('desForCube1').addEventListener('click', function(){
    const grapTheID = document.getElementById('cube1Input')
    const grapTheValue = grapTheID.value;
    const presentPrice = textValue('cube1-price');
    if(presentPrice === 150){
        if(grapTheValue == "DISC 30"){
            document.getElementById('cube1-p').innerText = "This offer it's not for this product";
            document.getElementById('cube1Input').value = '';
        }
        else if(grapTheValue == "DISC 50"){
            document.getElementById('cube1-p').innerText = "This offer it's not for this product";
            document.getElementById('cube1Input').value = '';
        }
        else{
            document.getElementById('cube1-p').innerText = "your code doesn't exist";
            document.getElementById('cube1Input').value = '';
    
        }
    }
    else{
        alert('Sorry, this coupon has already been used');
        document.getElementById('cube1Input').value = '';
    }
})


document.getElementById('buy-1').addEventListener('click', function(){
    const yourBalance = textValue('cube1-balance');
    const presentPrice = textValue('cube1-price');
    const yourPresentBalance =  yourBalance - presentPrice;
    if(yourPresentBalance >= 0){
        setValue('cube1-balance',yourPresentBalance )
    }
    else{
        alert("Withdrawal Exceeds Available Balance: Please enter an amount within your available balance to proceed!");
    }
})