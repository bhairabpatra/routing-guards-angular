import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../_auth/service.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  showPassword = false;
  fieldTextType!: boolean;
  constructor(private formBuilder: FormBuilder , private user:ServiceService , private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    });

    if (this.user.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
      this.submitted = true;
        console.log("---------------" + this.loginForm.value)
        this.user.getLogin( this.loginForm.value).subscribe((res) => {
            localStorage.setItem('userData', JSON.stringify(this.loginForm.value));
            localStorage.setItem('userToken', JSON.stringify(res));
            this.router.navigate(['/']);
          })




      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
    }

    onReset() {
      this.submitted = false;
      this.loginForm.reset();
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}

