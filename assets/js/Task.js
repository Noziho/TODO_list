const taskContainer = document.querySelector("#task_container");
export let Task = function (title) {
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