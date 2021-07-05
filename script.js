document.addEventListener("DOMContentLoaded",function(){
	const inputBook = document.getElementById('inputBook');

	inputBook.addEventListener("submit",(event)=>{
		event.preventDefault();
		addBook();	
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
	saveData();
});