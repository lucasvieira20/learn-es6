const movies = [
	{
		name: 'Dead Poll',
		category: 'comedy',
		nacionality: 'american',
		oscar: false
	},

	{
		name: 'Homem-Aranha: De Volta ao Lar',
		category: 'adventure',
		nacionality: 'american',
		oscar: false
	},
	{
		name: 'Brasileirinhas',
		category: 'xxx',
		nacionality: 'Brazilian',
		oscar: false
	},
	{
		name: 'Blade Runner 2049',
		category: 'action',
		nacionality: 'american',
		oscar: false
	},
	{
		name: 'Garota Exemplar',
		category: 'dram',
		nacionality: 'american',
		oscar: false
	},
	{
		name: 'Spotlight',
		category: 'suspens',
		nacionality: 'american',
		oscar: false
	},
];


//Globals Variables

let formFilter = document.querySelector(".form-filter");

function createInput(value, container) {
	if(typeof value !== 'string' || !container instanceof Object) return false;

	let input = document.createElement('input'),
		label = document.createElement('label');

	input.setAttribute('type', 'checkbox');
	input.value = value;

	label.innerText = value.toString();
	label.appendChild(input);

	container.appendChild(label);
}

function createListParent(){

	let parentList = document.querySelector("#app");
	let list = document.createElement("ul");
	list.classList.add("list-movies");
	parentList.appendChild(list);
}


function createList(value, dataAttr, container){
	if(typeof value !== 'string' || !container instanceof Object) return false;
	
	return `<li data-category="${dataAttr}"> ${value} </li>`;
}


function init () {

	createListParent();

	Array.from(movies, (movie) => {
		createInput(movie.category, formFilter);
	});

	let items = Array.from(movies, (movieItem) => {
		return createList(movieItem.name, movieItem.category ,document.querySelector('.list-movies'));
	});

	document.querySelector('.list-movies').innerHTML = items.join("");


	/* Filter */
	
	let itemsSelected = [{}];
	
	console.log(movies);

	var getVisibility = formFilter.addEventListener("change", function(e){
	
		//Verify if this array already had in Array
		if(itemsSelected.indexOf(e.target.value) == -1){
			itemsSelected.push(e.target.value);
		} else{
			itemsSelected.pop(e.target.value);
		}

		console.log(itemsSelected);
	});

}



init();