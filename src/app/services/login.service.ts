import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: IUser[] = [
    {id: 1 , username: 'soroush', password: '123'},
    {id: 2 , username: 'shadan', password: '456'},
    {id: 3 , username: 'zahra', password: '789'},
  ];

  constructor() { }

  getUser(username: string, pass: string){
    const user = this.users.find(
      (u) => {
        return u.username === username && u.password === pass;
      });
      return user;
  }
}
