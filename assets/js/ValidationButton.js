import {Task} from "./Task";

const textBarContainer = document.querySelector("#container_text_bar");

export let ValidationButton = function (name) {

    this.name = name;

    this.createButton = function () {


        let validationButton = document.createElement("button");
        validationButton.innerHTML = name;

        validationButton.addEventListener("click", () => {
            let task = new Task(document.querySelector("input").value);
            task.createTask();
            document.querySelector("input").value = "";

        })

        textBarContainer.append(validationButton);
    }


}