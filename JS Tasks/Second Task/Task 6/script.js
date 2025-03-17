let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true },
    { title: "1984", author: "George Orwell", isAvailable: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true },
    { title: "Moby-Dick", author: "Herman Melville", isAvailable: true },
    { title: "Pride and Prejudice", author: "Jane Austen", isAvailable: true }
];

// Display books list
function displayBooks() {
    let bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    books.forEach(book => {
        let li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author} (${book.isAvailable ? "Available" : "Checked Out"})`;
        bookList.appendChild(li);
    });
}

// Checkout book function
function checkoutBook(bookTitle) {
    let book = books.find(b => b.title === bookTitle);
    let message;
    if (book && book.isAvailable) {
        book.isAvailable = false;
        message = `You have checked out "${book.title}".`;
    } else {
        message = `Sorry, "${book.title}" is not available.`;
    }
    document.getElementById("checkoutMessage").textContent = message;
    displayBooks();
}

// Search book function
function searchBook() {
    let searchQuery = document.getElementById("searchBox").value.toLowerCase();
    let result = books.find(book => book.title.toLowerCase().includes(searchQuery));
    let message;
    if (result) {
        message = `Found: ${result.title} by ${result.author}`;
    } else {
        message = "Book not found.";
    }
    document.getElementById("searchMessage").textContent = message;
}

// Add checkout buttons dynamically
function addCheckoutButtons() {
    let checkoutDiv = document.getElementById("checkout-buttons");
    checkoutDiv.innerHTML = "";
    books.forEach(book => {
        let btn = document.createElement("button");
        btn.textContent = `Checkout "${book.title}"`;
        btn.onclick = function () { checkoutBook(book.title); };
        checkoutDiv.appendChild(btn);
    });
}

// Initialize the page
displayBooks();
addCheckoutButtons();
