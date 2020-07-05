

import { projectList, content, btnCreateProject, btnCreateTodo, createContent, todoDisplay } from "./constants.js";
import { assignBtnCreate, assignBtnFinishedTodo, assignBtnDeleteTodo, assignBtnEditToDo } from "./buttons.js"
import { Project, Todo } from "./constructors.js";
import { createProject } from "./create-project.js";
import { createTodo } from "./create-to-do.js";
import { editToDo } from "./edit-to-do.js";
import { cleanContent, render, cleanTodoDisplay } from "./render.js";

//Proyecto predeterminado
projectList.push(new Project("Default"));

//Prueba
let now1 = new Todo("Prueba 1", "Es una prueba", "2020-10-10", "High", 0);
let now2 = new Todo("Prueba 2", "Es una prueba", "2021-11-10", "Medium", 0);
let now3 = new Todo("Prueba 3", "Es una prueba", "2023-10-13", "Low", 0);

render();
assignBtnCreate();
