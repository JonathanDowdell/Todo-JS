import { RegisterCard } from "./controller/RegisterCard";
import { TodoController } from "./controller/TodoController";
import { firebase } from "./networking/firebase";
import { assignGlobalListeners } from "./utils/Listeners";

export class Initializer {
    constructor() {

        const registerView = new RegisterCard();
        const todoController = new TodoController();
        assignGlobalListeners();

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log("Signed In");
                // registerView.openView(false);
            } else {
                // No user is signed in.
                console.log("Not Signed In");
                // registerView.openView(true);
            }
        });

        

    }
}