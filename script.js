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

  let toggleRead = function () {
    return !this.read;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  container.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let bookTitle = myLibrary[i].title;
    let bookAuthor = myLibrary[i].author;
    let bookPages = myLibrary[i].pages;

    createBookCard(bookTitle, bookAuthor, bookPages);
  }
}

function createBookCard(title, author, pages) {
  let card = document.createElement("div");
  card.classList.add("card");

  let cardTitle = document.createElement("p");
  cardTitle.innerText = title;
  card.appendChild(cardTitle);
  let cardAuthor = document.createElement("p");
  cardAuthor.innerText = author;
  card.appendChild(cardAuthor);
  let cardPages = document.createElement("p");
  cardPages.innerText = pages;
  card.appendChild(cardPages);

  let remove = document.createElement("button");
  remove.innerText = "Remove";
  card.appendChild(remove);
  let read = document.createElement("button");
  read.innerText = "Read?";
  card.appendChild(read);
  container.appendChild(card);

  remove.addEventListener("click", () => {
    alert("Deleted!");
  });

  read.addEventListener("click", () => {
    alert("Read!");
  });
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
