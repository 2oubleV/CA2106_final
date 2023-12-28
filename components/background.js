class Background extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <img src="assets/home-background.jpg" alt="background image">
      <div class="filter"></div>
      <style>
          img {
            position: absolute;
            overflow: hidden;
            object-fit: cover;
            height: 100%;
            width: 100%;
            z-index: -2;
        }

        .filter {
            position: absolute;
            width: 100%;
            height: 100dvh;
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
            z-index: -1;
        }
      </style>
    `;
  }
}

customElements.define('background-component', Background);