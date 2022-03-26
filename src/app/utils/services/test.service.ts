import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig, AppConfiguration } from 'src/configuration';

@Injectable({
    providedIn: 'root'
})

export class TestService {
  
    constructor(@Inject(AppConfig) private readonly appConfig: AppConfiguration, private http: HttpClient) { }
  
    getList(token): Observable<any> {
      return this.http
        .get<any>(this.appConfig.QA_API + 'api/v1/bank', {
          headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
        })
        .pipe(
          map((z) => {
            return z;
          })
        );
    }
}