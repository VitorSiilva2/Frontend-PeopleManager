import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Collaborator } from '../models/collaborator';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar
    ) { }

  findAll():Observable<Collaborator[]> {
    const url = this.baseUrl + "/collaborators"
    return this.http.get<Collaborator[]>(url);
  }
  
  findById(id: any):Observable<Collaborator>{
    const url = `${this.baseUrl}/collaborators/${id}`;
    return this.http.get<Collaborator>(url);
  }

  create(collaborator : Collaborator):Observable<Collaborator> {
    const url = this.baseUrl + "/collaborators";
    return this.http.post<Collaborator>(url, collaborator);
  }

  message(msg : String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 4000
    })
  }

  update(collaborator: Collaborator): Observable<Collaborator>{
    const url = `${this.baseUrl}/collaborators/${collaborator.id}`;
    return this.http.put<Collaborator>(url, collaborator);
  }

  delete(id: any): Observable<void> {
  const url = `${this.baseUrl}/collaborators/${id}`;
    return this.http.delete<void>(url);
  }
}
