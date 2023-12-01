const myLibrary = [];

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    table.innerHTML = `
        <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Pages</th>
            <th>Action</th>
        </tr>
    `;
    myLibrary.forEach((book, index) => {
        table.innerHTML += `
        <tr id=${index}>
            <td>${book.author}</td>
            <td>${book.title}</td>
            <td>${book.pages}</td>
            <td><button onClick='deleteRow(this)'>Delete</button></td>
        </tr>`;
    });
}
 

const btn = document.querySelector('#btn');
const form = document.querySelector('form');
const table = document.querySelector("table");
const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
const container =document.querySelector('.container');

container.style.display = 'none';

btn.addEventListener('click', function(){
    form.style.display = 'flex';
    container.style.display = 'none';
})

form.addEventListener('submit', function(event){
    container.style.display = 'flex';
    event.preventDefault();
    newBook = new Book(author.value, title.value, pages.value);
    addBookToLibrary(newBook);
    displayBooks(newBook);
    
    author.value = '';
    title.value = '';
    pages.value = '';
    form.style.display = 'none';
})

function deleteRow(button){
    myLibrary.splice(parseInt(button.id), 1);
    displayBooks();
}