import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book, Books } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  @Output()
  public seletedBook: EventEmitter<Book> = new EventEmitter();

  public book$: Observable<Books> = this.bookService.getBooks().pipe(
    tap((book) => {
      return book;
    })
  );

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  public selectBook(book: Book): void {
    console.log(book);
    this.seletedBook.emit(book);
  }
}
