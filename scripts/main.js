"use strict";
requirejs.config({
    //Add a timestamp to the resources so it can't cache
    urlArgs: "bust=v1." + (new Date().getTime()),
    //By default load any module IDs from scripts/lib
    baseUrl: 'scripts/libs',
    //except, if the module ID starts with "app",
    //load it from the scripts/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: "../app",
        jquery: "jquery-1.9.1.min",
        ui: "jquery-ui-1.10.0.custom.min",
        relational: "backbone-relational",
        localstorage: "backbone-localstorage"
    },
    shim: {
        backbone: {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ["underscore", "jquery", "handlebars"],
            //Once loaded, use the global "Backbone" as the
            //module value.
            exports: "Backbone"
        },
        relational: {
            deps: ["backbone"],
            exports: "Backbone"
        },
        localstorage: {
            deps: ["backbone"],
            exports: "Backbone"
        },
        ui: {
            deps: ["jquery"]
        },
        handlebars: {
            exports: "Handlebars"
        }
    }
});

// Start the main app logic.
requirejs(["backbone", "handlebars", "ui"], function(Backbone, Handlebars) {
    _.forEach([1,2,3], function(each) {
        console.log(each);
    });
    var Hej = Backbone.Model.extend({
        greeting: function() { return this.get("greeting"); }
    });
    var Template = Handlebars.compile("<div>{{greeting}}</div>");
    var HejView = Backbone.View.extend({
        el: "#container",
        template: Template,
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html(this.template(this));
            console.log(this);
            return this;
        },
        greeting: function() { return this.model.greeting(); }
    });

    var hej = new Hej({greeting: "Hej världen"});
    var hejView = new HejView({model: hej});

    $("body").append($("<div>").html("Hej").draggable());
});