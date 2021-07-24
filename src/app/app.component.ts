import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username:string="";
  password:string="";
  msg:string="";

  checkLogin(){
    if(this.username=="admin" && this.password=="admin6"){
      this.msg = "valid";
    }
    else{
      this.msg="Invalid";
    }
  }
}
