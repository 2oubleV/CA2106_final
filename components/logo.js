class Logo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="logo">
        <img src="assets/logo.png" alt="DCUFlix Logo" class="logo">
      </div>
      <style>
        .logo {
          position: absolute;
          top: 0.7rem;
          left: 1.2rem;
          width: 10rem;
        }

        .container {
          
        }
      </style>
    `;
  }
}

customElements.define('logo-component', Logo);