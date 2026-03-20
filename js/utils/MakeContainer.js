export function makeContainer({ element = "div", HeaderSize = "h1", identifier = "__BLANK__"} = {}) {
    const container = document.createElement(element);
    const h1 = document.createElement(HeaderSize);
    h1.textContent = identifier;

    container.appendChild(h1);

    container.style.whiteSpace = 'pre'; //keeps formatting readable
    container.style.fontFamily = 'monospace';

    return container;
}