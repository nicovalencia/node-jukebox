(function(window, $) {

  var HomeIndex = Backbone.View.extend({

    el: 'body',

    initialize: function(options) {
      var _this = this;
      $.when(options.artists_def).then(function(){ _this.render(); });
    },

    render: function() {
      this.$el.find('.loader').fadeOut(function(){
        new app.BB.ArtistsIndex({
          collection: app.artists
        }).render();
      });
    }

  });

  window.app.BB.HomeIndex = HomeIndex;

})(this, jQuery);
