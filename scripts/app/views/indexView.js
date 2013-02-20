"use strict";

define(["backbone"], function(Backbone) {

    var View, Template;

    function createView() {
        Template = Handlebars.compile("<div>{{ greeting }}</div>");

        View = Backbone.View.extend({
            template: Template,
            render: function() {
                console.log(this.$el);
                this.$el.html(this.template(this));
                return this;
            },
            greeting: function() { return "Hej"; }
        });
        return new View();
    }

    return {
        createView: createView
    }
});
