(function(window, $) {

  var Artist = Backbone.Model.extend({

    initialize: function(attr) {
      this.albums = new app.BB.Albums();
      if ( attr.children ) this.createAlbums(attr.children);
    },

    createAlbums: function(albums) {
      var _this = this;
      _.each(albums, function(item, i) {
        if ( item.type !== "folder" ) return false;
        _this.albums.add(item);
      });
    }

  });

  window.app.BB.Artist = Artist;

})(this, jQuery);
