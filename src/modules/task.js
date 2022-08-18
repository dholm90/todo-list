export default class Task {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setDesc(desc) {
        this.desc = desc;
    }
    getDesc() {
        return this.desc;
    }
    setDate(dueDate) {
        this.dueDate = dueDate;
    }
    getDate() {
        return this.dueDate;
    }
    setPriority(priority) {
        this.priority = priority;
    }
    getPriority() {
        return this.priority;
    }

    getDateFormatted() {
        const day = this.dueDate.split('/')[0]
        const month = this.dueDate.split('/')[1]
        const year = this.dueDate.split('/')[2]
        return `${month}/${day}/${year}`
    }
}