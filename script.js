document.addEventListener("DOMContentLoaded",function(){
	const inputBook = document.getElementById('inputBook');
	getData();
	loadAllBook();

	inputBook.addEventListener("submit",(event)=>{
		event.preventDefault();
		addBook();	
		saveData();
	})

	const inputCheckBox = document.querySelector("input[name=checkbox]");

	inputCheckBox.addEventListener('change',(event) =>{

		const bookIsCompleteSpan = document.getElementById('bookIsComplete');
		if(inputCheckBox.checked){
			bookIsCompleteSpan.innerText = 'Selesai dibaca';
		}
		else{
			bookIsCompleteSpan.innerText = 'Belum selesai dibaca';
		}
	});
});