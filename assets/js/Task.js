const taskContainer = document.querySelector("#task_container");
export let Task = function (title) {
    this.title = title;

    this.createTask = function () {
        let taskContentContainer = document.createElement("div");
        taskContentContainer.className = "task";

        let taskContent = document.createElement("p");
        taskContent.innerHTML = this.title;

        let deleteButton = document.createElement("i");
        deleteButton.className = "fa-solid fa-xmark";


        deleteButton.addEventListener("click", () => {
            taskContentContainer.remove();
        })

        let validationButton = document.createElement("i");
        validationButton.className = "fa-solid fa-check";

        validationButton.addEventListener("click", () => {
            taskContent.style.textDecoration = "line-through";
        })

        let editButton = document.createElement("i");
        editButton.className = "fa-solid fa-pen-to-square";

        editButton.addEventListener("click", () => {
            taskContent.setAttribute("contenteditable", 'true');
            setTimeout(function () {
                taskContent.removeAttribute("contenteditable");
            },5000);
        })

        taskContentContainer.append(taskContent);
        taskContentContainer.append(validationButton);
        taskContentContainer.append(editButton);
        taskContentContainer.append(deleteButton);
        taskContainer.append(taskContentContainer);
    }

}