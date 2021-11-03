const q = (selector) => document.querySelector(selector);

const render = ((container, items) => {
    const elements = items.map((element, index) =>{
        if (element.completed === true) {
            return `<li>
                        <input type="checkbox" id="title${+ index}" name="title${+ index}" checked>
                        <label for="title${+ index}">${element.title}</label>
                    </li>` 
        } else {
            return `<li>
                        <input type="checkbox" id="title${+ index}" name="title${+ index}">
                        <label for="title${+ index}">${element.title}</label>
                    </li>` 
        }
});
const content = elements.join('');
container.innerHTML = content;
}); //qui finisce la funzione render

const removeItem = ((container, items) => {
    items.addEventListener('click', () => {
        data.pop();
        return container.lastChild.remove();
    });
}); //qui finisce la funzione removeItem

document.addEventListener('DOMContentLoaded', () => {
    const list = q('ul');
    const buttonRemove = q('button');

    render(list, data);
    removeItem(list, buttonRemove);
});



