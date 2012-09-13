(function(window, $) {

  var ArtistsIndex = Backbone.View.extend({

    tagName: 'ul',


    initialize: function(options) {
      app.views.artists_index = this;
    },

    render: function() {
      var _this = this;

      var source = $("#template-artists-item").html();
      var template = Handlebars.compile(source);

      _.each(this.collection.models, function(model) {
        var item = template(model.attributes);
        _this.$el.append(item);
      });

      this.$el.hide();
      this.$el.appendTo(app.views.home_index.$el);
      this.$el.fadeIn();
    }

  });

  window.app.BB.ArtistsIndex = ArtistsIndex;

})(this, jQuery);
