import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export class User {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  thumbNail: string;
  picture: string;
  userName: string;

  constructor(
    firstName, 
    lastName, 
    title,
    email, 
    thumbNail,
    picture, 
    userName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.email = email;
    this.thumbNail = thumbNail;
    this.picture = picture;
    this.userName = userName;
  }
}


@Injectable()
export class ApiServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ApiServiceProvider Provider');
  }

  //Make API Call, and return data//

  getData() {
    let Users = [];
    return this.http.get('https://randomuser.me/api/?results=10')
    .map(data => data.json())
    .map(res => {
      console.log(res);
      for(let i = 0; i < res.results.length; i++) {
        let Data = new User(
          res.results[i].name.first,
          res.results[i].name.last, 
          res.results[i].name.title,
          res.results[i].email,
          res.results[i].picture.thumbnail,
          res.results[i].picture.large,
          res.results[i].login.username);
        Users.push(Data)
      }
      return Users;
    });
  }
}
