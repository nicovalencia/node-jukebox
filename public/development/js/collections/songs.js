(function(window, $) {

  var Songs = Backbone.Collection.extend({

    model: app.BB.Song

  });

  window.app.BB.Songs = Songs;

})(this, jQuery);
