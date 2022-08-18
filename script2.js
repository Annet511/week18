const button = document.querySelector (".btn");
const  comments = document.querySelector (".container");
const textarea = document.querySelector (".newComment");


let array = [];

//обработчик события 
button.addEventListener("click", function () {
 let text = textarea.value;
 textarea.value = ""; // очищаем поле ввода сразу после вывода результата в див 

//тут будет проверка на соответствие комментария условию 

 array.push(text);

comments.innerHTML = ""; //чтобы коментарии добавлялись по одному, а не слипались с предыдущими
 //так как без разницы на порядок комментариев и их индексы
render (comments, array);

});

 function render (parentNode, data){
    //  for (let item of array) - нам уже нен подходит, так как нам необходим индекс удаленного элемента
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
        node.textContent = filtredText;// кладем через textContent  

        let deleteButton = document.createElement ("button");
        deleteButton.classList.add("comment_button");
        deleteButton.textContent = "X";

        deleteButton.addEventListener("click", () => {
        node.remove();
        data.splice(i, 1);
        });
        //вопрос - если продолжать просто добавлять путые комментарии - то будет просто добавляться крестик

         // она вставляет наш deleteButton внутрь node
        node.append(deleteButton);
        // она вставляет наш node внутрь parentNode
        parentNode.append (node); 

        // comments.innerHTML += item + "<br>"; // используем вместо textContent innerHTML чтобы вставлялись br   
    }
 }

 


