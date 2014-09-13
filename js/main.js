/* 1) Variable Object:
There is only one global context. There is one functional context per function call.
Each execution context has an associated VariableObject. Variables (and functions) created within a
given context exist as properties of that context’s VariableObject.
*/

/*1.1) For global context, VariableObject is defined by window object variable. */
    var globalVariable  = "Global Variable";
    function globalFunction (){
        console.log("This function is a property to global variable object");
    }

    /* This proves that variables/functions created within global context, exist as properties of that context.*/
    console.log(window.globalVariable);
    console.log(window.globalFunction);

    /* You can get/call these global variables/functions with or without window object variable*/
    console.log(globalVariable); // window.globalVariable
    window.globalFunction(); // globalFunction();

/* 1.2) For functional context its trickier. Each function context has a VariableObject (in this context known as an ActivationObject) but
you can’t access it (unless you’re using Rhino). Hence when you create a variable within a function context you can’t reference it as a property for any object. */
    function foo() {
        var bar = "sausage";
        console.log(window.bar); //undefined (VariableObject is not window but it is ActivationObject as mentioned above. */
    }

    foo();

/*2) Creation of variables vs properties. */
console.log(a); //undefined (no error)
var a = "varianle is created at begining of execution";
console.log(window.b); //ReferenceError if you remove window.: b is not defined
window.b = "property is created when reaching the statement";
/* JavaScript assumes we are referencing a variable and so checks its VariableObject (which has no property named b). When an identifier is not found in the VariableObject we get a ReferenceError. */

/* 3) Different ways to create properties:
    - dot notation
    - superscript notation
    - Object.defineProperty or Object.defineProperties */
window.newProperty = "my new property";
window["newProperty2"] = "another new property";
console.log(window["newProperty"]);
console.log(window.newProperty2);
