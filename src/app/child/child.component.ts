import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() parentFunction:EventEmitter<any> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
    let data = {name:`dhb`, age:30}
    this.parentFunction.emit(data)
  }
  sendData(){
    let data = {name:`dhb`, age:30}
    this.parentFunction.emit(data)
  }
}
