import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-edit',
  templateUrl: './personal-edit.component.html',
  styleUrls: ['./personal-edit.component.css']
})
export class PersonalEditComponent implements OnInit {

  name!: string;
  surname!: string;
  email!: string;

  constructor() { }

  ngOnInit(): void {
  }

  addClick(): void {
  }
}
