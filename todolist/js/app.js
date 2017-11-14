"use stritc";


let formTodo = document.querySelector("#form-todo");
let input = document.querySelector("input[type='text'");
let list = document.querySelector("#app-container ol");

let deleteBtn = document.querySelectorAll(".delete");

//Helpers Functions

const createEl = (element) => {
	return document.createElement(element);
}

const appendEl = (parent, el) => {
	return parent.appendChild(el);
}

const validate = (form) => {
	let errorMsg = document.querySelector(".alert");
	let validateState = null;

	if(input.value == ""){
		errorMsg.classList.remove("hide")
		validateState = false;

	} else {
		validateState = true;
	}

	return validateState;

}

const insertInto = (form) => {
	
	let item = createEl("li");
	item.textContent = input.value;
	
	let deleteBtn = createEl("a");
	deleteBtn.setAttribute("href","#");
	deleteBtn.classList.add('delete');
	deleteBtn.textContent = "Delete";
	deleteBtn.addEventListener('click', function(e){
		e.preventDefault();
		this.parentElement.remove();
	});

	appendEl(item, deleteBtn);
	appendEl(list, item);

}



//Insert
formTodo.addEventListener('submit', function(e){
	e.preventDefault();	
	validate(formTodo);
	if(validate(formTodo)){
		// 1 - Insert Todo
		insertInto(formTodo);
	}

	//Clear Input
	input.value = "";
});

//Delete
deleteBtn.forEach(function(value){
	value.addEventListener('click', function(e){
		e.preventDefault();
		this.parentElement.remove();
	});
});

//RemoveAll

let removeAll = document.querySelector(".remove-all");

removeAll.addEventListener('click', function(e){
	 let todoListNode = list.childNodes;
	 console.log('todo', todoListNode);

});