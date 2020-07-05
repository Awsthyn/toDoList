import { projectList, content, btnCreateProject, btnCreateTodo, createContent, todoDisplay } from "./constants.js";
import { assignBtnCreate, assignBtnFinishedTodo, assignBtnDeleteTodo, assignBtnEditToDo } from "./buttons.js"
//Limpia el container #content
export function cleanContent() {
	for (let i = content.childNodes.length - 1; i > 2; i--) {
		content.removeChild(content.childNodes[i]);
	}
}

//Muestra los proyectos y todos
export function render() {
	cleanContent();
	for (let i = 0; i < projectList.length; i++) {
		const ul = document.createElement("ul");
		ul.textContent = projectList[i].name;
		ul.classList.add("text-xl", "p-4", "font-bold", "border", "border-black", "w-64", "text-center");
		content.appendChild(ul);
		for (let todos of projectList[i].todosArray) {
			const li = document.createElement("li");
			li.classList.add("todo", "text-base", "font-medium", "text-left");
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
						let btnEditToDo = document.createElement("button");
						btnEditToDo.setAttribute("id", "btnEditToDo");
						btnEditToDo.textContent = "Edit";
						btnEditToDo.classList.add(
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
						btnTodoDisplay.appendChild(btnEditToDo);
						btnTodoDisplay.appendChild(btnDeleteTodo);
						todoDisplay.appendChild(showProject);
						todoDisplay.appendChild(showDescription);
						todoDisplay.appendChild(showDueDate);
						todoDisplay.appendChild(showPriority);
						assignBtnEditToDo();
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
export function cleanTodoDisplay() {
	while (btnTodoDisplay.firstChild) {
		btnTodoDisplay.removeChild(btnTodoDisplay.firstChild);
	}
	for (let i = todoDisplay.childNodes.length - 1; i > -1; i--) {
		todoDisplay.removeChild(todoDisplay.childNodes[i]);
	}
}
