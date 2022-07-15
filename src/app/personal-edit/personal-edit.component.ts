import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonalEditService } from 'src/Services/personal-edit.service';

@Component({
  selector: 'app-personal-edit',
  templateUrl: './personal-edit.component.html',
  styleUrls: ['./personal-edit.component.css']
})
export class PersonalEditComponent implements OnInit {

  selectedId!: number;
  name!: string;
  surname!: string;
  email!: string;
  memberList!: any[];
  maxId!: number;
  
  @ViewChild("btnAdd") btnAdd!: any;

  constructor(
    private personalEditService: PersonalEditService
    ) { }

  ngOnInit(): void {
    this.getAllPersonals();
  }

  btnClick(): void {
    if (this.btnAdd.element.nativeElement.innerText == 'Update') {
      this.x();
    }
    else {
      this.insertPersonal();
    }
  }

  getAllPersonals() {
    this.personalEditService.GetAll()
    .subscribe(
      res => {
        this.memberList = res;
      },
      err => {
        console.log(err.message);
      }
    )
  }

  insertPersonal() {
    this.getMaxId();
    this.personalEditService.Insert({
      id: this.maxId + 1,
      name: this.name,
      surname: this.surname,
      email: this.email
    })
    .subscribe(
      () => {
        this.getAllPersonals();
        this.clearForm();
      },
      err => {
        console.log(err.message);
      }
    )
  }

  updatePersonal(model: any) {
    this.selectedId = model.id;
    this.name = model.name;
    this.surname = model.surname;
    this.email = model.email;

    this.btnAdd.element.nativeElement.innerText = "Update";
  }

  x() {
    this.personalEditService.Update({
      id: this.selectedId,
      name: this.name,
      surname: this.surname,
      email: this.email
    })
    .subscribe(
      () => {
        this.getAllPersonals();
        this.clearForm();
        this.btnAdd.element.nativeElement.innerText = "Add";
      },
      err => {
        console.log(err.message);
      }
    )
  }

  deletePersonal(id: number) {
    this.personalEditService.Delete(id)
    .subscribe(
      () => {
        this.getAllPersonals();
      },
      err => {
        console.log(err.message);
      }
    )
  }

  private getMaxId() {
    this.maxId = Math.max(...this.memberList.map(i => i.id));
  }

  private clearForm() {
    this.name = '';
    this.surname = '';
    this.email = '';
  }
}
