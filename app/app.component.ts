import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flight-booking-project';
  signOutRequired: boolean = false;
  
  constructor(private router: Router,
    public sharedService: SharedService){}

  ngOnInit() {
  }

  redirectToSignup() {
    this.router.navigate(['/signup']);
    this.signOutRequired = false;
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
    this.signOutRequired = false;
  }

  logOut() {
    localStorage.removeItem("username");
    this.signOutRequired = false;
    this.sharedService.userName = null;
  }
}
