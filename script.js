class Library {
    constructor() {
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }

    removeBook(index) {
        this.books.splice(index, 1);
    }
}

class Book {
    constructor(author, title, pages){
        this.author = author;
        this.title = title;
        this.pages = pages;
    }
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
    library.books.forEach((book, index) => {
        table.innerHTML += `
        <tr}>
            <td>${book.author}</td>
            <td>${book.title}</td>
            <td>${book.pages}</td>
            <td><button id='${index}' onClick='deleteRow(this)'>Delete</button></td>
        </tr>`;
    });
}
 
const library = new Library();
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
    library.addBook(newBook);
    displayBooks(newBook);
    
    author.value = '';
    title.value = '';
    pages.value = '';
    form.style.display = 'none';
})

function deleteRow(button){
    console.log(button.id);
    library.removeBook(button.id);
    
    displayBooks();
}