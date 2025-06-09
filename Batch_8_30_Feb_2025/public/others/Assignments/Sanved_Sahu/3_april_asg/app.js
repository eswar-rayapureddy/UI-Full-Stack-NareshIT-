
// var doTheSum = () => {
//     var firstvalue = document.querySelector('#fval').value;
//     var secondvalue = document.querySelector('#sval').value;
//     var result = firstvalue + secondvalue;
//     document.querySelector('span').innerText = ' Addition is '+ result;
// }

var doTheSum = () => {
    var firstvalue = document.querySelector('#fval').value;
    firstvalue = parseInt(firstvalue);  
    var secondvalue = document.querySelector('#sval').value;
    secondvalue = parseInt(secondvalue);  
    var result = firstvalue + secondvalue;
    document.querySelector('span').innerText = ' Addition is : '+ result;

    document.querySelector('#result').style.display = 'block';
}

var doTheSub = () => {
    var firstvalue = document.querySelector('#fval').value;
    firstvalue = parseInt(firstvalue);  
    var secondvalue = document.querySelector('#sval').value;
    secondvalue = parseInt(secondvalue);  
    var result = firstvalue - secondvalue;
    document.querySelector('span').innerText = ' Subtraction is : '+ result;

    document.querySelector('#result').style.display = 'block';

}

var doTheMul = () => {
    var firstvalue = document.querySelector('#fval').value;
    firstvalue = parseInt(firstvalue);  
    var secondvalue = document.querySelector('#sval').value;
    secondvalue = parseInt(secondvalue);  
    var result = firstvalue * secondvalue;
    document.querySelector('span').innerText = ' Multiplication is : '+ result;

    document.querySelector('#result').style.display = 'block';

}

var doTheDiv = () => {
    var firstvalue = document.querySelector('#fval').value;
    firstvalue = parseInt(firstvalue);  
    var secondvalue = document.querySelector('#sval').value;
    secondvalue = parseInt(secondvalue);  
    var result = firstvalue / secondvalue;
    document.querySelector('span').innerText = ' Division is : '+ result;

    document.querySelector('#result').style.display = 'block';

}

var getRem = () => {
    var firstvalue = document.querySelector('#fval').value;
    firstvalue = parseInt(firstvalue);  
    var secondvalue = document.querySelector('#sval').value;
    secondvalue = parseInt(secondvalue);  
    var result = firstvalue % secondvalue;
    document.querySelector('span').innerText = ' Remainder is : '+ result;

    document.querySelector('#result').style.display = 'block';

}