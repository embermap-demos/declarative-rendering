import Component from '@ember/component';

export default Component.extend({
  classNames: 'carousel',

  photos: null, // passed in

  currentSlide: 1,

  actions: {
    moveRight() {
      let container = this.$('.carousel-viewport');
      let current = container.css('transform').replace(/[^0-9\-.,]/g, '').split(',')[4] || 0;
      let shifted = +current - 1056;

      container.css('transform', `translate(${shifted}px)`);
    },

    moveLeft() {
      let container = this.$('.carousel-viewport');
      let current = container.css('transform').replace(/[^0-9\-.,]/g, '').split(',')[4] || 0;
      let shifted = +current + 1056;

      container.css('transform', `translate(${shifted}px)`);
    }
  },

  renderCarousel() {
    let index = this.get('index');
    let offset = this.calculateOffset(index);

    this.set('carouse-viewport', offset);
  }

});
