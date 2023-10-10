import { Component } from '@angular/core';
import { DataservService } from './share/dataserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   username:string="Home"
   constructor(private _serv1:DataservService) {
    this._serv1.username.subscribe((uname:any)=>{
      this.username=uname
    })
 }
  
}
