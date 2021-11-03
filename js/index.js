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

/**
 * la funzione elimina l'ultimo elemento di un contenitore:
 * container è il nodo dove rimuovere l'elemento; 
 * item è ciò che triggera la funzione al click, può essere un bottone o altro; 
 * objects è l'array di oggetti cui si fa riferimento.*/
const removeItem = ((container, item, objects) => {
    item.addEventListener('click', () => {
        objects.pop();
        return container.lastChild.remove();
    });
}); //qui finisce la funzione removeItem

document.addEventListener('DOMContentLoaded', () => {
    const list = q('ul');
    const buttonRemove = q('button');

    render(list, data);
    removeItem(list, buttonRemove, data);
});



