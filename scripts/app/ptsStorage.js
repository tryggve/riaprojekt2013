"use strict";

define(["backbone", "models/activity", "localstorage"], function(Backbone, ptsActivity) {

    var Collection, collection;

    function bootstrap(collectionName) {
        Collection = Backbone.Collection.extend({
            model: ptsActivity,
            localStorage: new Backbone.LocalStorage(collectionName)
        });
        collection = new Collection(collectionName);
        collection.fetch();
        return collection;
    }

    return {
        bootstrap: bootstrap
    }
});