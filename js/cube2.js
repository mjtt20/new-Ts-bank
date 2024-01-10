document.getElementById('desForCube2').addEventListener('click', function(){
    const grapTheID = takeOnlyText('cube2Input');
    var presentPrice = textValue('cube2-price');
    if(presentPrice === 800){
        if(grapTheID == "DISC 30"){
            var DISC = 30;
            var presentPrice = textValue('cube2-price');
            var math = DISC/100;
            var math2 = presentPrice*math;
            var math3 = presentPrice - math2;
            setValue('cube2-price',math3);
            document.getElementById('cube2Input').value = '';
    
        }
        else if(grapTheID == "DISC 50"){
            document.getElementById('cube2-p').innerText = "This offer it's not for this product";
            document.getElementById('cube2Input').value = '';
    
        }
       else{
            document.getElementById('cube2-p').innerText = "your code doesn't exist";
            document.getElementById('cube2Input').value = '';
    
        }
    }
    else{
        alert('Sorry, this coupon has already been used');
        document.getElementById('cube2Input').value = '';
    }
})

document.getElementById('buy-2').addEventListener('click', function(){
    const yourBalance = textValue('cube2-balance');
    const presentPrice = textValue('cube2-price');
    const yourPresentBalance =  yourBalance - presentPrice;
    if(yourPresentBalance >= 0){
        setValue('cube2-balance',yourPresentBalance )
    }
    else{
        alert("Withdrawal Exceeds Available Balance: Please enter an amount within your available balance to proceed!");
    }
})