const STORAGE_KEYS = 'TODO_APPS';

let todos = [];

function isStorageExist(){
	if(typeof(Storage) === undefined){
		alert('there is no web storage in your device');
		return false;
	}
	return true;
}

function saveData(){
	const parsed = JSON.stringify(todos);
	localStorage.setItem(STORAGE_KEYS,todos);
	document.dispatchEvent(new Event('ondatasaved'));
}