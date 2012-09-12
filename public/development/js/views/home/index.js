(function(window, $) {

  var HomeIndex = Backbone.View.extend({

    el: 'body',

    initialize: function(options) {
      $.when(options.artists_def).then(this.renderLibrary);
    },

    renderLibrary: function() {
      console.log(app.artists);
    }

  });

  window.app.BB.HomeIndex = HomeIndex;

})(this, jQuery);
