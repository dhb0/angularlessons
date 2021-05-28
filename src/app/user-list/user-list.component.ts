import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() arr:any

  constructor() { }

  ngOnInit(): void {
    console.log(this.arr?.[0])
  }

}
