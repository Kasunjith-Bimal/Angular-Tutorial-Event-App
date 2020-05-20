// import { Injectable } from '@angular/core';
// declare let toastr:any

import { InjectionToken } from "@angular/core";


// @Injectable({providedIn: 'root'})
// export class ToastrService {
//     constructor() { }
    
//     Success(message:string,title? :string){
//         toastr.success(message,title);
//     }

//     info(message:string,title? :string){
//         toastr.Success(message,title);
//     }

//     Warning(message:string,title? :string){
//         toastr.Success(message,title);
//     }

//     error(message:string,title? :string){
//         toastr.Success(message,title);
//     }
// }



export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

export interface Toastr {
    success(message:string,title? :string):void
    info(message:string,title? :string):void
    warning(message:string,title? :string):void
    error(message:string,title? :string):void
}