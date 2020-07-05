import {
	projectList,
	content,
	btnCreateProject,
	btnCreateTodo,
	createContent,
	todoDisplay,
} from "./constants.js";
import { Project, Todo } from "./constructors.js";
import { cleanContent, render, cleanTodoDisplay } from "./render.js";

export function createProject() {
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
