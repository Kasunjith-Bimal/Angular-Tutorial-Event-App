import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
    templateUrl:"./profile.component.html",
    styles : [`
    em {float:right;color : #E05C65;padding-left:10px;}

    .error input {background-color: #E3C3C5;}
  
    `]
})

export class ProfileComponent  implements OnInit {
    constructor(private authService : AuthService,private router:Router) { }
    profileForm :FormGroup
    firstName :FormControl
    lastName :FormControl

    ngOnInit() { 
        this.firstName = new FormControl(this.authService.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-Z].*')])
        this.lastName = new FormControl(this.authService.currentUser.lastName,[Validators.required])
        this.profileForm = new FormGroup({
            firstName :this.firstName,
            lastName :this.lastName

        })

    }
    saveProfile(formValue){
        
        if(this.profileForm.valid){
            this.authService.updateCurrrentUser(formValue.firstName,formValue.lastName)
            this.router.navigate(['events'])
        }
        
    }

    cancel(){
        this.router.navigate(['events'])
    }

    validateFirstName(){
     return this.firstName.valid || this.firstName.untouched
    } 

    validateLastName(){
    return this.lastName.valid || this.lastName.untouched
    }
} 