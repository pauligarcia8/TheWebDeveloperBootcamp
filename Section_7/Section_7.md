# The World of CSS Selectors
**Unirvesal Selector:** (*), select the entire document for stylistic purposes (not very common).  
**Element Selector:** select the element that we want to change, `<img>`, `<p>`, `<h1>`, etc.  
**Selector List:** we create a list of elements which will be affected by the same style changes.  
**The ID Selector:** a **( # )** is placed before the ID that we have established and that way the changes will only be reflected in the element that has that ID.  
**Class Selector:** a **( . )** It is used in the same way as the # for IDs. The difference is that a class can be used and several elements, and an ID only in one.
**Descendent Selector:** >The descendant combinator — typically represented by a single space ( ) character — combines two selectors such that elements matched by the second selector are selected if they have an ancestor (parent, parent's parent, parent's parent's parent, etc) element matching the first selector. Selectors that utilize a descendant combinator are called descendant selectors.  
**The Adjacent Sibling Combinator:** (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element. For example: 

img + p {   

  font-weight: bold;

}

**The Atribute Selector:** matches elements based on the presence or value of a given attribute. For example:   

a[href="https://example.org"] {

color: green;

}

**Pseudo Classes:** A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, :hover can be used to change a button's color when the user's pointer hovers over it. For example:

button:hover {

  color: blue;

}

**Pseudo Element:** is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, ::first-line can be used to change the font of the first line of a paragraph.

p::first-line {

  color: blue;
  
  text-transform: uppercase;

}