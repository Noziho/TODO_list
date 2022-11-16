import '../css/style.css';
import {TextBar} from "./TextBar";
import {ValidationButton} from "./ValidationButton";
import {ClearAllTask} from "./ClearAllTask";





let texttbar = new TextBar("80%", "1rem");
texttbar.createTextBar();

let validate = new ValidationButton("Add item");
validate.createButton();

let clearAll = new ClearAllTask("Clear Items");
clearAll.createClearButton();

