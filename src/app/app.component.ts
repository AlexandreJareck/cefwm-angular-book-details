import { Component } from '@angular/core';
import { Book } from './models/book';
import { Books } from './models/books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'book-details';

  public showForBooks?: Books;

  public showBook(books: Books): void {
    this.showForBooks = books;
  }

  public showDescription(index: number): void {
    if (!this?.showForBooks?.items[index]?.searchInfo?.textSnippet)
      alert('Livro sem descrição!');

    this.showForBooks!.items[index]!.visibleDescription =
      !this.showForBooks!.items[index]!.visibleDescription;
  }
}
