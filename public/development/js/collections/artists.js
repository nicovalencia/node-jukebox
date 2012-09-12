(function(window, $) {

  var Artists = Backbone.Collection.extend({

    url: '/songs',

    model: app.BB.Artist,
    
    initialize: function(models) {
      _.each(models, function(item, i) {
        var artist = new app.BB.Artist(null, item);
        app.artists.add(artist);
      });
    },

    parse: function(resp) {
      var artists = [];
      _.each(resp.children, function(item, i) {
        if ( item.type !== "folder" ) return false;
        artists.push(item);
      });
      return artists;
    }

  });

  window.app.BB.Artists = Artists;

})(this, jQuery);
