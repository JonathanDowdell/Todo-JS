import { RegisterCard } from "./controller/RegisterCard";
import { firebase } from "./networking/firebase";

export class Initializer {
    constructor() {

        const registerView = new RegisterCard();

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