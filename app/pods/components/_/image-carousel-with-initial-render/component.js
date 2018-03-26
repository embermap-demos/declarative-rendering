import Component from '@ember/component';

export default Component.extend({

  photos: null, // [] passed in
  
  didInsertElement() {
    this._super(...arguments);

    this.$('img').eq(0).on('load', () => {
      this._selectSlide(0);
      this.set('hasRendered', true);
    });
  },

  actions: {
    selectSlide(index) {
      this._selectSlide(index);
    }
  },

  _selectSlide(index) {
    let container = this.$('[data-carousel]');
    let slide = this.$('[data-carousel-image] img').eq(index);
    let offset = (container.width() - slide.width()) / 2;
    let current = container.css('transform').replace(/[^0-9\-.,]/g, '').split(',')[4] || 0;
    let left = slide.offset().left;

    let shifted = current - left + offset;

    this.$('[data-carousel]').css('transform', `translate(${shifted}px)`);
  }

});
