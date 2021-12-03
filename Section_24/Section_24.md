# Section 24: Introducing to the world fo DOM
## **D**ocument **O**bject **M**odel
The DOM is a javascipt representation of a webpage. It's your JS 'window' into the contents of a webpage. It's a bunch of objects that you can interact with via JS.
The document object is our entry point into the world of the DOM. It contains representatios of all the content on a page, plus tons of useful methods and properties.
### Selecting Methods
- #### getElementById: Selects an element by its ID.
- #### getElementsByTagName: Selects a collection of elements with the same tag. 
- #### getElementsByClassName: rather than selecting elements by its id or tag, we can select by its class.
- #### querySelector: find first element by its id, tag or class name. We indicate what we are looking for using the same select syntax of css. Ex. document.querySelector('p')/('#red')/('.pass')/('a[title="Java"]')
- #### querySelectorAll: do same of querySlector but it returns a collection of all matching elements.
### Methods 
- **InnerText:** The innerText property of the HTMLElement interface represents the "rendered" text content of a node and its descendants. InnerText acceps text but no tags.
- **InnerHTML:** gets or sets the HTML or XML markup contained within the element. We can change or add new tags using this propertie.
### Atributes
**element.getAttribute('attribute')**  
ex. element.getAttribute('href');  
**Element.setAttribute(name, value);**  
ex. element.setAtributte('type', 'text');  
### Styles
> The style read-only property returns the inline style of an element in the form of a CSSStyleDeclaration object that contains a list of all styles properties for that element with values assigned for the attributes that are defined in the element's inline style attribute.
SYNTAX **style = element.style**  
### ClassList
We can add or remove a new class to an element by using classList.
**element.classList.remove/add('nameOfyourClass');
## Properties (parent, child, sibling)
- parent.Eleement: it give us the direct parent of an element
- children: return a collection of children of a parent, we can acces to the index p.children[2].
- previus/next.ElementSibling: if we dont put 'element' it will return the node.
### Creating new elements
**element.createElement('img');**
### AppendChild
> The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node).
### Append
> The Element.append() method inserts a set of Node objects or DOMString objects after the last child of the Element. DOMString objects are inserted as equivalent Text nodes.
Differences from Node.appendChild():
- Element.append() allows you to also append DOMString objects, whereas Node.appendChild() only accepts Node objects.
- Element.append() has no return value, whereas Node.appendChild() returns the appended Node object.
- Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.