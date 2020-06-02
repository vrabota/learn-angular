import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  public username = '';

  constructor() { }

  ngOnInit(): void {}

  isValidForm(): boolean {
    return this.username.length > 0;
  }

  resetForm(): string {
    return this.username = '';
  }

}
