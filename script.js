const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
  };
}

function addBookToLibrary() {
  // do stuff here
}

let hobbit = new Book("The Hobbit", "Tolkien", 500, true);

console.log(hobbit.info());
