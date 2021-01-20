import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostResponse } from '../models/post-response.payload';
import { UserProfilePayload } from '../models/user-profile.payload';

@Injectable({
  providedIn: 'root',
})
export class MeService {
  constructor(private http: HttpClient) {}

  fetchMyProfile(): Observable<UserProfilePayload> {
    return this.http.post<UserProfilePayload>(
      'http://localhost:8080/api/me/profile',
      {}
    );
  }

  updateMyProfile(): Observable<any> {
    return this.http.put('http://localhost:8080/api/me/profile', {});
  }

  fetchMyDraftPost(): Observable<any> {
    return this.http.post<PostResponse[]>(
      'http://localhost:8080/api/me/draft',
      {}
    );
  }

  fetchMyPublishedPost(): Observable<any> {
    return this.http.post<PostResponse[]>(
      'http://localhost:8080/api/me/published',
      {}
    );
  }
}