const myLibrary = [];
const container = document.querySelector(".container");
const newBookBtn = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector(".close-dialog");
const submitBtn = document.querySelector(".submit");
const form = document.querySelector(".form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatusToggle = document.querySelector(".modal-toggle");
const readOption = document.querySelector(".read-option");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

readStatusToggle.addEventListener("change", (e) => {
  readOption.innerText = e.target.checked ? "Read" : "Not Read";
  readOption.classList.toggle("unread", !e.target.checked);
});

function extractArrayValues() {
  container.innerHTML = "";
  myLibrary.forEach((book, index) => {
    createBookCard(book, index);
  });
}

function createBookCard(book, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", index);

  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = `Title: ${book.title}`;
  card.appendChild(cardTitle);

  const cardAuthor = document.createElement("p");
  cardAuthor.classList.add("card-author");
  cardAuthor.innerText = `Author: ${book.author}`;
  card.appendChild(cardAuthor);

  const cardPages = document.createElement("p");
  cardPages.classList.add("card-pages");
  cardPages.innerText = `Pages: ${book.pages}`;
  card.appendChild(cardPages);

  const bottomCardSection = document.createElement("div");
  bottomCardSection.classList.add("bottom-section");
  bottomCardSection.innerHTML = `
  <div class="slider-section">
      <label class="switch">
        <input type="checkbox" id="slider-${index}" ${
    book.read ? "checked" : ""
  } />
        <span class="slider"></span>
      </label>

      <div class="read-selection ${
        book.read ? "" : "unread"
      }" id="read-${index}" ></div>
      </div>
      <button class="remove-button"><i class="fa-solid fa-trash"></i></button>
       `;

  card.appendChild(bottomCardSection);
  container.appendChild(card);

  const cardSlider = card.querySelector(`#slider-${index}`);
  const cardReadOption = card.querySelector(`#read-${index}`);
  cardReadOption.innerText = book.read ? "Read" : "Not Read";

  function updateReadStatus(book, cardReadOption) {
    book.toggleRead();
    cardReadOption.innerText = book.read ? "Read" : "Not Read";
    cardReadOption.classList.toggle("unread", !book.read);
  }

  cardSlider.addEventListener("change", () => {
    updateReadStatus(book, cardReadOption);
  });

  const removeBtn = card.querySelector(".remove-button");
  removeBtn.addEventListener("click", () => {
    removeBook(index);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  extractArrayValues();
}

newBookBtn.addEventListener("click", () => {
  form.reset();
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});

submitBtn.addEventListener("click", (e) => {
  if (form.checkValidity()) {
    let readStatus = readStatusToggle.checked;

    let newBook = new Book(title.value, author.value, pages.value, readStatus);
    addBookToLibrary(newBook);
    extractArrayValues();
  }
});
