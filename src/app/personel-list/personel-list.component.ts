import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrls: ['./personel-list.component.css']
})
export class PersonelListComponent implements OnInit {

  @Input() id!: number;
  @Input() name!: string;
  @Input() surname!: string;
  @Input() email!: string;

  fullText!: string;

  @Output() updateModel = new EventEmitter<any>();
  @Output() deleteId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.fullText = `${this.name} ${this.surname}, ${this.email}`;
  }

  updatePersonal() {
    this.updateModel.emit({
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email
    });
  }

  deletePersonal() {
    this.deleteId.emit(this.id);
  }
}
