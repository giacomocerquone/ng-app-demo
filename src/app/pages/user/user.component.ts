import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public userInfo = {
    name: '',
    surname: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(heroForm) {
    console.log(heroForm, this.userInfo);
  }
}
