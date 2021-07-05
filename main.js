const doneReadingShelf = [];
const readingShelf = [];

function getById(elementId){
	return document.getElementById(elementId);
}

function getBook(){
	return {
		id: new Date().getTime(),
		title: getById("inputBookTitle"),
		author: getById("inputBookAuthor"),
		year: getById("inputBookYear"),
		isComplete: getById("inputBookIsComplete")
	}
}

function addBook(){
	const book = getBook();
	putBook(book);
	putBookInDom(book);
}

function putBook(book){
	const doneReading = book.isComplete.checked;
	doneReading? 
		doneReadingShelf.push(book) :
		readingShelf.push(book);

}

function putBookInDom(book){
	const doneReading = book.isComplete.checked;

	const bookShelf = doneReading?
						getById('incompleteBookshelfList') : 
						getById('completeBookshelfList');
	const htmlBook = createHtmlChildBook(book);
}

