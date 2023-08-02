import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { Feedback } from '../models/feedback';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar
    ) { }

  findAll(collaboratorId: string):Observable<Feedback[]> {
    const url = this.baseUrl + `/feedbacks/collaborator/${collaboratorId}`;
    return this.http.get<Feedback[]>(url);
  }
  
  findFeedbackById(id: string):Observable<Feedback> {
    const url = this.baseUrl + `/feedbacks/${id}`;
    return this.http.get<Feedback>(url);
  }

  create(feedbacks : Feedback):Observable<Feedback> {
    const url = this.baseUrl + `/feedbacks`;
    return this.http.post<Feedback>(url, feedbacks);
  }

  message(msg : String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 4000
    })
  }

  update(feedbacks: Feedback): Observable<Feedback>{
    const url = `${this.baseUrl}/feedbacks/${feedbacks.id}`;
    return this.http.put<Feedback>(url, feedbacks);
  }

  delete(id: any): Observable<void> {
  const url = `${this.baseUrl}/feedbacks/${id}`;
    return this.http.delete<void>(url);
  }
}
