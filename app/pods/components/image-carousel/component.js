import Component from '@ember/component';

export default Component.extend({
  classNames: 'carousel',

  // State
  photos: null, // passed in
  currentSlide: 1,

  actions: {
    moveRight() {
      this.incrementProperty('currentSlide');

      let container = this.$('.carousel-viewport');
      // Get the current transform percentage
      let current = +(container.css('transform').replace(/[^0-9\-.,]/g, '').split(',')[4]) / 1280 * 100 || 0;
      // Add the slide (width + margin)
      let shifted = current - 62.5;

      container.css('transform', `translate(${shifted}%)`);
    },

    moveLeft() {
      this.decrementProperty('currentSlide');

      let container = this.$('.carousel-viewport');
      let current = +container.css('transform').replace(/[^0-9\-.,]/g, '').split(',')[4] / 1280 * 100 || 0;
      let shifted = current + 62.5;

      container.css('transform', `translate(${shifted}%)`);
    }
  }

});
