"use strict";

angular
  .module("Entry", [
  "ui.router",
  "ngResource"
  ])
.config([
  "stateProvider",
  RouterFunction
])
.factory( "EntryFactory", [
  "$resource",
  EntryFactoryFunction
])
.controller("EntryIndexController", [
  "EntryFactory",
  EntryIndexControllerFunction
])

function EntryFactoryFunction($resource){
  return $resource("http://localhost:3000/entries/:id", {}, {
  update: { method: "PUT" }
  })
}

function RouterFunction($stateProvider){
  $stateProvider
  .state("EntryIndex", {
    url: "/entries",
    templateUrl: "js/ng-views/index.html",
    controller: "EntryIndexController",
    controllerAs: "vm"
  })
  .state("EntryShow",{
    url: "/entries/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "EntryShowController",
    controllerAs: "vm"
  })
}
function EntryIndexControllerFunction(WdinstagramFactory) {
      this.entries = EntryFactory.query();
}

// reference lesson: https://github.com/ga-wdi-lessons/angular-resources
