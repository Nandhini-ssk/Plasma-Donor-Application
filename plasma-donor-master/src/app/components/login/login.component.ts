import { Component,Output,EventEmitter,OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupUsers: any[] = [];
  users: any = {};
  signupObj: any = {
    userName: '',
    age: '',
    bloodgroup: '',
    city: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userNsme: '',
    password: ''
  };
  num = 5000;
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
  constructor(private http: HttpClient,private router: Router,private route:ActivatedRoute){

  }
  @Output()event=new EventEmitter<any>()
  onSignUp() {
    
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUPUsers', JSON.stringify(this.signupUsers));
    this.num=this.num+1;
    this.event.emit(this.num)
    let users=localStorage.getItem('signUPUsers');
    console.log(this.signupUsers)
    this.http.post("http://127.0.0.1:8000/signup",this.signupObj).subscribe(
      response=> {
      console.log("response",response,"this is response")
    },
    error=> {
      console.error("im error"); 
      alert('User Already exist');
    }
    );
  }
  isLog=false
  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    this.http.post("http://127.0.0.1:8000/login",{"username":this.loginObj.userName, "password":this.loginObj.password}).subscribe(
      response=> {
       
        let value = (response as any).message
        if (value == 1 ){
          this.isLog=true
          console.log("response on login",response,"isLog login",this.isLog)
          console.log("Successful")
          this.router.navigate([''],{queryParams:{data:this.isLog}})
        }
        else{
          alert('Invalid credentials');
          console.log("response on login",response)
          console.log("Failure")
        }
      
    },
    error=> {
      console.error(error); // handle errors
    }
    );
    // if (isUserExist != undefined) {
      
    //   alert('User logged in successfully');
    //   console.log(this.num,"from login          ")
    // }
    // else {
    //   alert('Invalid credentials');
    // }
  }
  
  
    

  
  

}
