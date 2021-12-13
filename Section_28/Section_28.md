# Section 28: AJAX % API's
### **AJAX** (Asynchronous Javascript And XML)
Used to make requests to upload or submit information behind the scenes on a particular website or application.  
### **API's** (Application Programming Interface)
API'a are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.
### **JSON** (Java Scriot Objecto Notation)
> The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON. It can't be called or constructed, and aside from its two method properties, it has no interesting functionality of its own.
### Static Methods
- JSON.parse(text[, reviver])  
Parse the string text as JSON, optionally transform the produced value and its properties, and return the value. Any violations of the JSON syntax, including those pertaining to the differences between JavaScript and JSON, cause a SyntaxError to be thrown. The reviver option allows for interpreting what the replacer has used to stand in for other datatypes.

- JSON.stringify(value[, replacer[, space]])  
Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner. By default, all instances of undefined are replaced with null, and other unsupported native data types are censored. The replacer option allows for specifying other behavior.
### Fetch API
The Fetch API provides an interface for fetching resources (including across the network).  
Fetch provides a generic definition of Request and Response objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it’s for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions).
- The newer way of making request via JS
- Not supported by Internet Explorer