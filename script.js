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
      priority: priority,
    });
  }
};

function createProject() {
	const projectContainer = document.getElementById('projectContainer');
	const inputProject = document.createElement('input');
	inputProject.setAttribute("type", "text");
	inputProject.placeholder = 'Project name'
	inputProject.classList.add("w-40")
	const btnInputProject = document.createElement('button');
	btnInputProject.textContent = 'Done!'
	btnInputProject.classList.add("bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded", "m-4", "w-40");
	btnInputProject.addEventListener('click', function(){
		projectList.push(new Project(inputProject.value));
		while (projectContainer.firstChild) {
    	projectContainer.removeChild(projectContainer.firstChild);
	}
		render();

	})
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
  selectProject.classList.add("w-40")
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
  btnOk.classList.add("bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded", "m-4", "w-40")
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
      createContentDinamyc.removeChild(createContentDinamyc.childNodes[i]);
    }
    btnCreateTodo.disabled = false;
    render();
  });
}
function inputTitle() {
  const titleInput = document.createElement("input");
  titleInput.defaultValue = "Title";
  titleInput.classList.add("w-40", "text-center")
  titleInput.setAttribute("id", "domInputTitle");
  titleInput.setAttribute("type", "text");
  createContent.appendChild(titleInput);
}

function inputDescription() {
  const descriptionInput = document.createElement("input");
  descriptionInput.defaultValue = "Description";
  descriptionInput.classList.add("w-64", "text-center")
  descriptionInput.setAttribute("id", "domInputDescription");
  descriptionInput.setAttribute("type", "text");
  createContent.appendChild(descriptionInput);
}

function inputDate() {
  const dateInput = document.createElement("input");
  dateInput.classList.add("w-40", "text-center")
  dateInput.setAttribute("id", "domInputDate");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("value", "2020-08-09");
  createContent.appendChild(dateInput);
}

function selectPriority() {
  const selectPriority = document.createElement("select");
  selectPriority.setAttribute("id", "domSelectPriority");
  selectPriority.classList.add("w-40", "text-center")
  createContent.appendChild(selectPriority);
  priorityArray = ["High", "Normal", "Low"];
  for (item of priorityArray) {
    let priorityOptions = document.createElement("option");
    priorityOptions.text = item;
    selectPriority.add(priorityOptions);
  }
}

function assignBtnFinishedTodo(){
	btnFinishedTodo.addEventListener("click",function(){

	})
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
  titleInput.classList.add('text-red-800')
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
  selectPriority.setAttribute("id", "domEditPriority");
  todoDisplay.appendChild(selectPriority);
  priorityArray = ["High", "Normal", "Low"];
  for (item of priorityArray) {
    let priorityOptions = document.createElement("option");
    priorityOptions.text = item;
    selectPriority.add(priorityOptions);
  }
}

function editTodoBtnOk() {
  const btnOk = document.createElement("button");
  btnOk.classList.add("bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded");
  var searchTitle = document.querySelector("#editTitle").textContent;

  var auxProject = document.querySelector("#editProject").textContent.slice(9);

  btnOk.setAttribute = ("id", "editTodobtnOk");
  btnOk.textContent = "Done!";
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

  todoDisplay.appendChild(btnOk);
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
}

//Limpia TodoDisplay al pulsar Edit
function editCleanTodoDisplay() {
  for (i = 5; i > -1; i--) {
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
    const h2 = document.createElement("h2");
    h2.textContent = projectList[i].name;
    h2.classList.add("text-xl", "font-bold")
    content.appendChild(h2);
    for (todos of projectList[i].todosArray) {
      const div = document.createElement("div");
      div.classList.add("todo");
      div.setAttribute("data-project", i);
      div.textContent = todos.title;
      div.addEventListener("click", function (e) {
        let searchTitle = e.target.textContent;
        let projectIndex = e.target.getAttribute("data-project");
        for (let todos of projectList[projectIndex].todosArray) {
          if (todos.title == searchTitle) {
            cleanTodoDisplay();
            //crear contenido en todoDisplay
            let btnFinishedTodo = document.createElement("button");
            btnFinishedTodo.setAttribute('id', 'btnFinishedTodo');
            btnFinishedTodo.textContent = "Finished!"
            btnFinishedTodo.classList.add("bg-green-500", "hover:bg-green-700", "text-white", "font-bold", "py-2", "px-4", "rounded", "m-4");
            let btnEditTodo = document.createElement("button");
            btnEditTodo.setAttribute("id", "btnEditTodo");
            btnEditTodo.textContent = "Edit";
            btnEditTodo.classList.add("bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded", "m-4");
            let showTitle = document.createElement("h3");
            showTitle.setAttribute("id", "editTitle");
            showTitle.textContent = todos.title;
            let showProject = document.createElement("p");
            showProject.setAttribute("id", "editProject");
            showProject.textContent =
              "Project: " + projectList[projectIndex].name;
            let showDescription = document.createElement("p");
            showDescription.setAttribute("id", "editDescription");
            showDescription.textContent = "Description: " + todos.description;
            let showDueDate = document.createElement("p");
            showDueDate.setAttribute("id", "editDueDate");
            showDueDate.textContent = "DueDate: " + todos.dueDate;
            let showPriority = document.createElement("p");
            showPriority.setAttribute("id", "editPriority");
            showPriority.textContent = "Priority: " + todos.priority;
            todoDisplay.appendChild(showTitle);
            todoDisplay.appendChild(btnFinishedTodo);
            todoDisplay.appendChild(btnEditTodo);
            todoDisplay.appendChild(showProject);
            todoDisplay.appendChild(showDescription);
            todoDisplay.appendChild(showDueDate);
            todoDisplay.appendChild(showPriority);
            assignBtnEditTodo();
          }
        }
      });
      content.appendChild(div);
    }
  }
}
//Limpia TodoDisplay
function cleanTodoDisplay() {
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
