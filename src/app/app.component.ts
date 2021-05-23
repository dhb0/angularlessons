import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  title2 = 'Naban qnq';
  name=`dhb`;
  getName = () =>{
    return this.name
  };
  obj = {
    name:`birci`,
    age:30
  };
  arr = [`bambi`, `burcu`, "denuz"];
  location = window.location.href;
  myName="tivorlu ismail";
  nameAlert = (name:any) => {
    alert(`My name is ${name}`)
  };
  someEvent(e:any){
    console.warn(e)
  };
  currentVal="";
  getValue(event:any){
    console.log(event.target.value)
    this.currentVal=event.target.value
  };
  currentVal2=``;
  getValueByButton(val:any){
    console.log(val);
    this.currentVal2 = val
  };

  isim="Denizullah";
  boxDisabled=true;
  enableBox(){
    this.boxDisabled =false
  }
  


}
