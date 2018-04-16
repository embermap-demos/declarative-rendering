import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: 'carousel',

  // State
  photos: null, // passed in
  currentSlide: 1,

  actions: {
    moveRight() {
      if (this.get('currentSlide') < this.get('photos.length')) {
        this.incrementProperty('currentSlide');
      }
    },

    moveLeft() {
      if (this.get('currentSlide') > 1) {
        this.decrementProperty('currentSlide');
      }
    }
  },

  transform: computed('currentSlide', function() {
    let shifted = (this.get('currentSlide') - 1) * -62.5;

    return `translate(${shifted}%)`;
  })

});
