import { secondsToMinutes } from "date-fns";
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
    }

    static loadTasks(projectName) {
        Storage.getTodoList()
            .getProject(projectName)
            .getTasks()
            .forEach((task) => this.createTask(task.name, task.desc, task.dueDate));
    }
    static createProject(name) {
        const ul = document.querySelector('#project-list');
        ul.innerHTML += `<button class="project" data-project-button>
            <li>${name}</li>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
            </svg>
        </button>`
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
    }

    static loadProjectContent(projectName) {
        const main = document.querySelector('main');
        main.innerHTML = `<h2>${projectName}</h2>`
        this.loadTasks(projectName);
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

    static handleProjectButton(e) {
        const projectName = this.children[0].textContent;

        Interface.openProject(projectName, this);
        // console.log(projectName);
    }





    static toggleForm(element, button, cancelButton) {
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
        this.toggleForm(projectForm, addProject, cancelButton);


        return content.appendChild(aside);
    }
    static createMain() {
        const content = document.querySelector('#content');
        const main = document.createElement('main');

        // Project Title
        // const h2 = document.createElement('h2');
        // h2.innerText = 'Project 1';
        // main.appendChild(h2);

        // List Items
        const listGrid = document.createElement('section');
        listGrid.classList.add('list-grid');

        // const article = document.createElement('article');

        // const left = document.createElement('div');
        // left.classList.add('left');

        // const title = document.createElement('h3');
        // title.classList.add('title');
        // title.innerText = 'Title';

        // const desc = document.createElement('p');
        // desc.classList.add('desc');
        // desc.innerText = 'Description';

        // const right = document.createElement('div');
        // right.classList.add('right');

        // const date = document.createElement('p');
        // date.classList.add('date');
        // date.innerText = 'No Date';

        // const svg = document.createElement('div');
        // svg.classList.add('delete-container');
        // svg.innerHTML = `<svg class="delete" style="width:24px;height:24px" viewBox="0 0 24 24">
        // <path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
        // </svg>`;

        main.appendChild(listGrid);
        // listGrid.appendChild(article);
        // article.appendChild(left);
        // left.appendChild(title);
        // left.appendChild(desc);
        // article.appendChild(right);
        // right.appendChild(date);
        // article.appendChild(svg);

        // New Item Form
        const inputForm = document.createElement('section');
        inputForm.classList.add('inputForm');
        inputForm.classList.add('hide');

        const top = document.createElement('div');
        top.classList.add('top');

        const inputTitle = document.createElement('input');
        const titleAttributes = {
            type: 'text',
            name: 'inputTitle',
            id: 'inputTitle',
            placeholder: 'Title',
        };
        this.setAttributes(inputTitle, titleAttributes);

        const inputDate = document.createElement('input');
        const dateAttributes = {
            type: 'date',
            name: 'inputDate',
            id: 'inputDate',
        };
        this.setAttributes(inputDate, dateAttributes);

        const inputDesc = document.createElement('textarea');
        const descAttributes = {
            name: 'inputDesc',
            id: 'inputDesc',
            rows: '10',
            placeholder: 'Description',
        };
        this.setAttributes(inputDesc, descAttributes);

        const bottom = document.createElement('div');
        bottom.classList.add('bottom');

        const addList = document.createElement('button');
        addList.classList.add('add');
        addList.setAttribute('id', 'addList');
        addList.innerText = "Add";

        const cancelList = document.createElement('button');
        cancelList.classList.add('cancel');
        cancelList.setAttribute('id', 'cancelList');
        cancelList.innerText = "Cancel";

        main.appendChild(inputForm);
        inputForm.appendChild(top);
        top.appendChild(inputTitle);
        top.appendChild(inputDate);
        inputForm.appendChild(inputDesc);
        inputForm.appendChild(bottom);
        bottom.appendChild(addList);
        bottom.appendChild(cancelList);

        // Form Toggle
        const newItem = document.createElement('button');
        newItem.classList.add('newItem');
        newItem.innerText = '+ New Item';
        main.appendChild(newItem);

        this.toggleForm(inputForm, newItem, cancelList);


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
        // this.loadTasks();

    }
}