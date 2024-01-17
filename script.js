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
const toggleSlider = document.querySelector(".switch input");
const readOption = document.querySelector(".read-option");
const notReadOption = document.querySelector(".not-read-option");

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

toggleSlider.addEventListener("change", (e) => {
  readOption.style.display = e.target.checked ? "block" : "none";
  notReadOption.style.display = e.target.checked ? "none" : "block";
});

function extractArrayValues() {
  container.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let titleValue = myLibrary[i].title;
    let authorValue = myLibrary[i].author;
    let pagesValue = myLibrary[i].pages;
    let readValue = myLibrary[i].read;
    let indexValue = i;

    createBookCard(titleValue, authorValue, pagesValue, readValue, indexValue);
  }
}

function createBookCard(title, author, pages, read, index) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", index);

  let cardTitle = document.createElement("p");
  cardTitle.innerText = `Title: ${title}`;
  card.appendChild(cardTitle);
  let cardAuthor = document.createElement("p");
  cardAuthor.innerText = `Author: ${author}`;
  card.appendChild(cardAuthor);
  let cardPages = document.createElement("p");
  cardPages.innerText = `Pages: ${pages}`;
  card.appendChild(cardPages);

  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  card.appendChild(removeBtn);

  removeBtn.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    extractArrayValues();
  });

  let cardSliderSection = document.createElement("div");
  cardSliderSection.classList.add("slider-section");
  cardSliderSection.innerHTML = `
      <label class="switch">
        <input type="checkbox" id="slider-${index}" ${read ? "checked" : ""} />
        <span class="slider"></span>
      </label>

      <div class="read-option" id="read-${index}">Read</div>
      <div class="not-read-option" id="not-read-${index}">Not Read</div>
  `;

  card.appendChild(cardSliderSection);
  container.appendChild(card);

  let cardSlider = card.querySelector(`#slider-${index}`);

  cardSlider.addEventListener("change", () => {
    const cardReadOption = card.querySelector(`#read-${index}`);
    const cardNotReadOption = card.querySelector(`#not-read-${index}`);

    console.log(cardReadOption, cardNotReadOption);

    cardReadOption.style.display = cardSlider.checked ? "block" : "none";
    cardNotReadOption.style.display = cardSlider.checked ? "none" : "block";

    // myLibrary[index].toggleRead();
    // extractArrayValues();
  });
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
    let readStatus = toggleSlider.checked;

    let newBook = new Book(title.value, author.value, pages.value, readStatus);
    addBookToLibrary(newBook);
    extractArrayValues();
    console.log(myLibrary);
  }
});
