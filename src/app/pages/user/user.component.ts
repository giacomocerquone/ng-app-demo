import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  from: 'EUR' | 'USD';
  to: 'EUR' | 'USD';
  money: string;

  constructor() {}

  ngOnInit(): void {}
}
