import {
	projectList,
	content,
	btnCreateProject,
	btnCreateTodo,
	createContent,
	todoDisplay,
} from "./constants.js";
import { cleanContent, render, cleanTodoDisplay } from "./render.js";
import { Project, Todo } from "./constructors.js";

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
	for (let option of projectList) {
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
	if (document.querySelector("#editPriority").textContent.slice(10) === "Low")
		memory = 2;
	else if (
		document.querySelector("#editPriority").textContent.slice(10) === "High"
	)
		memory = 0;
	else memory = 1;
	selectPriority.setAttribute("id", "domEditPriority");
	//console.log(document.querySelector("#editPriority").textContent.slice(10))
	selectPriority.setAttribute("selectedIndex", memory);
	todoDisplay.appendChild(selectPriority);
	const priorityArray = ["High", "Normal", "Low"];
	for (let item of priorityArray) {
		let priorityOptions = document.createElement("option");
		priorityOptions.text = item;
		selectPriority.add(priorityOptions);
	}
}

function editTodoBtnOk() {
	const btnTodoDisplay = document.getElementById("btnTodoDisplay");
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
	for (let i = 0; i < projectList.length; i++) {
		if (projectList[i].name == auxProject) {
			projectIndex = i;
		}
	}
	for (let j = 0; j < projectList[projectIndex].todosArray.length; j++) {
		if (projectList[projectIndex].todosArray[j].title === searchTitle) {
			memory.push(projectList[projectIndex].todosArray[j]);
			memoryIndex = j;
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
	btnCancelEdit.addEventListener("click", function () {
		projectList[projectIndex].todosArray.splice(
			memoryIndex,
			0,
			memory.pop()
		);
		render();
		cleanTodoDisplay();
	});
}
//Limpia TodoDisplay al pulsar Edit
function editCleanTodoDisplay() {
	for (let i = 4; i > -1; i--) {
		todoDisplay.removeChild(todoDisplay.childNodes[i]);
	}
}
export function editToDo() {
	editTitle();
	editProject();
	editDescription();
	editDate();
	editPriority();
	editTodoBtnOk();
	editCleanTodoDisplay();
}
