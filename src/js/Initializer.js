import { firebase } from "./networking/FirebaseUtils";
import { RegisterCard } from "./controller/RegisterCard";
import { TodoController } from "./controller/TodoController";
import { NavController } from "./controller/NavController";
import './utils/GlobalListeners';

export class Initializer {
    constructor() {


        const registerView = new RegisterCard();
        const todoController = new TodoController();
        const navController = new NavController();

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log("Signed In");
                navController.pushUserInfo(user);
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