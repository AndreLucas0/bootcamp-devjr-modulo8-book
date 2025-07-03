import { Component } from '@angular/core';
import { BookInterface } from '../../BookInterface';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class Books {

  book : BookInterface = {} as BookInterface;
  isUpdate : boolean = false;
  idCount : number = 5;

  books : BookInterface[] = [
    {
      id: 1,
      title: "Java 24 horas",
      author: "André Lucas",
      price:40.50
    },
    {
      id: 2,
      title: "Angular 24 horas",
      author: "André Lucas",
      price:36.50
    },
    {
      id: 3,
      title: "AWS 24 horas",
      author: "Lucas André",
      price:43.25
    },
    {
      id: 4,
      title: "JS 24 horas",
      author: "Lucas André",
      price:43.25
    },
  ];

  saveBook() {
    if(!this.isUpdate) {
      this.book.id = this.idCount;
      this.idCount++;
      this.books.push(this.book);
    }

    this.book = {} as BookInterface;
    this.isUpdate = false;
  }

  update(selectedBook:BookInterface) {
    this.book = selectedBook;
    this.isUpdate = true;
  }

  remove(removeBook:BookInterface) {
    this.books = this.books.filter(b => b.id !== removeBook.id);
  }
}
