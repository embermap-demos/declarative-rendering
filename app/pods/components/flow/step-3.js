import Component from '@ember/component';

export default Component.extend({
  classNames: 'carousel',

  photos: null, // passed in

  currentSlide: 1,

  didInsertElement() {
    this._super(...arguments);

    let offset = this._getOffset(this.get('currentSlide'));
    this.set('.carousel-viewport', offset);
  },

  actions: {
    moveRight() {
      this.incrementProperty('currentSlide');

      this.set('.carousel-viewport', +50);
    },

    moveLeft() {
      this.decrementProperty('currentSlide');

      this.set('.carousel-viewport', -50);
    },

  }

});
