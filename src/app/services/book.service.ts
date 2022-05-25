import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Book, Books } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  public getBooks(): Observable<Books> {
    return this.http.get<Books>(
      'https://www.googleapis.com/books/v1/volumes?q=romance'
    );
  }
}
