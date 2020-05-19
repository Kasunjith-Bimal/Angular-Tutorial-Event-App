import { Injectable } from '@angular/core';
declare let toastr:any

@Injectable({providedIn: 'root'})
export class ToastrService {
    constructor() { }
    
    Success(message:string,title? :string){
        toastr.success(message,title);
    }

    info(message:string,title? :string){
        toastr.Success(message,title);
    }

    Warning(message:string,title? :string){
        toastr.Success(message,title);
    }

    error(message:string,title? :string){
        toastr.Success(message,title);
    }
}