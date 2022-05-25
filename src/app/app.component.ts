import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from './services/book.service';
import { Book, Books } from './models/book';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Output()
  public seletedBook: EventEmitter<Book> = new EventEmitter();

  public book$: Observable<Books> = this.bookService.getBooks().pipe(
    tap((book) => {
      return book;
    })
  );

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}
  title = 'book-details';

  public selectBook(book: Book): void {
    console.log(book);
    this.seletedBook.emit(book);
  }
}
