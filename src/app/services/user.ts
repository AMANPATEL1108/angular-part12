import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../model/userModel';

@Injectable({ providedIn: 'root' })
export class UserService {
  /** Spring‑Boot port 8080 — controller base path is /user */
  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {
    console.log('first');
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.baseUrl}/getAll`);
  }

  getUserById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}/getById/${id}`);
  }

  createUser(user: UserModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/create`, user);
  }

  updateUser(id: number, user: UserModel): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/update/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteById/${id}`);
  }
}
