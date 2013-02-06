"use strict";
requirejs.config({
    //Add a timestamp to the resources so it can't cache
    urlArgs: "bust=v1." + (new Date().getTime()),
    //By default load any module IDs from js/lib
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
        relational: "backbone-relational"
    },
    shim: {
        backbone: {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ["underscore", "jquery"],
            //Once loaded, use the global "Backbone" as the
            //module value.
            exports: "Backbone"
        },
        underscore: {
            exports: "_"
        },
        relational: {
            deps: ["backbone"]
        },
        ui: {
            deps: ["jquery"]
        },
        jquery: {
            exports: "$"
        }
    }
});

// Start the main app logic.
requirejs(["backbone", "ui"], function(Backbone) {
    _.forEach([1,2,3], function(each) {
        console.log(each);
    });
    var hej = Backbone.Model.extend({});
    $("body").append($("<div>").html("Hej").draggable());
});