export class NewButton extends HTMLElement {
    static style = `
        .custom-button-style {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
        }
    `;
    static get observedAttributes() {
        return ['text'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.styling();
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'text') {
            this.updateButtonText(newValue);
        }
    }

    updateButtonText(text) {
        if (!this.button) {
            this.render();
        }
        this.button.textContent = text;
    }

    render() {
        if (!this.button) {
            this.button = document.createElement('button');
            this.button.className = "custom-button-style";
            this.shadowRoot.appendChild(this.button);
        }
        this.button.textContent = this.getAttribute('text') || 'Default Text';
    }

    styling() {
        this.styleSheet = document.createElement('style');
        this.styleSheet.textContent = this.constructor.style;
        this.shadowRoot.appendChild(this.styleSheet);
    }
}

window.customElements.define('new-button', NewButton);
