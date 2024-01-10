document.getElementById('desForCube3').addEventListener('click', function(){
    const grapTheID = takeOnlyText('cube3Input');
    var presentPrice = textValue('cube3-price');

   if(presentPrice === 8499){
    if(grapTheID == "DISC 30"){
        var DISC = 30;
        var presentPrice = textValue('cube3-price');
        var math = DISC/100;
        var math2 = presentPrice*math;
        var math3 = presentPrice - math2;
        var result = Math.floor(math3);
        setValue('cube3-price',result);
        document.getElementById('cube3Input').value = '';

    }
    else if(grapTheID == "DISC 50"){
        var DISC2 = 50;
        var presentPrice2 = textValue('cube3-price');
        var math2 = DISC2/100;
        var math4 = presentPrice2*math2;
        var math5 = presentPrice2 - math4;
        var result2 = Math.floor(math5);
        setValue('cube3-price',result2);
        document.getElementById('cube3Input').value = '';

    }
   else{
        document.getElementById('cube3-p').innerText = "your code doesn't exist";
        document.getElementById('cube3Input').value = '';

    }
   }
   else{
    alert('Sorry, this coupon has already been used');
    document.getElementById('cube3Input').value = '';
   }
})

document.getElementById('buy-3').addEventListener('click', function(){
    const yourBalance = textValue('cube3-balance');
    const presentPrice = textValue('cube3-price');
    const yourPresentBalance =  yourBalance - presentPrice;
    if(yourPresentBalance >= 0){
        setValue('cube3-balance',yourPresentBalance )
    }
    else{
        alert("Withdrawal Exceeds Available Balance: Please enter an amount within your available balance to proceed!");
    }
})