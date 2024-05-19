import { Component } from '@angular/core';
import { ApiServiceService } from '../../../../services/api-service.service';

@Component({
  selector: 'app-fetch-comp',
  templateUrl: './fetch-comp.component.html',
  styleUrl: './fetch-comp.component.css'
})
export class FetchCompComponent {
  public books: any;
  constructor(private _service: ApiServiceService) {}

  ngOnInit() {
    this._service.getBooks().subscribe(
      (res: any) => {this.books = res},
      (error: any) => console.log(error)
    )
  }
}
