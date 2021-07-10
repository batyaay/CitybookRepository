import { User } from '../models/User';
import { Child } from '../models/Child';
import { SaveUserResponse } from '../models/SaveUserResponse';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, throwError } from 'rxjs';

@Injectable()
export class UserService {
   _user: User;

 constructor(private http: HttpClient) {
    this._user = new User();
    this._user.Children = new Array<Child>();
  }
        
   saveUser(): Observable<SaveUserResponse>{

      return this.http.post('http://localhost:51494/api/User/saveUser', this._user).pipe(map(
        (res: SaveUserResponse) => {
          return res;
        }),
        catchError((err) => {
          return null;
        })
      );
   }
}