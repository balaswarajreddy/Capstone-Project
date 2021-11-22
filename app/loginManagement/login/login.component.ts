import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { SharedService } from "src/app/shared/shared.service";
import { LoginService } from "./login.service";

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.css']
})
export class LoginComponent implements OnInit {

    loginData: any = {
        name: "",
        password: ""
    };

    constructor(
        private router: Router,
        private service: LoginService,
        private sharedService: SharedService,
        private messageService: MessageService
    ) {

    }

    ngOnInit(){

    }

    navigateToSignup() {
        this.router.navigate(['/signup']);
    }

    login() {
        this.service.loginUser(this.loginData)
        .then((res) => {
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Login successfull'});
            this.loginData.name = "";
            this.loginData.password = "";
            localStorage.setItem('username', res.userData);
            this.sharedService.userName = res.userData;
            this.router.navigate(['/home']);
        })
        .catch((error) => {
            console.log("Error:", error);
            this.messageService.add({severity:'error', summary: 'Error', detail: error});
        })
    }
}