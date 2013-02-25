"use strict";
requirejs.config({
    //Add a timestamp to the resources so it can't cache
    //urlArgs: "bust=v1." + (new Date().getTime()),
    //By default load any module IDs from scripts/app
    baseUrl: 'scripts/app',
    //paths config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: "../libs/jquery-1.9.1.min",
        ui: "../libs/jquery-ui-1.10.0.custom.min",
        relational: "../libs/backbone-relational",
        localstorage: "../libs/backbone-localstorage",
        backbone: "../libs/backbone",
        handlebars: "../libs/handlebars",
        underscore: "../libs/underscore"
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
requirejs(["backbone", "ptsRouter", "ptsStorage"], function(Backbone, ptsRouter, ptsStorage) {

    var appRouter = ptsRouter.createRouter(); //TODO: Make work with dependency injection
    Backbone.history.start();

    var appCollection = ptsStorage.bootstrap("Activities");
    console.log(appCollection);


});