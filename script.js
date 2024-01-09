const myLibrary = [];
const container = document.querySelector(".container");
const newBook = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");
const submit = document.querySelector(".submit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const yes = document.querySelector("#read-yes");
const no = document.querySelector("#read-no");

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
  container.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardTitle = document.createElement("p");
    cardTitle.innerText = myLibrary[i].title;
    card.appendChild(cardTitle);
    container.appendChild(card);
  }
}

function createBookCard() {

}
newBook.addEventListener("click", () => {
  dialog.showModal();
});

submit.addEventListener("click", () => {
  let readStatus;
  if (yes.checked) {
    readStatus = true;
  } else {
    readStatus = false;
  }

  let newBook = new Book(title.value, author.value, pages.value, readStatus);
  addBookToLibrary(newBook);
  console.log(myLibrary);
});
