import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private user = new BehaviorSubject<string>('john');
  castUser = this.user.asObservable();

 editUser(newUser: string){
   this.user.next(newUser)
 }
}
