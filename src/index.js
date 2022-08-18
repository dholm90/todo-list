import './style.css';
import Init from './modules/init.js';
import Project from './modules/projects.js';
import Todo from './modules/todos.js';
import Task from './modules/task.js';

const projects = new Project('pro 1');
const task = new Task('title', 'desc', 'date', 'high');
projects.addTask(task);
console.log(projects)
Init();

