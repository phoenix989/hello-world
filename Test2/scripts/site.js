/*
    site.js
 */
"use strict";

var msg = "Hello JavaScript";
console.log(msg);

var results = document.getElementById('results');
results.innerHTML = "<p>This is from JavaScript 2</p>";

console.log("msg is " + typeof(msg));
console.log("results is " + typeof(results));

var none;
console.log("none is " + typeof(none));

var aNumber = 0;
console.log("aNumber is " + typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is " + typeof(trueFalse));

//somenoneexistentvar = "This is an undeclared variable";

function SimpleFunction(message) {
    console.log("This is a simple function. Message: " + message);
}

SimpleFunction("Hello SimpleFunction.");

// Function variable syntax allows this function to be passed in
// as a parameter to other functions.
// So, define our function.
var functionVariable = function(message)
{
    console.log("Hello function variable: " + message);
}

// Now execute our function.
functionVariable("blah");


// This is how we can create functions that takes in
// another function (e.g. a callback).
// Define our function
function SomeFunction(msg, callback) {
    // call SimpleFunction above and pass in msg
    SimpleFunction(msg);

    // Now call our callback function
    callback();
}

// Let's call SomeFunction above and supply an
// anonymous callback function as a parameter to it.
// Now execute the function.
SomeFunction("Hello callback function", function() {
    console.log("callback called");
});


// Scope
// All the variables and functions created above are
// part of the GLOBAL scope. This means that all libraries
// and other JavaScript can access and share the functions
// and variables.
console.log("Value in the msg variable: " + msg);

// Everything that is attached to the global scope on a web
// page is also attached to the WINDOW object.
// So we can access the "msg" variable above like this
console.log("Using the Window object to access the msg variable: " + window.msg);

// In JavaScript, the only thing that can create scope is a
// function.
function testFunction() {
    var test = "Blah";

    console.log("Value of the test variable in the testFunction() is: " + test);
}

testFunction();

// Accessing an out-of-scope variable results in a error.
//console.log("Accessing the test variable that is out-of-scope: " + test);


// Objects - we create JavaScript objects by using a pair of curly braces.
// Inside the braces, we simply add properties, functions (as properties)
// and other objects.
var result = {
    name: "Azizah",
    gender: "female",
    phone: "01256123123",
    showLog: function() {
        // This is a function inside an object
    },
    someOtherObject: {

    }
};

// To access the object's members, use the dot notation
console.log(result.name);

// JavaScript objects also support mutation which allows
// us to add properties, functions and other objects after
// the initial object was created.
result.someNewProperty = "This is a new property";

console.log(result.someNewProperty);

// Define a new function inside the result object.
result.newFunction = function() {
    console.log("This is a newly added function");
};

console.log(result.newFunction());

// jQuery
var results2 = jQuery("#results2");
results2.text("This is using jQuery to programmatically manipulate the DOM");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function() {
    var results = $("#results");
    results.toggle(500);
});

// Querying the document
//$("header nav li").text("Same text to all items in the jQuery wrapped set");

// If you are going to do many things with the wrapped set, it's better to
// store in a variable for efficiency/performance
var navItems = $("header nav li");
navItems.text("Apply same text to all items in the jQuery wrapped set");
navItems.filter(":first").text("Only apply text to the first item in the wrapped set")


// Manipulating the DOM with jQuery
// Let's start with a collection
var myCollection = [{
    name : "John Smith",
    gender : "male",
    owner : {
        login : "jos",
        id: 123
    }
}, {
    name : "Susan Jones",
    gender : "female",
    owner : {
        login : "suj",
        id: 456
    }
}];

// Let's display the data on the page using jQuery's improved
// for loop which is exposed on the jQuery object called .each
var resultList3 = $("#results3");
resultList3.empty();  // the empty() jQuery function clears the contents inside the wrapped set.
$.each(myCollection, function(i, item){

    // Let's buid up some HTML
    var newResult =
        "<div class='resultItem'>" +
            "name: " +  item.name + "<br />" +
            "owner: " + item.owner.login + "<br />" +
        "</div>";

    // Let's add some interactivity by using the jQuery function called hover
    // NOTE: we can't just take the string above and apply the jQuery function
    // like this: newResult.hover() because newResult is not a jQuery object.
    // To make it a jQuery object, we first need to wrap it in a jQuery object
    // like what we did with the document object: $(document). The same thing
    // works if we wrap text that represent a parsable set of JavaScript
    var newResult = $("<div class='resultItem'>" +
        "name: " +  item.name + "<br />" +
        "owner: " + item.owner.login + "<br />" +
        "</div>");

    // Now we can add this to our page by using the append() function
    resultList3.append(newResult);
});