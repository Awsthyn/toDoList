let Project = class Project {
	constructor(name) {
		(this.name = name), (this.todosArray = []);
	}
};

let Todo = class Todo {
	constructor(title, description, dueDate, priority, project) {
		(this.title = title),
			(this.description = description),
			(this.dueDate = dueDate),
			(this.priority = priority);
		projectList[project]["todosArray"].push({
			title: title,
			description: description,
			dueDate: dueDate,
			status: false,
			priority: priority,
		});
	}
};

function createProject() {
	const projectContainer = document.getElementById("projectContainer");
	const inputProject = document.createElement("input");
	inputProject.setAttribute("type", "text");
	inputProject.placeholder = "Project name";
	inputProject.classList.add("w-40");
	const btnInputProject = document.createElement("button");
	btnInputProject.textContent = "Done!";
	btnInputProject.classList.add(
		"bg-blue-500",
		"hover:bg-blue-700",
		"text-white",
		"font-bold",
		"py-2",
		"px-4",
		"rounded",
		"m-4",
		"w-40"
	);
	btnInputProject.addEventListener("click", function () {
		projectList.push(new Project(inputProject.value));
		while (projectContainer.firstChild) {
			projectContainer.removeChild(projectContainer.firstChild);
		}
		render();
	});
	projectContainer.appendChild(inputProject);
	projectContainer.appendChild(btnInputProject);
}

//Lista desplegable proyectos
function createTodo() {
	inputTitle();
	inputDescription();
	selectProject();
	inputDate();
	selectPriority();
	TodoBtnOk();
	btnCreateTodo.disabled = true;
}

function selectProject() {
	const selectProject = document.createElement("select");
	selectProject.classList.add("w-40");
	selectProject.setAttribute("id", "domSelectProject");
	createContent.appendChild(selectProject);
	for (option of projectList) {
		let projectChoose = document.createElement("option");
		projectChoose.text = option.name;
		selectProject.add(projectChoose);
	}
}
function TodoBtnOk() {
	const btnOk = document.createElement("button");
	btnOk.classList.add(
		"bg-blue-500",
		"hover:bg-blue-700",
		"text-white",
		"font-bold",
		"py-2",
		"px-4",
		"rounded",
		"m-4",
		"w-40"
	);
	btnOk.setAttribute("id", "createTodobtnOk");
	btnOk.textContent = "Done!";
	createContent.appendChild(btnOk);
	btnOk.addEventListener("click", function () {
		let title = document.querySelector("#domInputTitle").value;
		let description = document.querySelector("#domInputDescription").value;
		let project = document.querySelector("#domSelectProject").selectedIndex;
		let dueDate = document.querySelector("#domInputDate").value;
		let priority = document.querySelector("#domSelectPriority").value;
		let todoNew = new Todo(title, description, dueDate, priority, project);
		const createContentDinamyc = document.querySelector("#createContent");
		for (i = createContentDinamyc.childNodes.length - 1; i > -1; i--) {
			createContentDinamyc.removeChild(
				createContentDinamyc.childNodes[i]
			);
		}
		btnCreateTodo.disabled = false;
		render();
	});
}
function inputTitle() {
	const titleInput = document.createElement("input");
	titleInput.defaultValue = "Title";
	titleInput.classList.add("w-40", "text-center");
	titleInput.setAttribute("id", "domInputTitle");
	titleInput.setAttribute("type", "text");
	createContent.appendChild(titleInput);
}

function inputDescription() {
	const descriptionInput = document.createElement("input");
	descriptionInput.defaultValue = "Description";
	descriptionInput.classList.add("w-64", "text-center");
	descriptionInput.setAttribute("id", "domInputDescription");
	descriptionInput.setAttribute("type", "text");
	createContent.appendChild(descriptionInput);
}

function inputDate() {
	const dateInput = document.createElement("input");
	dateInput.classList.add("w-40", "text-center");
	dateInput.setAttribute("id", "domInputDate");
	dateInput.setAttribute("type", "date");
	dateInput.setAttribute("value", "2020-08-09");
	createContent.appendChild(dateInput);
}

function selectPriority() {
	const selectPriority = document.createElement("select");
	selectPriority.setAttribute("id", "domSelectPriority");
	selectPriority.classList.add("w-40", "text-center");
	createContent.appendChild(selectPriority);
	priorityArray = ["High", "Normal", "Low"];
	for (item of priorityArray) {
		let priorityOptions = document.createElement("option");
		priorityOptions.text = item;
		selectPriority.add(priorityOptions);
	}
}

function assignBtnFinishedTodo() {
	btnFinishedTodo.addEventListener("click", function () {
		let searchTitle = document.querySelector("#editTitle").textContent;
		let auxProject = document
			.querySelector("#editProject")
			.textContent.slice(9);
		let projectIndex = 0;
		for (i = 0; i < projectList.length; i++) {
			if (projectList[i].name == auxProject) {
				projectIndex = i;
			}
		}
		for (let j = 0; j < projectList[projectIndex].todosArray.length; j++) {
			if (projectList[projectIndex].todosArray[j].title === searchTitle) {
				console.log(projectList[projectIndex].todosArray[j]);
				console.log(projectList[projectIndex].todosArray[j].status);
				projectList[projectIndex].todosArray[j].status = true;
				console.log(projectList[projectIndex].todosArray[j].status);
			}
		}
		render();
	});
}
function assignBtnDeleteTodo() {
	btnDeleteTodo.addEventListener("click", function () {
		var searchTitle = document.querySelector("#editTitle").textContent;
		var auxProject = document
			.querySelector("#editProject")
			.textContent.slice(9);
		//Acomodar esto!!!!
		let projectIndex = 0;
		for (i = 0; i < projectList.length; i++) {
			if (projectList[i].name == auxProject) {
				projectIndex = i;
			}
		}
		for (let j = 0; j < projectList[projectIndex].todosArray.length; j++) {
			if (projectList[projectIndex].todosArray[j].title === searchTitle) {
				console.log(projectIndex);
				console.log(projectList[projectIndex].todosArray[j]);
				projectList[projectIndex].todosArray.splice(j, 1);
			}
		}
		render();
		cleanTodoDisplay();
	});
}

function assignBtnEditTodo() {
	btnEditTodo.addEventListener("click", editTodo);
}

function editTodo() {
	editTitle();
	editProject();
	editDescription();
	editDate();
	editPriority();
	editTodoBtnOk();
	editCleanTodoDisplay();
}

function editTitle() {
	const titleInput = document.createElement("input");
	titleInput.defaultValue = document.querySelector("#editTitle").textContent;
	titleInput.classList.add("text-red-800");
	titleInput.setAttribute("id", "domEditTitle");
	titleInput.setAttribute("type", "text");
	todoDisplay.appendChild(titleInput);
}

function editProject() {
	const selectProject = document.createElement("select");
	selectProject.setAttribute("id", "domEditProject");
	todoDisplay.appendChild(selectProject);
	for (option of projectList) {
		let projectChoose = document.createElement("option");
		projectChoose.text = option.name;
		selectProject.add(projectChoose);
	}
	document.querySelector("#domEditProject").value = document
		.querySelector("#editProject")
		.textContent.slice(9);
}

function editDescription() {
	const descriptionInput = document.createElement("input");
	descriptionInput.defaultValue = document
		.querySelector("#editDescription")
		.textContent.slice(13);
	descriptionInput.setAttribute("id", "domEditDescription");
	descriptionInput.setAttribute("type", "text");
	todoDisplay.appendChild(descriptionInput);
}

function editDate() {
	const dateInput = document.createElement("input");
	dateInput.setAttribute("id", "domEditDate");
	dateInput.setAttribute("type", "date");
	dateInput.setAttribute(
		"value",
		document.querySelector("#editDueDate").textContent.slice(9)
	);
	todoDisplay.appendChild(dateInput);
}

//Falta el predeterminado en editar prioridad
function editPriority() {
	const selectPriority = document.createElement("select");
	let memory;
	if(document.querySelector("#editPriority").textContent.slice(10) === "Low") memory = 2
	else if(document.querySelector("#editPriority").textContent.slice(10) === "High") memory = 0
	else memory = 1;
	selectPriority.setAttribute("id", "domEditPriority");
	//console.log(document.querySelector("#editPriority").textContent.slice(10))
	selectPriority.setAttribute("selectedIndex", memory) ;
	todoDisplay.appendChild(selectPriority);
	priorityArray = ["High", "Normal", "Low"];
	for (item of priorityArray) {
		let priorityOptions = document.createElement("option");
		priorityOptions.text = item;
		selectPriority.add(priorityOptions);
	}
}

function editTodoBtnOk() {
		while (btnTodoDisplay.firstChild) {
		btnTodoDisplay.removeChild(btnTodoDisplay.firstChild);
	}
	var memory = [];
	var memoryIndex = 0;
	const btnOk = document.createElement("button");
	btnOk.classList.add(
		"bg-blue-500",
		"hover:bg-blue-700",
		"text-white",
		"font-bold",
		"py-2",
		"px-4",
		"rounded"
	);
	const btnCancelEdit = document.createElement("button");
	btnCancelEdit.classList.add(
		"bg-red-500",
		"hover:bg-red-700",
		"text-white",
		"font-bold",
		"py-2",
		"px-4",
		"rounded"
	);
	var searchTitle = document.querySelector("#editTitle").textContent;

	var auxProject = document
		.querySelector("#editProject")
		.textContent.slice(9);

	btnOk.setAttribute = ("id", "editTodobtnOk");
	btnOk.textContent = "Done!";

	btnCancelEdit.textContent = "Cancel";
	//Acomodar esto!!!!
	let projectIndex = 0;
	for (i = 0; i < projectList.length; i++) {
		if (projectList[i].name == auxProject) {
			projectIndex = i;
		}
	}
	for (let j = 0; j < projectList[projectIndex].todosArray.length; j++) {
		if (projectList[projectIndex].todosArray[j].title === searchTitle) {
			console.log(projectIndex);
			//console.log(projectList[projectIndex].todosArray[j]);
			memory.push(projectList[projectIndex].todosArray[j]);
			memoryIndex = j;
			console.log(memoryIndex);
			projectList[projectIndex].todosArray.splice(j, 1);
		}
	}

	btnTodoDisplay.appendChild(btnOk);
	btnTodoDisplay.appendChild(btnCancelEdit);
	btnOk.addEventListener("click", function () {
		let title = document.querySelector("#domEditTitle").value;
		let description = document.querySelector("#domEditDescription").value;
		let project = document.querySelector("#domEditProject").selectedIndex;
		let dueDate = document.querySelector("#domEditDate").value;
		let priority = document.querySelector("#domEditPriority").value;
		let todoNew = new Todo(title, description, dueDate, priority, project);
		render();
		cleanTodoDisplay();
	});
	btnCancelEdit.addEventListener('click', function(){
		projectList[projectIndex].todosArray.splice(memoryIndex, 0, memory.pop())
		render();
		cleanTodoDisplay();
	})
}

//Limpia TodoDisplay al pulsar Edit
function editCleanTodoDisplay() {
	for (i = 4; i > -1; i--) {
		todoDisplay.removeChild(todoDisplay.childNodes[i]);
	}
}

const projectList = [];
const content = document.querySelector("#content");
const btnCreateProject = document.querySelector("#createProject");
const btnCreateTodo = document.querySelector("#createTodo");
const createContent = document.querySelector("#createContent");
const todoDisplay = document.querySelector("#todoDisplay");

function cleanContent() {
	for (i = content.childNodes.length - 1; i > 2; i--) {
		content.removeChild(content.childNodes[i]);
	}
}
//Muestra los proyectos y todos
function render() {
	cleanContent();
	for (i = 0; i < projectList.length; i++) {
		const ul = document.createElement("ul");
		ul.textContent = projectList[i].name;
		ul.classList.add("text-xl", "p-4", "font-bold", "border", "border-black", "w-64", "text-center");
		content.appendChild(ul);
		for (todos of projectList[i].todosArray) {
			const li = document.createElement("li");
			li.classList.add("todo", "text-base", "font-medium", "text-left");
			console.log(todos.status);
			if (todos.status === true) li.classList.add("line-through");
			if(todos.priority === 'High') li.classList.add("text-red-600")
			else if(todos.priority === 'Low') li.classList.add("text-green-600")
			else li.classList.add("text-yellow-600");
			li.setAttribute("data-project", i);
			li.textContent = todos.title;
			li.addEventListener("click", function (e) {
				let searchTitle = e.target.textContent;
				let projectIndex = e.target.getAttribute("data-project");
				for (let todos of projectList[projectIndex].todosArray) {
					if (todos.title == searchTitle) {
						cleanTodoDisplay();
						//crear contenido en todoDisplay
						let btnFinishedTodo = document.createElement("button");
						btnFinishedTodo.setAttribute("id", "btnFinishedTodo");
						btnFinishedTodo.textContent = "Finished!";
						btnFinishedTodo.classList.add(
							"bg-green-500",
							"hover:bg-green-700",
							"text-white",
							"font-bold",
							"py-2",
							"px-4",
							"rounded"
							
						);
						let btnEditTodo = document.createElement("button");
						btnEditTodo.setAttribute("id", "btnEditTodo");
						btnEditTodo.textContent = "Edit";
						btnEditTodo.classList.add(
							"bg-blue-500",
							"hover:bg-blue-700",
							"text-white",
							"font-bold",
							"py-2",
							"px-4",
							"rounded"
							
						);
						let btnDeleteTodo = document.createElement("button");
						btnDeleteTodo.setAttribute("id", "btnDeleteTodo");
						btnDeleteTodo.textContent = "Delete";
						btnDeleteTodo.classList.add(
							"bg-red-500",
							"hover:bg-red-700",
							"text-white",
							"font-bold",
							"py-2",
							"px-4",
							"rounded"
					
						);
						let showTitle = document.createElement("h3");
						showTitle.setAttribute("id", "editTitle");
						showTitle.textContent = todos.title;
						let showProject = document.createElement("p");
						showProject.setAttribute("id", "editProject");
						showProject.textContent =
							"Project: " + projectList[projectIndex].name;
						let showDescription = document.createElement("p");
						showDescription.setAttribute("id", "editDescription");
						showDescription.textContent =
							"Description: " + todos.description;
						let showDueDate = document.createElement("p");
						showDueDate.setAttribute("id", "editDueDate");
						showDueDate.textContent = "DueDate: " + todos.dueDate;
						let showPriority = document.createElement("p");
						showPriority.setAttribute("id", "editPriority");
						showPriority.textContent =
							"Priority: " + todos.priority;
						todoDisplay.appendChild(showTitle);
						btnTodoDisplay.appendChild(btnFinishedTodo);
						btnTodoDisplay.appendChild(btnEditTodo);
						btnTodoDisplay.appendChild(btnDeleteTodo);
						todoDisplay.appendChild(showProject);
						todoDisplay.appendChild(showDescription);
						todoDisplay.appendChild(showDueDate);
						todoDisplay.appendChild(showPriority);
						assignBtnEditTodo();
						assignBtnFinishedTodo();
						assignBtnDeleteTodo();
					}
				}
			});
			ul.appendChild(li);
		}
	}
}
//Limpia TodoDisplay
function cleanTodoDisplay() {
	while (btnTodoDisplay.firstChild) {
		btnTodoDisplay.removeChild(btnTodoDisplay.firstChild);
	}
	for (i = todoDisplay.childNodes.length - 1; i > -1; i--) {
		todoDisplay.removeChild(todoDisplay.childNodes[i]);
	}
}

//Projecto predeterminado
projectList.push(new Project("Default"));

//Prueba
let now1 = new Todo("Prueba 1", "Es una prueba", "2020-10-10", "High", 0);
let now2 = new Todo("Prueba 2", "Es una prueba", "2021-11-10", "Medium", 0);
let now3 = new Todo("Prueba 3", "Es una prueba", "2023-10-13", "Low", 0);

render();

btnCreateProject.addEventListener("click", createProject);
btnCreateTodo.addEventListener("click", createTodo);

function searchTodo() {
	for (let todos of projectList[0].todosArray) {
		if (todos.title == content.childNodes[4].textContent) {
			console.log(todos);
		}
	}
}
function showTodo() {
	let searchTitle = e.target.textContent;
	let projectIndex = e.target.getAttribute("data-project");
	for (let todos of projectList[projectIndex].todosArray) {
		if (todos.title == searchTitle) {
			console.log(todos);
		}
	}
}
