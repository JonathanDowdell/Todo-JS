import { getUserName } from "../networking/FirebaseUtils";
import { BaseController } from "./BaseController";
import { signOut } from "../networking/FirebaseUtils";

export class NavController extends BaseController {

    constructor() {
        super();

        this.username = document.querySelector('.navbar .navbar-nav .nav-item .nav-link')
        this.signOutBtn = $('.navbar .navbar-nav .nav-item .dropdown-menu').children()[1];

        super.openView = (value) => {
            if (value) {
                this.registerCard.classList.remove('d-none')
            } else {
                this.registerCard.classList.add('d-none');
            }
        };

        this.pushUserInfo = (user) => {
            getUserName(user.uid, (value) => {
                this.username.innerHTML = value;
                $(this.username).fadeIn('fast')
            });
        };

        $(this.signOutBtn).on('click', () => {
            signOut()
        })

    }

}