"use strict";

define(["backbone", "views/indexView", "views/activityView"], function(Backbone, indexView, activityView) {

    var Router;

    function createRouter() {
        Router = Backbone.Router.extend({
            initialize: function(options) {
                this.el = options.el;
            },
            routes: {
                "": "index",
                "activity/add": "addActivity"
            },
            index: function() {
                var view = indexView.createView();
                this.el.empty();
                this.el.append(view.render().el);
            },
            addActivity: function() {
                var view = activityView.createAddView();
                this.el.empty();
                this.el.append(view.render().el)
            }
        });

        return new Router({el: $("#container")});

    }

    return {
        createRouter: createRouter
    }
});