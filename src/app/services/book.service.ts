import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { Books } from '../models/books';
import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';

forkJoin({
  url1: ajax.getJSON('https://www.googleapis.com/books/v1/volumes?q=romance'),
  url2: ajax.getJSON('https://www.googleapis.com/books/v1/volumes?q=ficcao'),
  url3: ajax.getJSON('https://www.googleapis.com/books/v1/volumes?q=terror'),
});

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  public getBooks(): Observable<[Books, Books, Books]> {
    const romance = this.http.get<Books>(
      'https://www.googleapis.com/books/v1/volumes?q=romance'
    );
    const ficcao = this.http.get<Books>(
      'https://www.googleapis.com/books/v1/volumes?q=ficcao'
    );
    const terror = this.http.get<Books>(
      'https://www.googleapis.com/books/v1/volumes?q=terror'
    );

    return zip(romance, ficcao, terror);
  }
}
