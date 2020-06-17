import { Component } from '@angular/core';
import { User } from './user';
import { FormserviceService } from './formservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 city=["Bangalore","Mumbai","pune"];
 submitted=false;
 userModel=new User('','kishorgarrix@gmail.com','',9876543210,'Bangalore','male'); 
 constructor(private _formService:FormserviceService){}


  onSubmit(){
    this.submitted =true;
  this._formService.enroll(this.userModel)
  .subscribe(
    data =>console.log('sucess',data),
    error =>console.error('error',error)
  )
}

}
