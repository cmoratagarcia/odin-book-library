const myLibrary = [];
const container = document.querySelector(".container");
const newBookBtn = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");
const submitBtn = document.querySelector(".submit");
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
    let bookRead = myLibrary[i].read;

    createBookCard(bookTitle, bookAuthor, bookPages, bookRead);
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

  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  card.appendChild(remove);
  let readBtn = document.createElement("button");
  readBtn.innerText = "Read?";
  card.appendChild(read);
  container.appendChild(card);

  removeBtn.addEventListener("click", () => {
    remove.parentElement.innerHTML = "";
  });

  readBtn.addEventListener("click", () => {
    toggleRead();
  });
}

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

submitBtn.addEventListener("click", () => {
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
