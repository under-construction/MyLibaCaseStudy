import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrls: ['./personel-list.component.css']
})
export class PersonelListComponent implements OnInit {

  @Input() name!: string;
  @Input() surname!: string;
  @Input() email!: string;

  fullText!: string;

  constructor() { }

  ngOnInit(): void {
    this.fullText = `${this.name} ${this.surname}, ${this.email}`;
  }

}
