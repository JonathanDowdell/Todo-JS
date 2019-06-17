import { signIn } from "../networking/FirebaseUtils";
import { register } from "../networking/FirebaseUtils";
import { BaseController } from "../controller/BaseController";

export class RegisterCard extends BaseController {

    constructor() {
        super();

        // Properties // 
        this.registerCard = document.getElementById("register-card");
        this.title = document.querySelector('.card-body h3');
        this.signInTab = document.getElementById("sign-in-tab");
        this.signUpTab = document.getElementById("sign-up-tab");
        this.email = document.getElementById('email');
        this.username = document.getElementById('username');
        this.processBtn = document.getElementById('process-btn');

        // Close Card
        super.openView = (value) => {
            if (value) {
                this.registerCard.classList.remove('d-none')
            } else {
                this.registerCard.classList.add('d-none');
            }
        }

        // Display section
        this.displaySection = (e) => {
            if (e.target.textContent === "Sign In") {
                signInSection();
            } else {
                signUpSection();
            }
        }

        // Sign In Section
        const signInSection = () => {
            this.signInTab.classList.add('active');
            this.signUpTab.classList.remove('active');
            this.title.textContent = "Welcome Back!";
            this.processBtn.textContent = "Log In"
            const elements = document.querySelectorAll('#register-card .input-group');
            elements[elements.length - 1].classList.add('d-none');
            elements[elements.length - 3].classList.add('d-none');
        }

        // Sign Up Section
        const signUpSection = () => {
            this.signUpTab.classList.add('active');
            this.signInTab.classList.remove("active");
            this.title.textContent = "Welcome!";
            this.processBtn.textContent = "Register"
            const elements = document.querySelectorAll('#register-card .input-group');
            elements[elements.length - 1].classList.add('fade-in');
            elements[elements.length - 1].classList.remove('d-none');
            elements[elements.length - 3].classList.remove('d-none');
        }

        // Process Data
        const processData = () => {
            if (this.processBtn.textContent === "Log In") {
                // Login
                const pwd = document.querySelectorAll('.pwd')[0].value;
                signIn(this.email.value,pwd, (callBackObj) => {
                    if (callBackObj.error != null) {
                        displayError(callBackObj.error);
                    }
                })
            } else {
                // Register
                const pwd = document.querySelectorAll('.pwd')[0].value;
                const confirmPwd = document.querySelectorAll('.pwd')[1].value;
                if (pwd === confirmPwd) { // Matching Passwords
                    register(this.email.value, this.username.value, pwd, (callBackObj) => {
                        if (callBackObj.error != null) {
                            displayError(callBackObj.error);
                        }
                    })
                } else {
                    displayError("Please ensure passwords match.")
                }
            }
        }

        const displayError = (text) => {
            $('.card-body .alert').text(text);
            $('.card-body .alert').fadeIn('fast');
        }

        // Listeners
        this.signInTab.addEventListener('click', this.displaySection);
        this.signUpTab.addEventListener('click', this.displaySection);
        this.processBtn.addEventListener('click', processData);
        
    }




}


