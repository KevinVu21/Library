const myLibrary = [];

function Book(author, title, pages, hasRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.hasRead = hasRead;
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


