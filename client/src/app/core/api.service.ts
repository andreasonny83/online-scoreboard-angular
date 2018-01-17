import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export const API_URL: InjectionToken<string> = new InjectionToken<string>('api.url');

export interface INewGame {
  created: boolean;
  gameId: string;
  status: string;
}

@Injectable()
export class ApiService {
  public apiUrl: string;

  constructor(
    @Inject(API_URL) public ApiUrl: string,
    private http: HttpClient,
  ) {
    this.apiUrl = ApiUrl;
  }

  newGame<T>(): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/new`, {});
  }
}
