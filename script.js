function clickMe() {
    let catNameInput = document.getElementById('name');
    console.log(catNameInput.value);

    let fioInput = document.getElementById('fio');
    console.log(fioInput.value);

    // console.log(document.getElementsByName("food"));

    // let checks = document.getElementsByName("food");
    // console.log(checks[0].checked);
    // console.log(checks[1].checked);
    // console.log(checks[2].checked);
}

function changeMe(){
    let catImage=document.getElementById('catimage');
    catImage.src = "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}