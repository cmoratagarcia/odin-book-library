const myLibrary = [];
const container = document.querySelector(".container");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement("div");
    container.appendChild(card);
    card.classList.add("card");
     }
}

let hobbit = new Book("The Hobbit", "Tolkien", 500, true);

console.log(hobbit.info());
