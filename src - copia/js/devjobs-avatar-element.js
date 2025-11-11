class PsychoGlitchAvatar extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' }) // Creamos Shadow DOM
  }

  render() {
    // Ahora usamos shadowRoot en lugar de innerHTML
    this.shadowRoot.innerHTML = `
      <style>
        img {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
        }
      </style>

      <img
        src="https://avatars.githubusercontent.com/u/60507236?v=4"
        alt="Avatar de PsychoGlitch"
        class="avatar"
      />
    `
  }

  connectedCallback() {
    this.render()
  }
}
customElements.define('phsycoglitch-avatar', PsychoGlitchAvatar)