let currentId = 0;

function addBook(){
	const data = getData();
	console.log(data);
}

function getById(elementId){
	return document.getElementById(elementId);
}

function getData(){
	currentId++;
	return {
		id: currentId,
		title: getById("inputBookTitle"),
		author: getById("inputBookAuthor"),
		year: getById("inputBookYear"),
		isComplete: getById("inputBookIsComplete")
	}
}