Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home', {
  	to: 'main' 
  });
  this.render('header', {
  	to: 'navbar'
  });
});

Router.route('/about', function () {
  this.render('about');
  console.log('Rendering about');
});

Router.route('/reviews', function () {
  this.render('reviews');
  console.log('Rendering reviews');
});
