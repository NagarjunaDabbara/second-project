import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature='recipe';
 
  onNavigate(feature:string){
   this.loadedFeature=feature;
 }
 title="nagarjuna";



  //   allowServer = false;
//   server:string="no server created";
//   ServerName:string='text';
//   name:string = 'arjun';
//   age:number = 22;
//   height:number =5.11;
//   color:string ='lite-brown';
//   text:string ="click the button";
//  constructor(){
//    setTimeout(() => {
//      this.allowServer=true;
//    },2000);
//  }
//  onCreateServer(){
//    this.server="server created! name is"+this.ServerName;
//  }
//  onServerName(event:Event){
//  this.ServerName=(<HTMLInputElement>event.target).value;

//  }

}