document.addEventListener("DOMContentLoaded",function(){
	const inputBook = document.getElementById('inputBook');

	inputBook.addEventListener("submit",(event)=>{
		event.preventDefault();
		addBook();	
	})
});