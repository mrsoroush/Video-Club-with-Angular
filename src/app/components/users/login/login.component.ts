import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import * as $ from "jquery";

import { LoginService } from 'src/app/services/login.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('usernameInput') userInputVar: ElementRef;
  @ViewChild('passwordInput') passInputVar: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;

  username: string;
  password: string;
  loginedUser: IUser = {id: 0, username: '', password: ''};
  existedUser: boolean = false;
  message: string = '';
  showDiv: boolean = false;

  constructor(private loginService: LoginService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  

  onLogin(){
    this.username = this.userInputVar.nativeElement.value;
    this.password = this.passInputVar.nativeElement.value;
    this.loginedUser = this.loginService.getUser(this.username, this.password);
    if(this.loginedUser){
      this.existedUser = true;
      this.message = 'Your login is done!';
      setTimeout(
        () => {
          this.fileInput.nativeElement.click();
          this.router.navigate(['/users/profile']);
        }, 2000);
    } else {
      this.message = 'User not found!';
      this.showDiv = true;
    }
  }


}
