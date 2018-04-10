import Component from '@ember/component';

export default Component.extend({
  classNames: 'carousel',

  // State
  photos: null, // passed in
  currentSlide: 1,

  actions: {
    moveRight() {
      if (this.get('currentSlide') < this.get('photos.length')) {
        this.incrementProperty('currentSlide');

        let shifted = (this.get('currentSlide') - 1) * -62.5;
        this.$('.carousel-viewport').css('transform', `translate(${shifted}%)`);
      }
    },

    moveLeft() {
      if (this.get('currentSlide') > 1) {
        this.decrementProperty('currentSlide');

        let shifted = (this.get('currentSlide') - 1) * -62.5;
        this.$('.carousel-viewport').css('transform', `translate(${shifted}%)`);
      }
    }
  }

});
