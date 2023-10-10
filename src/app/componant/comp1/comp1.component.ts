import { Component, OnInit } from '@angular/core';
import { DataservService } from 'src/app/share/dataserv.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
 username="narsing"
 constructor(private _serv1:DataservService) {
  this._serv1.username.subscribe((uname:any)=>{
    this.username=uname
  })
}

  ngOnInit(): void {
  }

}
