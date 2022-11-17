import anime from "animejs";

const todoListContainer = document.querySelector("#container_todo_list");
export let ClearAllTask = function (name) {

    this.name = name;

    this.createClearButton = function () {



        let clearButton = document.createElement("button");
        clearButton.innerHTML = this.name;
        clearButton.id = "clearAll"

        clearButton.addEventListener("click", function () {
            let tasks = document.querySelectorAll(".task");
            tasks.forEach((element) => {

                anime({
                    targets: element,
                    opacity: 0,
                    duration: 1500,
                });

                setTimeout(function () {
                    element.remove();
                }, 1500)

            })
        })

        todoListContainer.append(clearButton);

    }
}