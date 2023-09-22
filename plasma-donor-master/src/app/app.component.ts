import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    // throw new Error('Method not implemented.');
  }
  call:any;
  donorCount=5000;
  recipientCount = 4000;
  isLoggedIN=false;
  showHome=true
  temp=false
  centers=1000
  showHambPage=false
  showHeader=true
  constructor(private http: HttpClient,private route:ActivatedRoute ) {
    this.http.post("http://127.0.0.1:8000/DonorsCount",this.donorCount ).subscribe(//print value of login variable
      response=> {
        let countOfDonor = (response as any).message
        this.donorCount=this.donorCount+countOfDonor
        this.recipientCount=this.recipientCount+countOfDonor
        console.log("app component",response,"appComponent",this.donorCount)//passing response
      
    },
    error=> {
      console.error("this shows error"); // handle errors
    }
    );
  }
 
  callact(){
    this.call=true
    // console.log("hy",this.call)
  }
  
  recmsg($event: boolean){
    this.showHome = $event
    // console.log(this.showHome)
    this.showHambPage=true
  }
  // showNum($event: any){
  //   this.donorCount= $event
  //   // console.log(this.donorCount,"from app")
  // }
  tologin(){
    this.showHambPage=true
    this.showHome=false
    this.showHeader=false
    this.temp=true
    this.isLoggedIN=true
    // console.log(this.isLoggedIN,this.temp,"before login")
  }
  tologout(){
    this.showHambPage=true
    this.showHome=false
    this.showHeader=false
    this.isLoggedIN=false
    alert('User logged out successfully');
    // console.log(this.isLoggedIN,"after logout")
  }
  showHomePage(){
    this.showHome=true
  }
   toHome(){
    this.showHambPage=false
    this.showHome=true
    document.getElementById("showHomeee")?.scrollIntoView({behavior:'smooth'});
  }
  toactivities(){
    this.showHambPage=false
    this.showHome=true
    document.getElementById("showactivities")?.scrollIntoView({behavior:'smooth'});
  }
  tofound(){
    this.showHome=true
    this.showHambPage=false
    document.getElementById("lastimg1")?.scrollIntoView({behavior:"smooth"});
  }
  toAboutUs(){
    this.showHambPage=false
    this.showHome=true
    document.getElementById("lastimg2")?.scrollIntoView({behavior:'smooth'});
  }
  toContactUs(){
    this.showHambPage=false
    this.showHome=true
    document.getElementById("lastimg3")?.scrollIntoView({behavior:'smooth'});
  }
  members=this.donorCount+this.recipientCount
  ngOnInit(): void {
    // this.isLoggedIN=this.route.snapshot.params[a]
      this.route.queryParams.subscribe((params:any)=>{
      let login = (params as any).data
      console.log(login,"appLogin")
      this.showHome=true
      this.showHambPage=false
      this.showHeader=true
      // if(login==true){
      //   if(this.temp==true){
      //   this.isLoggedIN=true
      //   console.log(this.isLoggedIN,"aft}errrr login",params,"params")
      //   }
      // }
      
    })
  }
  
}
