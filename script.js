const myLibrary = [];

function Book(author, title, pages, hasRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.hasRead = hasRead === 'true'; // Convert string to boolean
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    display(); // Display the updated library
}

function display() {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear the container before adding new books

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = book.title;
        card.appendChild(title);

        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-content';

        const author = document.createElement('div');
        author.className = 'author';
        author.textContent = `Author: ${book.author}`;
        cardContainer.appendChild(author);

        const pages = document.createElement('div');
        pages.className = 'pages';
        pages.textContent = `Pages: ${book.pages}`;
        cardContainer.appendChild(pages);

        const readStatus = document.createElement('div');
        readStatus.className = 'read-status';
        readStatus.textContent = book.hasRead ? 'Status: Already Read' : 'Status: Not Read Yet';
        cardContainer.appendChild(readStatus);

        card.appendChild(cardContainer);
        container.appendChild(card);
    });
}

// Modal handling
const modal = document.getElementById('modal');
const addBookBtn = document.getElementById('add-book');
const closeBtn = document.querySelector('.close');
const form = document.getElementById('book-form');
const submitBtn = document.querySelector('.add');
// Open the modal when "Add Book" button is clicked
addBookBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    // modal.style.justifyContent = 'center';
    // modal.style.alignItems = 'center';
});

// Close the modal when the "x" is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const hasRead = document.getElementById('hasRead')?.checked || false;

    if (!author || !title || !pages) {
        alert("Please fill in all fields.");
        return;
    }

    const newBook = new Book(author, title, pages, hasRead);
    addBookToLibrary(newBook);

    // Clear input fields manually since there's no form
    document.getElementById('author').value = "";
    document.getElementById('title').value = "";
    document.getElementById('pages').value = "";
    if (document.getElementById('hasRead')) {
        document.getElementById('hasRead').checked = false;
    }

    modal.style.display = 'none'; // Close modal after adding book
});

