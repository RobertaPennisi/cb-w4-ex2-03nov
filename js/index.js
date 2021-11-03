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
console.log(elements)
const content = elements.join('');
container.innerHTML = content;
}); //qui finisce la funzione render

document.addEventListener('DOMContentLoaded', () => {
    const list = q('ul');

    render(list, data);

});