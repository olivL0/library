const myLibrary = [];

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");

const submitButton = document.getElementById("submit");
const form = document.querySelector('.form');
const table = document.querySelector('.table');
const tbody = table.querySelector('tbody');

function getReadValue() {
    if(form.querySelector('input[name="read"]:checked').value == "yes") return "Read";
    else return "Not read";
};

function populateStorage() {
    localStorage.setItem('library', JSON.stringify(myLibrary));
};

function getStorage() {
    myLibrary = JSON.parse(localStorage.getItem('library'));
};

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = getReadValue();
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, I have ${this.read} it.`;
    };
};

function addBookToLibrary() {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = getReadValue();
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
};

function updateTable() {
    tbody.innerHTML = '';

    myLibrary.forEach((book) => {
        tbody.innerHTML += `
        <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read}</td>
        </tr>`
        table.appendChild(tbody);
    });

    populateStorage();
};

submitButton.addEventListener('click', () => {
    addBookToLibrary();
    updateTable();
});

console.log(myLibrary);