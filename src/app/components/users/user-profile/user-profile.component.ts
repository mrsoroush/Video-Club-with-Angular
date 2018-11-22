import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  
  userSubscription: Subscription;
  loginedUserId: number;
  logUser: IUser;
  
  constructor(private route: ActivatedRoute, private loginService: LoginService) { }
  
  ngOnInit() {
    this.userSubscription = this.route.queryParams.subscribe(
      (query) => {
        this.loginedUserId = query['id'];
        this.logUser = this.loginService.getUserById(+this.loginedUserId);
      });
    }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
    
  }
  