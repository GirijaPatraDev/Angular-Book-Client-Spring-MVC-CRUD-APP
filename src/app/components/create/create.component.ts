import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  private baseUrl = "http://localhost:8080/mvcNoXml/book-api";
  public createdResp: any;
  private errorResp: any;
  public firstErrorMsg: string | undefined;
  constructor(private _httpClient: HttpClient) {}

  public addBook(book: any): any {
    book.price = parseFloat(book.price);
    book.qty = parseFloat(book.qty);
    console.log(book);
    this._httpClient.post(`${this.baseUrl}/create`, book)
    .subscribe({
      next: (res: any) => this.createdResp=res,
      error: (err: any) => {console.log(err);
        this.errorResp = err.error;
        this.extractFirstErrorMsg(this.errorResp);
      }
    }
    )
  }

  private extractFirstErrorMsg(error: any): void {
    if (error) {
      const errorRespKeys = Object.keys(error);
      if (errorRespKeys.length>0) {
        this.firstErrorMsg = error[errorRespKeys[0]];
      }
    }
  }
}
