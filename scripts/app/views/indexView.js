"use strict";

define(["backbone"], function(Backbone) {

    var View, Template;

    function createView() {
        Template = Handlebars.compile($("#indexTemplate").html());

        View = Backbone.View.extend({
            template: Template,
            render: function() {
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
