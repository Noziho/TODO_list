const textBarContainer = document.querySelector("#container_text_bar");
export let TextBar = function (width, padding) {

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