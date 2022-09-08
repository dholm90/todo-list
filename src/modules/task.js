export default class Task {
    constructor(name, desc = 'No Description', dueDate = 'No Date') {
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;

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


    getDateFormatted() {
        const day = this.dueDate.split('/')[0]
        const month = this.dueDate.split('/')[1]
        const year = this.dueDate.split('/')[2]
        return `${month}/${day}/${year}`
    }
}