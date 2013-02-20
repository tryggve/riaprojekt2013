"use strict";

define(["backbone", "views/indexView"], function(Backbone, indexView) {

    var router;

    function createRouter() {
        router = Backbone.Router.extend({
            initialize: function(options) {
                this.el = options.el;
            },
            routes: {
                "": "index"
            },
            index: function() {
                var view = indexView.createView();
                console.log(this.el);
                this.el.empty();
                this.el.append(view.render().el);
            }
        });

        return new router({el: $("#container")});

    }

    return {
        createRouter: createRouter
    }
});