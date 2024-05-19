import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseUrl = "http://localhost:8080/mvcNoXml/book-api";
  constructor(private _httpClient: HttpClient) { }

  public getBooks(): any{
    return this._httpClient.get(`${this.baseUrl}/books`);
  }
}
