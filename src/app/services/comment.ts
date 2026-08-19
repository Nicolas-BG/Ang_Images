import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CommentData } from '../interfaces/Comment';
import { Response } from '../interfaces/Response';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments/`

  constructor(private http: HttpClient){}

  createComment(data: CommentData, id:number): Observable<Response<CommentData>> {
    return this.http.post<Response<CommentData>>(`${this.apiUrl}${id}/comments`, data);
  }
}
