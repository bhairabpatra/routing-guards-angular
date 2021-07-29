import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../_auth/service.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  allUser:any =[];

  constructor(private users:ServiceService) { }

  ngOnInit(): void {

    this.getAllUser()
  }

  getAllUser(){
    this.users.get_all_Users().subscribe( (res) => {
        this.allUser = res
        console.log("all users ------" + this.allUser)
    })
  }

}
