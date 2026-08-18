import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ImageData } from '../interfaces/Image';
import { Response } from '../interfaces/Response';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  

  constructor(private http: HttpClient) {}

  createImage(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  getImages(): Observable<Response<ImageData[]>> {
    return this.http.get<Response<ImageData[]>>(this.apiUrl);
  }

  getImageById(id: number): Observable<Response<ImageData>> {
    const url = `${this.apiUrl}/${id}`; 
    return this.http.get<Response<ImageData>>(url);
  }

  removeImageById(id:number) {
    const url = `${this.apiUrl}/${id}`; 
    return this.http.delete(url);
  }

  updateImageById(id:number, formData: FormData): Observable<FormData>{
    const url = `${this.apiUrl}/${id}`; 
    return this.http.put<FormData>(url, formData);
  }
}
