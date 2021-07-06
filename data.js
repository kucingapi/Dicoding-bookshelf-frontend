const STORAGE_KEYS1 = 'DONE_READING';
const STORAGE_KEYS2 = 'READING';

let doneReadingShelf = [];
let readingShelf = [];

function isStorageExist(){
	if(typeof(Storage) === undefined){
		alert('there is no web storage in your device');
		return false;
	}
	return true;
}

function saveData(){
	console.log(JSON.stringify(doneReadingShelf));
	if(isStorageExist){
		localStorage.setItem(STORAGE_KEYS1,JSON.stringify(doneReadingShelf));
		localStorage.setItem(STORAGE_KEYS2,JSON.stringify(readingShelf));
	}
}

function getData(){

	console.log(JSON.parse(localStorage.getItem(STORAGE_KEYS1)));
	doneReadingShelf = JSON.parse(localStorage.getItem(STORAGE_KEYS1));
	readingShelf = JSON.parse(localStorage.getItem(STORAGE_KEYS2));
}