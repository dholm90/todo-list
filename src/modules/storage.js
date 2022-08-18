import Project from "./projects.js";
import Task from "./task.js";
import TodoList from "./todos.js";

export default class Storage {
    static saveTodoList(data) {
        localStorage.setItem('todoList', JSON.stringify(data));
    }

    static getToDoList() {
        const todoList = Object.assign(
            new TodoList(),
            JSON.parse(localStorage.getItem('todoList'))
        )

        todoList.setProjects(
            todoList
                .getProjects()
                .map((project) => Object.assign(new Project(), project))
        )

        todoList
            .getProjects()
            .forEach((project) =>
                project.setTasks(
                    project.getTasks().map((task) => Object.assign(new Task(), task))
                )
            )
        return todoList;
    }

    static addProject(project) {
        const todoList = Storage.getToDoList();
        todoList.addProject(project);
        Storage.saveTodoList(todoList);
    }

    static deleteProject(projectName) {
        const todoList = Storage.getToDoList();
        todoList.deleteProject(projectName);
        Storage.saveTodoList(todoList);
    }

    static addTask(projectName, task) {
        const todoList = Storage.getToDoList();
        todoList.getProject(projectName).addTask(task);
        Storage.saveTodoList(todoList);
    }

    static deleteTask(projectName, taskName) {
        const todoList = Storage.getToDoList();
        todoList.getProject(projectName).deleteTask(taskName);
        Storage.saveTodoList(todoList);
    }

    static renameTask(projectName, taskName, newTaskName) {
        const todoList = Storage.getToDoList();
        todoList.getProject(projectName).getTask(taskName).setName(newTaskName);
        Storage.saveTodoList(todoList);
    }

    static setTaskDate(projectName, taskName, newDueDate) {
        const todoList = Storage.getToDoList();
        todoList.getProject(projectName).getTask(taskName).setDate(newDueDate)
        Storage.saveTodoList(todoList);
    }

    static setTaskDescription(projectName, taskName, newDescription) {
        const todoList = Storage.getToDoList();
        todoList.getProject(projectName).getTask(taskName).setDesc(newDescription);
        Storage.saveTodoList(todoList);
    }

    static setTaskPriority(projectName, taskName, newPriority) {
        const todoList = Storage.getToDoList();
        todoList.getProject(projectName).getTask(taskName).setPriority(newPriority);
        Storage.saveTodoList(todoList);
    }



}