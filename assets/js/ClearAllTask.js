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
                element.remove();
            })
        })

        todoListContainer.append(clearButton);

    }
}