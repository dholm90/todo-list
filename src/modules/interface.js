export default class Interface {


    static createContentWrapper() {
        const body = document.querySelector('body');
        const content = document.createElement('div');
        content.setAttribute('id', 'content');
        return body.appendChild(content);

    }
    static createHeader() {
        const content = document.querySelector('#content');
        const header = document.createElement('header');

        const h1 = document.createElement('h1');
        h1.innerText = "Todo List App";
        header.appendChild(h1);


        return content.appendChild(header);
    }
    static createSidebar() {

    }
    static createListArea() {

    }
    static createFooter() {

    }
    static loadPage() {
        this.createContentWrapper();
        this.createHeader();
        this.createSidebar();
        this.createListArea();
        this.createFooter();
    }
}