export class MyNav extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'data'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const title = this.getAttribute('title') || '';
        const data = this.getAttribute('data') || '';

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/MyNav/style.css"> 
            <div class="nav_container">
                <div class="nav_title">${title}</div>
                <p class="nav_name">${data}</p>
            </div>
        `;
    }
}

window.customElements.define('my-nav', MyNav);
