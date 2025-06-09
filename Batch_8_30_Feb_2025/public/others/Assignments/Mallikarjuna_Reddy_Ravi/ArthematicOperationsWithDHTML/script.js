let add = document.getElementById('add');
let sub = document.getElementById('sub');
let mul = document.getElementById('mul');
let divi = document.getElementById('divi');


function performOperation(operation) {
    // Get the values from input fields
    const num1 = parseInt(document.getElementById('inputVal1').value);
    const num2 = parseInt(document.getElementById('inputVal2').value);
    const para = document.getElementById('para');
    let result;

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        para.innerText = 'Please enter valid numbers !';
        para.style.fontSize = '20px';
        para.style.padding = '15px';
        document.getElementById('result').append(para);
        return;
    }

    // Perform the operation based on the button clicked
    switch (operation) {
        case 'add':
            result = num1 + num2;
            para.innerText = `The Addition of ${num1} and ${num2} is : ${result}`;
            para.style.fontSize = '20px';
            para.style.padding = '15px';
            document.getElementById('result').append(para);
            break;
        case 'subtract':
            result = num1 - num2;
            para.innerText = `The Subtraction of ${num1} and ${num2} is : ${result}`;
            para.style.fontSize = '20px';
            para.style.padding = '15px';
            document.getElementById('result').append(para);
            break;
        case 'multiply':
            result = num1 * num2;
            para.innerText = `The Multiplication of ${num1} and ${num2} is : ${result}`;
            para.style.fontSize = '20px';
            para.style.padding = '15px';
            document.getElementById('result').append(para);
            break;
        case 'divide':
            if (num2 === 0) {
                para.innerText = 'Cannot divide by Zero !';
                document.getElementById('result').append(para);
                return;
            }
            result = num1 / num2;
            para.innerText = `The Division of ${num1} and ${num2} is : ${result}`;
            para.style.fontSize = '20px';
            para.style.padding = '15px';
            document.getElementById('result').append(para);
            break;
        default:
            result = "Invalid operation";
            para.innerText = `The Operation of ${num1} and ${num2} is : ${result}`;
            para.style.fontSize = '20px';
            para.style.padding = '15px';
            document.getElementById('result').append(para);
    }

    // Display the result
    // para.innerText = `The result is: ${result}`
    // document.getElementById('result').append(para);
}

add.addEventListener('click',()=>{performOperation('add')});
sub.addEventListener('click',()=>{performOperation('subtract')});
mul.addEventListener('click',()=>{performOperation('multiply')});
divi.addEventListener('click',()=>{performOperation('divide')});




