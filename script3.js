// document.addEventListener ("DOMcontentLoaded", function (event) {

//     let name = localStorage.getItem ('name');
//     if (name != null) {
//         document.getElementById ("author").value = name;
//     }

//     if (localStorage.getItem('userComments') !==null) { 
//         let previousComments = JSON.parse (localStorage.getItem ('userComments'));
        
//         for (let i = 0; i < previousComments.length; i++) {
// array.push(previousComments[i]);
//         }
//     }
// })

// const button = document.querySelector (".btn");
// const  comments = document.querySelector (".container");
// const textarea = document.querySelector (".newComment");


// let array = [];

// //обработчик события 

// button.addEventListener("click", function () {
//  let text = textarea.value;
//  textarea.value = ""; // очищаем поле ввода сразу после вывода результата в див 

// //тут будет проверка на соответствие комментария условию 

// if (text !=='') {
//     array.push(text);
// }


// comments.innerHTML = ""; //чтобы коментарии добавлялись по одному, а не слипались с предыдущими

// render (comments, array);


// });

//  function render (parentNode, data){
//     let author = document.getElementById ("author").value;
    
//     //сохранение имени пользователя
//     if (localStorage.getItem ('name')==null) 
//     {
//         localStorage.setItem ('name', author);
//     }
//    //сохранение коментариев пользователя
//     let localComments = JSON.stringify(array);
//     localStorage.setItem('userComments', localComments);
//     // if (localStorage.getItem ('comment')==null) 
//     // {
//     //     localStorage.setItem ('comment', filtredText);
//     // }

//     for (let i=0; i<data.length; i++) {
//         let item = data[i];

//         const spam = ["viagra", "xxx", "виагра", "ххх"];
//         let filtredText = item;
//         for (let word of spam) {
//             let reg = new RegExp (word, "ig");
//             filtredText = filtredText.replace(reg, "***");
//         }
        
//         let node = document.createElement ('div'); //это домик для комменатриев
//         node.classList.add ("comment"); //добавляет класс дивам с комментариями, которые получаются в результате отправки
//         node.textContent = author + " " + filtredText;// кладем через textContent  

//         let deleteButton = document.createElement ("button");
//         deleteButton.classList.add("comment_button");
//         deleteButton.textContent = "X";

//         deleteButton.addEventListener("click", () => {
//         node.remove();
//         data.splice(i, 1);
//         });
//         //вопрос - если продолжать просто добавлять путые комментарии - то будет просто добавляться крестик

//          // cтрока ниже вставляет наш deleteButton внутрь node
//         node.append(deleteButton);
//         // строка ниже вставляет наш node внутрь parentNode
//         parentNode.append (node); 

//         // comments.innerHTML += item + "<br>"; // используем вместо textContent innerHTML чтобы вставлялись br   
//     }
//  }

 const form = document.querySelector("form");
 const commentsNode = document.querySelector("div");
 const textarea = document.querySelector("comment");
 const usernameNode = document.querySelector("input[name='username']");
 const avatarNode = document.querySelector("input[name='avatar']");

 class localStorage {
    static Save(key, value) {
        let string = JSON.stringify(value);
        localStorage.setItem(key, string);
    }
    static Get(key) {
        let value = localStorage.getItem(key);
        return JSON.parse(value);
    }
 }
 class Comment {
    constructor(text, username, avatar) {
        this.text = text;
        this.username = username;
        this.avatar = avatar || "https://www.flaticon.com/ru/free-icon/avatar_194938";
    }

    render(parentNode) {
        //фильтр комментариев
        const filtredWords = ["viagra", "xxx", "виагра", "ххх"];
        let filtredText = this.text;

        for (let word of filtredWords) {
            let reg = new RegExp(word, "ig");
            filtredText = filtredText.replace(reg, "***");
        }

        //пустой контейнер
        let node = document.createElement ("div");
        node.classList.add("comment");

        let textNode = document.createElement("div");
        textNode.classList.add("comment__text");

        let usernameNode = document.createElement("div");
        usernameNode.classList.add("comment__username");
        usernameNode.textContent = this.username;

        let avatarNode = document.createElement("img");
        avatarNode.src = this.avatar;
        avatarNode.classList.add("comment__avatar");
        avatarNode.width = 50;
        avatarNode.alt = "Аватар " + this.username;

        node.append (avatarNode);
        node.append(usernameNode);
        node.append(textNode);
        parentNode.append(node);
    
    }
 }

 class commentList {
    constructor(parentNode) {
        this.list = [];
        this.parentNode = parentNode;
    }
    addItem(text, username, avatar) {
        let comment = new Comment (text, username, avatar);
        this.list.push(comment);
    }

    render() {
        this.parentNode.innerHTML = "";
        for (let i = 0; i < this.list.length;  i++) {
        let item = rhis.list[i];
        item.render(this.parentNode);
        }
    }

    save() {
        localStorage.setItem("comments", JSON.stringify(this.list));
    }

    load() {
        let localData = localStorage.Get("comments") || [];
        let array = [];
        for (let item of localData) {
            const comment = new Comment(item.text, item.username);
            array.push(comment);
        }

        this.list = array;
    }
 }

 usernameNode.value = localStorage.Get("username");
 avatarNode.value = localStorage.Get("avatar");
 const list = new CommentList(commentsNode);
 list.load();
 list.render();

 form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    let text = textarea.value;
    let username = usernameNode.value;
    let avatar = avatarNode.value;

    textarea.value = "";

    list.addItem(text, username, avatar);
    list.render();
    list.save();
    localStorage.Save("username", username);
    localStorage.Save("avatar", avatar);

 });


