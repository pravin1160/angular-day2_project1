import { Component, VERSION } from '@angular/core';

export class MyItems{
  Value: String;
  constructor(Value:String){
    this.Value=Value;

  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
 // name = 'Angular ' + VERSION.major;
 title = "GeeksforGeeks";
 about = "Computer Science Portal for Geeks";
arr: MyItems[] =new Array();
newItems: any={}
 constructor(){
  //  this.arr.push(
  //    new MyItems("First Value"),
  //  new MyItems("Second Value"),
  //  new MyItems("Third Value")
  //  );
 }

 AddItems(){
   this.arr.push(
     this.newItems
   )
   this.newItems={}
 }
}

