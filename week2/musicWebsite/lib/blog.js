Blog.config({
  title: "My Fav Music Website",
  rss: {
    title: 'My Fav Music',
    description: 'The place where your favourite music is'
  },
  excerptFunction: function(body) {
    return body.split('.')[0] + '.';
  },
  pageSize: 10
});
