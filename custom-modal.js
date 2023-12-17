class CustomModal extends HTMLElement {

    constructor() {

        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // Modal content template

        const template = document.createElement('template');

        template.innerHTML = `
    
    <style>
    
    /* Modal styles */
    
    .modal-overlay {
    
    position: fixed;
    
    top: 0;
    
    left: 0;
    
    width: 100%;
    
    height: 100%;
    
    background-color: rgba(0, 0, 0, 0.5);
    
    display: flex;
    
    justify-content: center;
    
    align-items: center;
    
    }
    
    .modal-content {
    
    background-color: white;
    
    padding: 20px;
    
    border-radius: 8px;
    
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    
    }
    
    /* Additional styles can be added here */
    
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

        // Close modal button logic

        shadow.getElementById('closeBtn').addEventListener('click', () => {

            this.closeModal();

        });

    }

    connectedCallback() {

        // Logic to hide the modal when connected to DOM

        this.style.display = 'none'; // Initially hides the modal

    }

    openModal() {

        this.style.display = 'block'; // Display the modal

    }

    closeModal() {

        this.style.display = 'none'; // Hide the modal

    }

}

customElements.define('custom-modal', CustomModal);

// Initialization function

function initializeModal() {

    const openModalBtn = document.createElement('button');

    openModalBtn.textContent = 'Open Modal';

    const myModal = document.getElementById('myModal');

    openModalBtn.addEventListener('click', () => {

        myModal.openModal();

    });

    document.body.appendChild(openModalBtn);

}

// Call the initialization function when the DOM is loaded

document.addEventListener('DOMContentLoaded', initializeModal);