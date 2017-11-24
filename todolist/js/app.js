"use stritc";


let formTodo = document.querySelector("#form-todo"),
	input = document.querySelector("input[type='text'"),
	list = document.querySelector("#app-container ol"),
	listItem = document.querySelectorAll("#app-container ol li");


let deleteBtn = document.querySelectorAll(".delete");

//Helpers Functions

/**
 * 
 * @param {*} element 
 */

const createEl = (element) => {
	return document.createElement(element);
}

/**
 * 
 * @param {*} parent 
 * @param {*} el 
 */

const appendEl = (parent, el) => {
	return parent.appendChild(el);
}

/**
 * 
 * @param {*} form 
 */
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

/**
 * 
 * @param {*} form 
 */
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
	 	 
	 while(list.firstChild) {
		list.removeChild(list.firstChild);
	 }
});

//Edit Item
listItem.forEach(item => {
	item.addEventListener('dblclick', () => {
		
		let inputEdit = createEl("input");
		let formParent = createEl('form');

		formParent.classList.add("form-content");
		formParent.setAttribute("action","#");
		formParent.appendChild(inputEdit);

		inputEdit.setAttribute("type","text");
		inputEdit.setAttribute("value", item.textContent);
		inputEdit.setAttribute("placehold","Insert a new Text");

		inputEdit.classList.add("input-edit");

		let hasChildElement = false,
			form = item.querySelector('.form-content');
		
		if(!item.querySelector(".input-edit")){
			item.appendChild(formParent);
		}

		//Change Text on Submit
		//Remove Form after submit
	
	});
});