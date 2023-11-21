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
            <style>
                .nav_container {
                    display: flex;
                    flex-direction: column;
                }
                .nav_title {
                    font-size: 20px;
                    font-weight: bold;
                }
                .nav_name {
                    font-size: 16px;
                    font-weight: normal;
                }
            </style>
            <div class="nav_container">
                <div class="nav_title">${title}</div>
                <p class="nav_name">${data}</p>
            </div>
        `;
    }
}

window.customElements.define('my-nav', MyNav);



