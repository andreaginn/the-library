const bookInput = document.getElementById('new-book');
const readButton = document.getElementById('have-read');
const wantedButton = document.getElementById('to-read');
const readList = document.getElementById('books-read');
const wantedList = document.getElementById('books-wanted');
const testList = document.querySelector(".test-list");

let readBooks = [];
let wantedBooks = [];

function updateReadList() {
    for (let i = 0; i < readBooks.length; i++) {
        let testBook = document.createElement("p")
        testBook.textContent = readBooks[i]
        testList.append(testBook)

    }
}
function updateWantedList() {
    wantedList.innerHTML = '<ul>';
    wantedBooks.forEach(book => {
        wantedList.innerHTML += `<li>${book}</li>`;
    });
    wantedList.innerHTML += '</ul>';
}
if (readButton) {
readButton.addEventListener('click', () => {
    const bookName = bookInput.value;
    readBooks.push(bookName);
    updateReadList();
    bookInput.value = '';
});
}
if (wantedButton) {
wantedButton.addEventListener('click', () => {
    const bookName = bookInput.value;
    wantedBooks.push(bookName);
    updateWantedList();
    bookInput.value = '';
});
}