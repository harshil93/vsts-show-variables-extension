/// <reference path='../typings/tsd.d.ts' />

var actionProvider1 = {
    execute: (context) => {
        alert("hello world");
    }
}

// Register context menu action provider
var showVariablesContext = (function () {
    "use strict";

    return {
        execute: function (sourceItemContext) {
            // Load REST client
                alert("I am loaded. hurray");
     }
	} 
}());

VSS.register("show-variables", showVariablesContext);