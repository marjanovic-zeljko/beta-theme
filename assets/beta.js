if (!customElements.get('splide-slider')) {
  customElements.define(
    'splide-slider',
    class SplideSlider extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.initSplide();
      }

      initSplide() {
        // Use dataset attributes for configuration
        new Splide(this, {
          type: this.dataset.type || 'loop',
          perPage: parseInt(this.dataset.perpage) || 1,
          autoplay: this.dataset.autoplay === 'true',
          interval: parseInt(this.dataset.interval) || 5000,
          pauseOnHover: this.dataset.pauseonhover === 'true',
        }).mount();
      }
    }
  );
}
