// const radioButton1 = document.getElementById('radio1')
// const radioButton2 = document.getElementById('radio2')
// const submitButton = document.querySelector('#submitButton')
// const bookForm = document.querySelector('#bookInputForm')
// const myLibrary = [];
// let libBody = document.querySelector('.libBody')


// //Constructor for the book object
// function book(title, author, page, read) {
//     this.title = title;
//     this.author = author;
//     this.page = page;
//     this.read = read;
// }

// //Function to add the actual display of each book
// function addBookDiv(title, author, page, read, index) {
//     const newBook = document.createElement('div')
//     newBook.classList = 'newBookDiv'
//     read = read ? "Read" : "In Progress"
//     newBook.innerHTML = `
//     <h1>${title}</h1>
//     <h2>By: ${author}</h2>
//     <h3>Page Count: ${page}</h3>
//     <button id='readNotReadButton' class='readChangeButton'>${read}</button>
//     <button id='deleteButton${index}' class='deleteButton'></button>
//     `
//     libBody.appendChild(newBook);
// }
// //display function will hold the creation and update functions for the array and display
// function updateDisplay(title,author,page,read) {
// const newBook = new book(title, author, page, read)
// myLibrary.push(newBook)
// libBody.innerHTML = ""
// } //end of display function
// submitButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const title = document.getElementById('titleInput');
//     const author = document.getElementById('author');
//     const page = document.getElementById('pageInput');
//     const read = radioButton1.checked ? true : false;
//     updateDisplay(title.value, author.value, page.value, read);
//     myLibrary.forEach((book, index)  => {
//         addBookDiv(title.value, author.value, page.value, read)
//     });
//     bookForm.reset()
// });

// const deleteButtons = document.querySelectorAll('.deleteButton')
// deleteButtons.forEach((button, buttonIndex) => {
//     button.addEventListener(click, (e) => {
//         e.target.parentElement.remove();
//         myLibrary.splice(index, 1);
//         displayBooks();
        
//     })
// }) 

const myLibrary = [];
const addButton = document.querySelector('#submitButton');
const radioButtonYes = document.querySelector('#radio1')
const radioButtonNo = document.querySelector('#radio2')

//will create constructor for book objet to push to lib array
function book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}
//Create a function that will sort through the myLibrary array and then push each unique object to the libBody as a div
function pushObject() {
    const libBody = document.querySelector('.libBody')
    libBody.innerHTML = ''
    myLibrary.forEach((libBook, index) => {
        const libBookDiv = document.createElement('div')
        libBookDiv.classList = 'libBookDiv'
        libBookDiv.id = `libBookDiv${index}`
        libBookDiv.innerHTML = `<div><h2 class='divTitle'>Title: ${libBook.title}</h2>
        <h2 class='divTitle'>Author:${libBook.author}</h2>
        <h2 class='pageTitle'>Pages: ${libBook.page}</h2></div>
        <div class='buttonBox'><button id='readButton${index}' class='readButton'>${libBook.read === false ? "Not Read" : "Read"}</button><button class='deleteButton' id='deleteDivButton${index}'>Delete</button></div>`
        libBody.appendChild(libBookDiv)
    })
}

//Function to clear values at the end of the event
function clearValues(title, author, pages) {
    title.value = ''
    author.value = ''
    pages.value = ''
    radioButtonYes.checked = false;
    radioButtonNo.checked = false; 

}
//event listener for add button being used
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#titleInput')
    const author = document.querySelector('#author')
    const pages = document.querySelector('#pageInput')
    const read = radioButtonYes.checked;
    if (title.value === "" || author.value === '') {
        alert('Please fill in all fields')
        return
    }
    else if (pages.value <= 0) {
        alert('Please choose a valid number of pages')
        return
    }
    const libBook = new book(title.value, author.value, pages.value, read)
    myLibrary.push(libBook);
    pushObject()
    clearValues(title, author, pages)
    
    //event listener for the read/not read button
    const readButtons = document.querySelectorAll('.readButton')
    readButtons.forEach((button) => {button.addEventListener('click', (e) => {
    e.target.innerText = e.target.innerText === "Read" ? "Not Read" : "Read";
    })})

    //event listener for delete buttons
    const deleteButtons = document.querySelectorAll('.deleteButton')
    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            button.parentElement.parentElement.remove();
            myLibrary.splice(button.index, 1)
        })
    })
})



