(function(window, $) {

  var Album = Backbone.Model.extend({

    initialize: function(attr) {
      this.songs = new app.BB.Songs();
      if ( attr.children ) this.createSongs(attr.children);
    },

    createSongs: function(songs) {
      var _this = this;
      _.each(songs, function(item, i) {
        if ( item.type !== "file" ) return false;
        _this.songs.add(item);
      });
    }

  });

  window.app.BB.Album = Album;

})(this, jQuery);
