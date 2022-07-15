import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalEditService {

  baseURL: string = '/api';

  constructor(
    private http: HttpClient
  ) { }

  GetAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/members`);
  }

  Insert(model: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/members`, model);
  }

  Update(model: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/members/${model.id}`, model)
  }

  Delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/members/${id}`);
  }
}
