import { Component,Output,EventEmitter,OnInit} from '@angular/core';

@Component({
  selector: 'app-hamburg',
  templateUrl: './hamburg.component.html',
  styleUrls: ['./hamburg.component.scss']
})
export class HamburgComponent implements OnInit {
  constructor(){

  }
  mes = false
  mess=true
  @Output()event=new EventEmitter<boolean>()
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  clkvalid:any;
  pgecnt:any;
  opnPage:any;
    openNav(){
    this.clkvalid=true
   console.log(this.clkvalid)
 }
 closeNav(){
   this.clkvalid=false
   this.opnPage=true
   this.mess=false
 }
 changePage(){
   this.event.emit(this.mes)

 }

}
