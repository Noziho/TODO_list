import anime from "animejs";

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

            anime({
                targets: taskContentContainer,
                opacity: 0,
                duration: 1500,
            });

            setTimeout(() => {
                taskContentContainer.remove();
            },1500)

        })


        let validationButton = document.createElement("i");
        validationButton.className = "fa-solid fa-check";

        validationButton.addEventListener("click", () => {
            anime({
                targets: taskContent,
                backgroundColor: '#95d6b7',
                duration: 2000,
                color: '#f5f5f5',
            });
        })

        let editButton = document.createElement("i");
        editButton.className = "fa-solid fa-pen-to-square";

        editButton.addEventListener("click", () => {
            taskContent.setAttribute("contenteditable", 'true');
            taskContent.style.border = "1px solid #95d6b7";
            setTimeout(function () {
                taskContent.removeAttribute("contenteditable");
                taskContent.style.border = "none";

            }, 5000);
        })

        taskContentContainer.append(taskContent);
        taskContentContainer.append(validationButton);
        taskContentContainer.append(editButton);
        taskContentContainer.append(deleteButton);
        taskContainer.append(taskContentContainer);
    }

}