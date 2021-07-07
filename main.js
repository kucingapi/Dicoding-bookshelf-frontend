
// Function that help other function 
function getById(elementId){
	return document.getElementById(elementId);
}
function createElement(item){
	return document.createElement(item);
}
function createElement(item,styles){
	const element = document.createElement(item);
	styles.forEach(style => {
		element.classList.add(style);
	});
	return element;
}
function createElementWithText(item,text){
	const element = document.createElement(item);
	element.innerText = text;
	return element;
}
// When the contet frist time get load 
function loadAllBook(){
	const puttingElementToDom = (element) => {
		putBookInDom(element);
	};
	doneReadingShelf.forEach(puttingElementToDom);
	readingShelf.forEach(puttingElementToDom);
}
// event listener
function addBook(){
	const book = getBook();
	putBook(book);
	putBookInDom(book);
}

function getBook(){
	return {
		id: new Date().getTime(),
		title: getById("inputBookTitle").value,
		author: getById("inputBookAuthor").value,
		year: getById("inputBookYear").value,
		isComplete: getById("inputBookIsComplete").checked
	}
}


function putBook(book){
	const doneReading = book.isComplete;
	doneReading? 
		doneReadingShelf.push(book) :
		readingShelf.push(book);
	getArray();	
}

function putBookInDom(book){
	const doneReading = book.isComplete;

	const bookShelf = doneReading?
						getById('completeBookshelfList'):
						getById('incompleteBookshelfList') ; 
	const htmlBook = createHtmlChildBook(book);
	bookShelf.appendChild(htmlBook);
}


function createHtmlChildBook(book){
	const bookContainer = createElement("article",["book_item"]);
		const title = createElementWithText("h3",book.title);
		bookContainer.appendChild(title);

		const author = createElementWithText("p",book.author);
		bookContainer.appendChild(author);

		const year = createElementWithText("p",book.year);
		bookContainer.appendChild(year);

		const action = createElement("div",['action']);
			const buttonGreen = createButton(['green'],'change',book,bookContainer);
			buttonGreen.innerText = 'Selesai di baca';
			if(book.isComplete)
				buttonGreen.innerText = 'Belum ' + buttonGreen.innerText ;
			action.appendChild(buttonGreen);

			const buttonRed = createButton(['red'],'delete',book,bookContainer);
			buttonRed.innerText = 'Hapus buku';
			action.appendChild(buttonRed);
		bookContainer.appendChild(action);

	return bookContainer;
}

function createButton(styles,type,book,bookContainer){
	const button = createElement("button",styles);
	function deleteBookArray(){
		if(book.isComplete){
			doneReadingShelf = doneReadingShelf.filter((e)=>{
				return e.id !== book.id;
			})
		}
		else{
			readingShelf = readingShelf.filter((e)=>{
				return e.id !== book.id;
			})
		}
		bookContainer.remove();
	}

	const buttonEvent = (type === 'delete') ? 
	(event) => {
		deleteBookArray();
		saveData();
	} :
	(event) => {
		deleteBookArray();
		book.isComplete = !book.isComplete;
		putBookInDom(book);
		putBook(book);
		saveData();
	};

	button.addEventListener('click',buttonEvent);		
	return button;
}

