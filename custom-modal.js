class CustomModal extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
    <style>
      /* Modal styles */
      /* ... Your modal styles ... */
    </style>
    <div class="modal-overlay">
    <div class="modal-content">
    <!-- Modal content -->
    <slot></slot>
    <button id="closeBtn">Close</button>
    </div>
    </div>
    `;
        const content = template.content.cloneNode(true);
        shadow.appendChild(content);
        shadow.getElementById('closeBtn').addEventListener('click', () => {
            this.closeModal();
        });
    }
    // ... Rest of the methods as per your provided code
}
