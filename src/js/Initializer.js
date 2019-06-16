import { firebase } from "./networking/FirebaseUtils";
import { RegisterCard } from "./controller/RegisterCard";
import { TodoController } from "./controller/TodoController";
import './utils/GlobalListeners';

export class Initializer {
    constructor() {


        const registerView = new RegisterCard();
        const todoController = new TodoController();

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log("Signed In");
                todoController.fetchData(user);
                registerView.openView(false);
                todoController.openView(true);
            } else {
                // No user is signed in.
                console.log("Not Signed In");
                registerView.openView(true);
                todoController.openView(false);
            }
        });

        

    }
}