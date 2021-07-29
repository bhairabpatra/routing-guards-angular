import { Component, OnInit } from '@angular/core';
import { ServiceService } from './_auth/service.service';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'routing-guards';
  isLogedin!: boolean;

  constructor(private user:ServiceService , private router:Router){

  }


  logout(){
      localStorage.setItem('userToken' ,'')
      this.router.navigateByUrl('/login')
      this.navCheck()
  }


  ngOnInit()  {
   this.navCheck()
}
navCheck(){
  if (this.user.isLoggedIn()) {
    this.isLogedin = true
    console.log("NVA BAR" + this.isLogedin)
}
else{
    this.isLogedin= false
    console.log("NVA BAR" + this.isLogedin)
}
}

}

