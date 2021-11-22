import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./login/login.service";
import { SignUpComponent } from "./signup/signup.component";
import { SignupService } from "./signup/signup.service";

@NgModule({
    declarations:[
        LoginComponent,
        SignUpComponent
    ],
    imports:[
        SharedModule
    ],
    providers:[
        SignupService,
        LoginService
    ],
    exports:[]
})

export class LoginModule {}