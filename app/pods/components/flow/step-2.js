import Component from '@ember/component';

export default Component.extend({
  classNames: 'carousel',

  photos: null, // passed in

  currentSlide: 1,

  actions: {
    moveRight() {
      this.incrementProperty('currentSlide');

      this.set('transform', +50);
    },

    moveLeft() {
      this.decrementProperty('currentSlide');

      this.set('transform', -50);
    },

  }

});
