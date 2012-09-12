(function(window, $) {

  var app = {};

  app.BB = {};

  app.views = {};

  app.init = function() {
    app.artists = new app.BB.Artists();
    var def = app.artists.fetch();

    app.views.home_index = new app.BB.HomeIndex({ artists_def: def });
  };

  window.app = app;

  $(document).ready(app.init);

})(this, jQuery);
