import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showFiller = false;

  get auth(){
    return this.authService.token
  }

  constructor(private router: Router, private authService: AuthService) {

  }

  logout(){
    this.router.navigate(["./auth"]);
  }

}
