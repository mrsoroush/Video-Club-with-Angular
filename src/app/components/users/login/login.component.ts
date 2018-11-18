import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('usernameInput') userInputVar: ElementRef;
  @ViewChild('passwordInput') passInputVar: ElementRef;

  username: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  

  onLogin(){
    this.username = this.userInputVar.nativeElement.value;
    this.password = this.passInputVar.nativeElement.value
  }


}
