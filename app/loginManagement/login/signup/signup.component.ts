import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { SignupService } from "./signup.service";

@Component({
    selector:'signup',
    templateUrl:'./signup.component.html',
    styleUrls:['./signup.css']
})
export class SignUpComponent implements OnInit {
    signUpForm: any = {
        name:"",
        email: "",
        password:""
    }
    constructor(
        private router: Router,
        private service: SignupService,
        private messageService: MessageService
    ) {

    }
    ngOnInit(){

    }

    navigateToLogin() {
        this.router.navigate(['/login']);
    }

    signUp() {
        this.service.registerUser(this.signUpForm)
        .then((res) => {
            console.log("Response:",res);
            this.messageService.add({severity:'success', summary: 'Success', detail: 'SignUp Successfull'});
            this.navigateToLogin();
        })
    }
}