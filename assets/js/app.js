import '../css/style.css';
const todoListContainer = document.querySelector("#container_todo_list");
const textBarContainer = document.querySelector("#container_text_bar");
const taskContainer = document.querySelector("#task_container");



let TextBar = function (width, padding) {

    this.width = width;
    this.padding = padding;

    this.createTextBar = function () {
        let textBar = document.createElement("input");
        textBar.type = "text";
        textBar.style.width = this.width;
        textBar.style.padding = this.padding;
        textBar.placeholder = "Name ...";

        textBarContainer.append(textBar);
    }


}



let texttbar = new TextBar("80%", "1rem");
texttbar.createTextBar();



let Task = function (title) {

    this.title = title;

    this.createTask = function () {
        let div = document.createElement("div");
        div.className = "task";

        let p = document.createElement("p");
        p.innerHTML = this.title;

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";

        deleteButton.addEventListener("click", () => {
            div.remove();
        })

        let validationButton = document.createElement("button");
        validationButton.innerHTML = "Valid task";

        validationButton.addEventListener("click", () => {
            p.style.textDecoration = "line-through";
        })

        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";

        editButton.addEventListener("click", () => {
            p.setAttribute("contenteditable", 'true');
            setTimeout(function () {
                p.removeAttribute("contenteditable");
            },5000);
        })

        div.append(p);
        div.append(validationButton);
        div.append(editButton);
        div.append(deleteButton);
        taskContainer.append(div);
    }

}

let ValidationButton = function (name) {

    this.name = name;

    this.createButton = function () {


        let button = document.createElement("button");
        button.innerHTML = name;

        button.addEventListener("click", () => {
            let task = new Task(document.querySelector("input").value);
            task.createTask();
            document.querySelector("input").value = "";

        })

        textBarContainer.append(button);
    }


}

let ClearAllTask = function (name) {

    this.name = name;

    this.createClearButton = function () {



        let clearButton = document.createElement("button");
        clearButton.innerHTML = this.name;

        clearButton.addEventListener("click", function () {
            let tasks = document.querySelectorAll(".task");
            tasks.forEach((element) => {
                element.remove();
            })
        })

        todoListContainer.append(clearButton);

    }
}

let validate = new ValidationButton("Add item");
validate.createButton();

let clearAll = new ClearAllTask("Clear Items");
clearAll.createClearButton();

