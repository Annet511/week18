// function changeColor() {
    // if (document.getElementByIdmentById ("pagecolor").value == "pink") {
    //     document.getElementById("main").style.background = #;
    // }

    // var selectedColor = document.getElementById("pagecolor").value;
    // document.body.style.backgroundColor = selectedColor;

    // let selectedColor = document.getElementById("pagecolor").value;
    // if selectedColor == "pink") {
    //     document.getElementById("main").classList.add (".mainbgpink");
    // }
//   
//}

// function check() {
//     let name = document.getElementById ("nameInput");
//     let surname = document.getElementById ("surname");
//     let mail = document.getElementById ("mail");
//     let password = document.getElementById ("password");
//     let submitpassword = document.getElementById ("submitpassword");

//     document.getElementById('errorMessage').innerHTML = "";

//     if (name.value =='') {
//         document.getElementById('errorMessage').innerHTML +="Ваше имя не заполнено <br>";
//     }
//   
//     if (surname.value =='') {
//         document.getElementById('errorMessage').innerHTML +="Ваша фаимлия не заполнена <br>";
//     }
    
//     if (mail.value =='') {
//         document.getElementById('errorMessage').innerHTML +="Ваша почта не заполнена <br>";
//     }
    
//     if (password.value =='') {
//         document.getElementById('errorMessage').innerHTML +="Ваше имя не заполнено <br>";
//     }
    
//     if (submitpassword.value =='') {
//         document.getElementById('errorMessage').innerHTML +="Ваше имя не заполнено <br>";
//     }
    
//     if (password.value.length <=6) {
//         document.getElementById('errorMessage').innerHTML += "Ваш пароль слишком короткий, введите больше 7 символов <br>";
//     }
//     else alert (`welcome: ` + name);
// }

let errors = [];
function checkValidity(input) {
let validity = input.validity;

if (validity.valueMising) {
    errors.push('Поле ' + input.placeholder + ' не заполнено'); 
}

if (validity.patternMismatch) {
    errors.push('Неверный формат заполнения');
}

if (validity.rangeOverflow) {
    let max = getAttributeValue(input, 'max'); 
    errors.push('Максимальное значение не может быть больше чем ' + max);
}

if (validity.rangeOverflow) {
    let min = getAttributeValue(input, 'min'); 
    errors.push('Минимальное значени не может быть больше чем ' + min);
}
}

function checkAll() {
    errors = [];
    let  inputs = document.querySelectorAll("input");

     for (let input of inputs) {
         checkValidity(input);
     }

     document.getElementById('errorMessage').innerHTML = errors.join('. <br>');
}
