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
function selectProject() {
	const selectProject = document.createElement("select");
	selectProject.classList.add("w-40");
	selectProject.setAttribute("id", "domSelectProject");
	createContent.appendChild(selectProject);
	for (let option of projectList) {
		let projectChoose = document.createElement("option");
		projectChoose.text = option.name;
		selectProject.add(projectChoose);
	}
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
	const priorityArray = ["High", "Normal", "Low"];
	for (let item of priorityArray) {
		let priorityOptions = document.createElement("option");
		priorityOptions.text = item;
		selectPriority.add(priorityOptions);
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
		for (let i = createContentDinamyc.childNodes.length - 1; i > -1; i--) {
			createContentDinamyc.removeChild(
				createContentDinamyc.childNodes[i]
			);
		}
		btnCreateTodo.disabled = false;
		render();
	});
}

export function createTodo() {
	inputTitle();
	inputDescription();
	selectProject();
	inputDate();
	selectPriority();
	TodoBtnOk();
	btnCreateTodo.disabled = true;
}
