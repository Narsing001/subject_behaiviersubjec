import { Component, OnInit } from '@angular/core';
import { DataservService } from 'src/app/share/dataserv.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
username="sonkamble"
  constructor(private _serv1:DataservService) {
      this._serv1.username.subscribe((uname:any)=>{
        this.username=uname
      })
   }
servdata(uname:any){
  // this.username=uname.value
  this._serv1.username.next(uname.value)
}
  ngOnInit(): void {
  }

}
