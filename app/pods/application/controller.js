import Controller from '@ember/controller';

export default Controller.extend({

  queryParams: [ 'currentSlide' ],
  currentSlide: 1,

  init() {
    this._super(...arguments);

    this.set('photos', [
      '/images/photo1.jpg',
      '/images/photo2.jpg',
      '/images/photo3.jpg',
      '/images/photo4.jpg',
      '/images/photo5.jpg',
      '/images/photo6.jpg',
      '/images/photo7.jpg'
    ]);
  }

});
