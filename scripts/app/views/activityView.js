"use strict";

define(["backbone"], function(Backbone) {

    var View, Template;

    function createAddView() {
        Template = Handlebars.compile($("#addActivityTemplate").html());

        View = Backbone.View.extend({
            template: Template,
            events: {
                "click #addActivityButton": "addActivity"
            },
            render: function() {
                this.$el.html(this.template(this));
                return this;
            },
            addActivity: function(e) {
                e.preventDefault();
                console.log(e);
            }
        });
        return new View();
    }

    return {
        createAddView: createAddView
    }

});