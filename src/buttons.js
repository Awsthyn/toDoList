import { projectList, content, btnCreateProject, btnCreateTodo, createContent, todoDisplay } from "./constants.js";
import { createProject } from "./create-project.js";
import { createTodo } from "./create-to-do.js";
import { editToDo } from "./edit-to-do.js";
import { cleanContent, render, cleanTodoDisplay } from "./render.js";

export const assignBtnCreate = function(){
btnCreateProject.addEventListener("click", createProject);
btnCreateTodo.addEventListener("click", createTodo);
}

export function assignBtnFinishedTodo() {
	btnFinishedTodo.addEventListener("click", function () {
		let searchTitle = document.querySelector("#editTitle").textContent;
		let auxProject = document
			.querySelector("#editProject")
			.textContent.slice(9);
		let projectIndex = 0;
		for (let i = 0; i < projectList.length; i++) {
			if (projectList[i].name == auxProject) {
				projectIndex = i;
			}
		}
		for (let j = 0; j < projectList[projectIndex].todosArray.length; j++) {
			if (projectList[projectIndex].todosArray[j].title === searchTitle) {
				projectList[projectIndex].todosArray[j].status = true;
			}
		}
		render();
	});
}
export function assignBtnDeleteTodo() {
	btnDeleteTodo.addEventListener("click", function () {
		var searchTitle = document.querySelector("#editTitle").textContent;
		var auxProject = document
			.querySelector("#editProject")
			.textContent.slice(9);
		let projectIndex = 0;
		for (let i = 0; i < projectList.length; i++) {
			if (projectList[i].name == auxProject) {
				projectIndex = i;
			}
		}
		for (let j = 0; j < projectList[projectIndex].todosArray.length; j++) {
			if (projectList[projectIndex].todosArray[j].title === searchTitle) {
				projectList[projectIndex].todosArray.splice(j, 1);
			}
		}
		render();
		cleanTodoDisplay();
	});
}

export const assignBtnEditToDo = function() {
	const btnEditToDo = document.getElementById('btnEditToDo')
	btnEditToDo.addEventListener("click", editToDo);
}
