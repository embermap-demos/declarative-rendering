import Component from '@ember/component';

export default Component.extend({
  classNames: 'carousel',

  photos: null, // passed in

  actions: {
    moveRight() {
      this.set('transform', +50);
    },

    moveLeft() {
      this.set('transform', -50);
    },

  }

});
