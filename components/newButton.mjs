export class NewButton extends HTMLElement {
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
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            .custom-button-style {
                color: white;
                background-color: #007bff;
                border: none;
                padding: 20px 30px;
                border-radius: 5px;
                cursor: pointer;
            }
        `;
        this.shadowRoot.appendChild(styleSheet);
    }
}

window.customElements.define('new-button', NewButton);
