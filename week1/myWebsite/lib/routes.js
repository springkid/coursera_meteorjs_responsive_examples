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
Router.route('/projects', function () {
  this.render('projects');
});
Router.route('/news', function () {
  this.render('news');
  console.log('Rendering news');
});
