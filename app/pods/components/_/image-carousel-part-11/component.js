import Component from '@ember/component';

export default Component.extend({
  classNames: 'carousel',

  photos: null, // passed in

  actions: {
    selectSlide(index) {
      let container = this.$('.carousel-viewport');
      let slide = this.$('.carousel-image').eq(index);
      let offset = (container.width() - slide.width()) / 2;
      let current = container.css('transform').replace(/[^0-9\-.,]/g, '').split(',')[4] || 0;
      let left = slide.offset().left;

      let shifted = current - left + offset;

      this.$('.carousel-viewport').css('transform', `translate(${shifted}px)`);
    }
  }

});
