function inputValue(firstID) {
    const getElementById = document.getElementById(firstID);
    const valueOfElement = getElementById.value;
    const numberType = parseFloat(valueOfElement);
    getElementById.value = '';
    return numberType;
}

function textValue(firstID) {
    const getElement = document.getElementById(firstID);
    const innerTextOftext = getElement.innerText;
    const numberType = parseFloat(innerTextOftext);
    return numberType;
}


function setValue(firstID, secoundID) {
    const setInnertext = document.getElementById(firstID);
    setInnertext.innerText = secoundID;
}

function updateParagraph(input) {
    var userInput = document.getElementById(input).value;
    if (isNaN(userInput)) {
        alert('!!!!please enter number!!!!')
        document.getElementById(input).value = '';
    } 
    else{
        
    }
}

function takeOnlyText(input){
    const text = document.getElementById(input).value;
    return text;
}

function calculate(input1,input2){
    const code = document.getElementById(input1);
    const realPrice = document.getElementById(input2);
    const math1 = code / 100 ;
    const math2 = realPrice*math1;
    const price = realPrice - math2;
    return price;
}


