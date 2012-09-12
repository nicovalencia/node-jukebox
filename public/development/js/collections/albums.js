(function(window, $) {

  var Albums = Backbone.Collection.extend({

    model: app.BB.Album

  });

  window.app.BB.Albums = Albums;

})(this, jQuery);
