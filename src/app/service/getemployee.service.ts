import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetemployeeService {

  constructor(private httpService: HttpClient) { }
  get(url: string) {
    return this.httpService.get(url).toPromise();
  }

  post(url: string, body: any) {
    return this.httpService.post(url, body).toPromise();
  }
}
