(function(window, $) {

  var app = {};

  app.BB = {};

  app.init = function() {
    app.artists = new app.BB.Artists();
    app.artists.fetch();
  };

  window.app = app;

  $(document).ready(app.init);

})(this, jQuery);
