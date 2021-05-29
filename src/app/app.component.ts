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
  };
  showH1=`yes`;
  showColor=`red`;
  showH1Color='blue';
  labels=[`fender`, 'ibanez', 'gibson', 'martin'];
  users=[{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },];

  getFormValues(v:any){
    console.log(v)
  }

  colorOfH3=`orange`;
  updateColor(){
    this.colorOfH3 = 'brown'
  }
  error=true;
  members=[
    {
      name:"deniz",
      age:30,
      address:"corum"
    },
    {
      name:"babun",
      age:22,
      address:"corum"
    },
    {
      name:"burcu",
      age:30,
      address:"ankara"
    },
    {
      name:"zalimey",
      age:25,
      address:"Istanbul"
    }
  ]

  parentFunction(data:any){
    console.warn(data);
    this.variable=data.name
  }
  
  variable=``
  myFullName="dEniZ bEYaZ"

  today = Date.now()

  str=`Hello angular gardasim`

  money=100


}
