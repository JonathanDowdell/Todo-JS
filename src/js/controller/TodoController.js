import { TodoView } from "../view/TodoView";
import { createUUID } from "../utils/UUID";
export class TodoController {

    constructor() {
        // Properties
        this.todoContainer = document.querySelector('.todo-main');
        this.todoInput = document.querySelector('.todo-input');
        this.processInputBtn = document.querySelector('.input-group-append .btn');
        this.cardList = document.querySelector('.card-list');

        // Methods
        let addToDo = () => {
            const todoValue = this.todoInput.value
            const todoView = new TodoView({
                todo: todoValue,
                timestamp: Date.now(),
                complete: false,
                todoUUID: createUUID()
            });
            $(this.cardList).append(todoView.getHtml());
            // this.cardList.appendChild()
        }

        this.processInputBtn.addEventListener('click', addToDo)
    }

}