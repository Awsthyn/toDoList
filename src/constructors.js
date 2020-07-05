import { projectList, content, btnCreateProject, btnCreateTodo, createContent, todoDisplay } from "./constants.js";

export const Project = class Project {
	constructor(name) {
		(this.name = name), (this.todosArray = []);
	}
};

export const Todo = class Todo {
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

