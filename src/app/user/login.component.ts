import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(private authService:AuthService,private router :Router) { }
    userName
    password
    mouseoverlogin
    ngOnInit() { }

    login(formValue){
    console.log(formValue);
    this.authService.loginUser(formValue.userName,formValue.password);
    this.router.navigate(['events'])
    }

    cancel(){
        this.router.navigate(['events'])
    }
}