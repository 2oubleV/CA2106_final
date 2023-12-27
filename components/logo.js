class Logo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <script src="scripts/main.js"></script>
      <div class="logo">
        <img src="assets/logo.png" alt="DCUFlix Logo" class="logo" onclick="redirect('index.html')">
      </div>
      <style>
        .logo {
          position: absolute;
          top: 0.7rem;
          left: 1.2rem;
          width: 10rem;
          height: 3rem;
          z-index: 1;
          cursor: pointer;
        }
      </style>
    `;
  }
}

customElements.define('logo-component', Logo);