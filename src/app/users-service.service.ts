import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';// to consume api

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http:HttpClient) { }

  getData(){
    return {
      name: "Abdullah",
      job:"teacher",
      age:42
    }
  }

  fetchData(){
    let url = "https://jsonplaceholder.typicode.com/users"
    return this.http.get(url)
  }
}
