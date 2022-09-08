import { secondsToMinutes } from "date-fns";
import Project from "./projects";
import Storage from "./storage";
import Task from "./task";
import TodoList from "./todos";


export default class Interface {

    static loadProjects() {
        Storage.getTodoList()
            .getProjects()
            .forEach((project) => {
                this.createProject(project.name);
            })
        // Interface.createProject(project.name);
    }

    static loadTasks(projectName) {
        Storage.getTodoList()
            .getProject(projectName)
            .getTasks()
            .forEach((task) => Interface.createTask(task.name, task.desc, task.dueDate));

        Interface.initAddTaskButton();

    }

    static createProject(name) {
        const ul = document.querySelector('#project-list');
        ul.innerHTML += `<button type='button' class="project">
            <li>${name}</li>
            <svg class="delete-project" style="width:24px;height:24px" viewBox="0 0 24 24">
                
            </svg>
        </button>`
        Interface.initProjectButtons();
    }

    static createTask(name, desc, dueDate) {
        const listGrid = document.querySelector('.list-grid');
        listGrid.innerHTML += `<article>
        <div class="left">
            <h3 class="title">${name}</h3>
            <p class="desc">${desc}</p>
        </div>
        <div class="right">
            <p class="date">${dueDate}</p>
        </div>
        <svg class="delete" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
        </svg>
    </article>`
        Interface.initTaskButtons();


    }

    static clear() {
        this.clearProjects();
        this.clearTasks();
    }

    static clearProjects() {
        const projectsList = document.getElementById('project-list');
        projectsList.textContent = '';
    }

    static clearTasks() {
        const tasksList = document.querySelector('.list-grid');
        tasksList.textContent = ''
    }

    static clearProjectContent() {
        const projectContent = document.querySelector('main');
        projectContent.textContent = '';
    }

    static loadProjectContent(projectName) {
        const main = document.querySelector('main');
        main.innerHTML = `<h2 class="projectHeader">${projectName}</h2>`;
        main.innerHTML += `<section class="list-grid"></section>`
        main.innerHTML += `<section class="inputForm">
        <div class="top">
            <input type="text" name="inputTitle" id="inputTitle" placeholder="Title">
            <input type="date" name="inputDate" id="inputDate" >
        </div>
        
        <textarea name="inputDesc" id="inputDesc" rows="10" placeholder="Description"></textarea>
        <div class="bottom">
            <button class="addList" id="addList">Add</button>
            <button class="cancelList" id="cancelList">Cancel</button>
        </div>
    </section>`

        Interface.loadTasks(projectName);



    }

    static addProject() {
        const projectInput = document.querySelector('#newProjectName');
        const projectName = projectInput.value;

        if (projectName === '') {
            alert('Field must not be empty.')
            return
        }

        if (Storage.getTodoList().contains(projectName)) {
            projectInput.value = '';
            alert('Project name already in use.');
            return
        }

        Storage.addProject(new Project(projectName));
        Interface.createProject(projectName);
        projectInput.value = '';

    }


    static initProjectButtons() {
        const projectButtons = document.querySelectorAll('.project');

        projectButtons.forEach((projectButton) => {
            projectButton.addEventListener('click', this.handleProjectButton);
        })
    }


    static openProject(projectName, projectButton) {
        const projectButtons = document.querySelectorAll('.project');
        projectButtons.forEach((button) => button.classList.remove('selected'))
        projectButton.classList.add('selected');
        this.loadProjectContent(projectName);

    }

    static deleteProject(projectName, button) {
        if (button.classList.contains('selected')) {
            Interface.clearProjectContent();
        }
        Storage.deleteProject(projectName);
        Interface.clearProjects();
        Interface.loadProjects();
    }

    static handleProjectButton(e) {
        const projectName = this.children[0].textContent;

        if (e.target.classList.contains('delete-project')) {
            Interface.deleteProject(projectName, this)
            return;
        }

        Interface.openProject(projectName, this);
        // console.log(projectName);
    }

    static initAddTaskButton() {
        const addListButton = document.getElementById('addList');
        const newItem = document.querySelector('.newItem');
        addListButton.addEventListener('click', Interface.addTask);
    }

    static initTaskButtons() {

        const taskButtons = document.querySelectorAll('.delete');

        taskButtons.forEach((taskButton) =>
            taskButton.addEventListener('click', Interface.handleTaskButton)
        )

    }

    static handleTaskButton() {
        Interface.deleteTask(this)

    }

    static deleteTask(taskButton) {
        const projectName = document.querySelector('.projectHeader').textContent;
        const taskName = taskButton.parentNode.children[0].children[0].textContent;

        Storage.deleteTask(projectName, taskName);
        Interface.clearTasks();
        Interface.loadTasks(projectName);
    }

    static addTask() {
        const projectName = document.querySelector('.projectHeader').textContent;
        const taskName = document.getElementById('inputTitle');
        const taskDesc = document.getElementById('inputDesc');
        const taskDate = document.getElementById('inputDate');



        if (taskName.value === '' || taskDesc.value === '' || taskDate.value === '') {
            alert('Fields cannot be empty')
            return
        }

        if (Storage.getTodoList().getProject(projectName).contains(taskName.value)) {
            alert('Task names must be different');
            Interface.resetInput();
            return
        }

        Storage.addTask(projectName, new Task(taskName.value, taskDesc.value, taskDate.value));
        Interface.createTask(taskName.value, taskDesc.value, taskDate.value);
        Interface.resetInput()

    }

    static resetInput() {
        const taskName = document.getElementById('inputTitle');
        const taskDesc = document.getElementById('inputDesc');
        const taskDate = document.getElementById('inputDate');

        taskName.value = '';
        taskDesc.value = '';
        taskDate.value = '';
    }





    // Helper Functions
    static toggleForm(element, button, cancelButton, bool) {
        button.addEventListener('click', () => {
            element.classList.remove('hide');
            button.classList.add('hide');


        })
        cancelButton.addEventListener('click', () => {
            element.classList.add('hide');
            button.classList.remove('hide');


        })

    }
    static setAttributes(element, attributes) {
        Object.keys(attributes).forEach(attr => {
            element.setAttribute(attr, attributes[attr]);
        });
    }

    // Create Content wrapper
    static createContentWrapper() {
        const body = document.querySelector('body');
        const content = document.createElement('div');
        content.setAttribute('id', 'content');
        return body.appendChild(content);

    }
    static createHeader() {
        const content = document.querySelector('#content');
        const header = document.createElement('header');

        // Page Title
        const h1 = document.createElement('h1');
        h1.innerText = "Todo List App";
        header.appendChild(h1);
        return content.appendChild(header);
    }
    static createSidebar() {
        const content = document.querySelector('#content');
        const aside = document.createElement('aside');

        // Sidebar Title
        const h2 = document.createElement('h2');
        h2.innerText = 'Projects';
        aside.appendChild(h2);

        // Project List
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'project-list');
        aside.appendChild(ul);

        // New Project Form
        const projectForm = document.createElement('div');
        const projectName = document.createElement('input');
        const projectButtons = document.createElement('div');
        const addButton = document.createElement('button');
        const cancelButton = document.createElement('button');

        projectForm.classList.add('project-form');
        projectForm.classList.add('hide');

        projectName.setAttribute('type', 'text');
        projectName.setAttribute('name', 'newProjectName');
        projectName.setAttribute('id', 'newProjectName');

        projectButtons.classList.add('projectButtons');
        addButton.addEventListener('click', Interface.addProject);

        addButton.classList.add('add');
        addButton.innerText = 'Add';


        cancelButton.classList.add('cancel');
        cancelButton.innerText = 'Cancel';

        aside.appendChild(projectForm);

        projectForm.appendChild(projectName);
        projectForm.appendChild(projectButtons);
        projectButtons.appendChild(addButton);
        projectButtons.appendChild(cancelButton);

        // Form Toggle
        const addProject = document.createElement('button');
        addProject.classList.add('addProject');
        addProject.innerText = '+ New Project';

        aside.appendChild(addProject);
        this.toggleForm(projectForm, addProject, cancelButton, false);


        return content.appendChild(aside);
    }
    static createMain() {
        const content = document.querySelector('#content');
        const main = document.createElement('main');


        return content.appendChild(main);
    }
    static createFooter() {
        const content = document.querySelector('#content');
        const footer = document.createElement('footer');
        const h4 = document.createElement('h4');
        h4.innerText = 'Copyright Devan Holm';
        footer.appendChild(h4);

        return content.appendChild(footer);

    }
    static loadPage() {
        this.createContentWrapper();
        this.createHeader();
        this.createSidebar();
        this.createMain();
        this.createFooter();
        this.loadProjects();
        this.initProjectButtons();
        this.initTaskButtons();
    }
}