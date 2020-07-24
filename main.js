console.log('asdsadasd');
class FlatCard extends HTMLElement{
    constructor() {

        super();
        this.attachShadow ({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.innerHTML = `<style> h3 { color: coral} </style><h3>${this.getAttribute('name')}</h3>`;

    }
}

window.customElements.define('flat-card', FlatCard);