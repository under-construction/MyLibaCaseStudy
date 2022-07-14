import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalEditService } from 'src/Services/personal-edit.service';

@Component({
  selector: 'app-personal-edit',
  templateUrl: './personal-edit.component.html',
  styleUrls: ['./personal-edit.component.css']
})
export class PersonalEditComponent implements OnInit {

  name!: string;
  surname!: string;
  email!: string;
  memberList!: any[];
  maxId!: number;

  constructor(
    private personalEditService: PersonalEditService
    ) { }

  ngOnInit(): void {
    this.GetAllPersonals();
  }

  addClick(): void {
    this.InsertPersonal();
  }

  GetAllPersonals() {
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

  InsertPersonal() {
    this.getMaxId();
    this.personalEditService.Insert({
      id: this.maxId + 1,
      name: this.name,
      surname: this.surname,
      email: this.email
    })
    .subscribe(
      () => {
        this.GetAllPersonals();
      },
      err => {
        console.log(err.message);
      }
    )
  }

  DeletePersonal(id: number) {
    this.personalEditService.Delete(id)
    .subscribe(
      () => {
        this.GetAllPersonals();
      },
      err => {
        console.log(err.message);
      }
    )
  }

  private getMaxId() {
    this.maxId = Math.max(...this.memberList.map(i => i.id));
  }
}
