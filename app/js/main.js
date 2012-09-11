(function(window, $) {

  var app = {};

  app.init = function() {
    app.createDirectory();
  };

  app.createDirectory = function() {
    $.ajax({
      url: '/songs',
      dataType: 'json',
      type: 'GET',
      success: app.renderFullDirectory
    });
  };

  app.renderFullDirectory = function(resp) {
    var $directory = $('<ul/>');
    $('body').append($directory);

    $directory.html(app.buildDirectory(resp.children));

    app.createBackboneShit(resp);
  };

  app.buildDirectory = function(items) {
    var $item = $('<li/>');

    _.each(items, function(item, i) {
      var source = $('#hb-' + item.type).html();
      var template = Handlebars.compile(source);

      if ( item.type === "folder" ) {
        var $folder = $('<ul/>');
        $folder.append(app.buildDirectory(item.children));
        $item.append(template(item));
        $item.append($folder);
      } else {
        $item.append(template(item));
      }

    });

    return $item;
  };



  app.BB = {};

  app.BB.Artists = Backbone.Collection.extend({
    model: app.BB.Artist
  });

  app.BB.Artist = Backbone.Model.extend({
    initialize: function(attr, options) {
      this.albums = new app.BB.Albums();
      this.set('name', options.name);
      if ( options.children ) this.createAlbums(options.children);
    },
    createAlbums: function(albums) {
      var _this = this;
      _.each(albums, function(item, i) {
        if ( item.type !== "folder" ) return false;
        var album = new app.BB.Album(null, item);
        _this.albums.add(album);
      });
    }
  });

  app.BB.Albums = Backbone.Collection.extend({
    model: app.BB.Album
  });

  app.BB.Album = Backbone.Model.extend({
    initialize: function(attr, options) {
      this.songs = new app.BB.Songs();
      this.set('name', options.name);
      if ( options.children ) this.createSongs(options.children);
    },
    createSongs: function(songs) {
      var _this = this;
      _.each(songs, function(item, i) {
        if ( item.type !== "file" ) return false;
        var song = new app.BB.Song(null, item);
        _this.songs.add(song);
      });
    }
  });

  app.BB.Songs = Backbone.Collection.extend({
    model: app.BB.Song
  });

  app.BB.Song = Backbone.Model.extend({
    initialize: function(attr, options) {
      this.set('name', options.name);
    }
  });

  app.createBackboneShit = function(resp) {

    app.artists = new app.BB.Artists();

    _.each(resp.children, function(item, i) {
      if ( item.type !== "folder" ) return false;
      var artist = new app.BB.Artist(null, item);
      app.artists.add(artist);
    });

  };


  window.app = app;

  $(document).ready(app.init);

})(this, jQuery);
