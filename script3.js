document.addEventListener ("DOMcontentLoaded", function (event) {

    let name = localStorage.getItem ('name');
    if (name != null) {
        document.getElementById ("author").value = name;
    }

    if (localStorage.getItem('userComments') !==null) { 
        let previousComments = JSON.parse (localStorage.getItem ('userComments'));
        
        for (let i = 0; i < previousComments.length; i++) {
array.push(previousComments[i]);
        }
    }
})

const button = document.querySelector (".btn");
const  comments = document.querySelector (".container");
const textarea = document.querySelector (".newComment");


let array = [];

//обработчик события 

button.addEventListener("click", function () {
 let text = textarea.value;
 textarea.value = ""; // очищаем поле ввода сразу после вывода результата в див 

//тут будет проверка на соответствие комментария условию 

if (text !=='') {
    array.push(text);
}
 

comments.innerHTML = ""; //чтобы коментарии добавлялись по одному, а не слипались с предыдущими
 
render (comments, array);


});

 function render (parentNode, data){
    let author = document.getElementById ("author").value;
    
    //сохранение имени пользователя
    if (localStorage.getItem ('name')==null) 
    {
        localStorage.setItem ('name', author);
    }
   //сохранение коментариев пользователя
    let localComments = JSON.stringify(array);
    localStorage.setItem('userComments', localComments);
    // if (localStorage.getItem ('comment')==null) 
    // {
    //     localStorage.setItem ('comment', filtredText);
    // }

    for (let i=0; i<data.length; i++) {
        let item = data[i];

        const spam = ["viagra", "xxx", "виагра", "ххх"];
        let filtredText = item;
        for (let word of spam) {
            let reg = new RegExp (word, "ig");
            filtredText = filtredText.replace(reg, "***");
        }
        
        let node = document.createElement ('div'); //это домик для комменатриев
        node.classList.add ("comment"); //добавляет класс дивам с комментариями, которые получаются в результате отправки
        node.textContent = author + " " + filtredText;// кладем через textContent  

        let deleteButton = document.createElement ("button");
        deleteButton.classList.add("comment_button");
        deleteButton.textContent = "X";

        deleteButton.addEventListener("click", () => {
        node.remove();
        data.splice(i, 1);
        });
        //вопрос - если продолжать просто добавлять путые комментарии - то будет просто добавляться крестик

         // cтрока ниже вставляет наш deleteButton внутрь node
        node.append(deleteButton);
        // строка ниже вставляет наш node внутрь parentNode
        parentNode.append (node); 

        // comments.innerHTML += item + "<br>"; // используем вместо textContent innerHTML чтобы вставлялись br   
    }
 }

 


