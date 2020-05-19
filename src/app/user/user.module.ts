import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userroutes } from './user.route';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userroutes)
    ],
    exports: [],
    declarations: [ProfileComponent,LoginComponent],
    providers: [],
})
export class UserModule { }
