import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_auth/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  name = 'Angular';
  user!: string;
  newUser!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
     this.userService.castUser.subscribe( (res) => {
         this.user = res
     })
  }

  editedUser(){
    this.userService.editUser(this.newUser);
  }
}
