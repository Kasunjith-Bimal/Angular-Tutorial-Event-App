import { Directive, OnInit ,Inject,ElementRef, Input} from '@angular/core';
import { JQ_TOKEN } from './jquery.service';


@Directive({
    selector: '[model-trigger]',
})
export class ModalTriggerDirectiove implements OnInit {
   @Input('model-trigger') modelId :string;
   private el :HTMLElement
   constructor(ref:ElementRef,@Inject(JQ_TOKEN) private $:any){
    this.el = ref.nativeElement;

   }
    ngOnInit(){
       this.el.addEventListener('click', e=> {

        this.$(`#${this.modelId}`).modal({})
       });
     
    } 



}