# The CSS Box Model
> When laying out a document, the browser's rendering engine represents each element as a rectangular box according to the standard CSS basic box model. CSS determines the size, position, and properties (color, background, border size, etc.) of these boxes.  
Every box is composed of four parts (or areas), defined by their respective edges: the content edge, padding edge, border edge, and margin edge.  
- The **content area**, bounded by the content edge, contains the "real" content of the element, such as text, an image, or a video player. Its dimensions are the content **width** (or content-box width) and the content **height** (or content-box height).  
- The **padding area**, its the space between the content and the margin of the box
- The **border area**, bounded by the border edge, extends the padding area to include the element's borders. Its dimensions are the border-box width and the border-box height.  
- The **margin area**, extends the border area to include an empty area used to separate the element from its neighbors.  
## Display Properties:  
- **INLINE:** Width & height are ignored. Margin & padding push elements away horizontally but not vertically.  
- **BLOCK:** Block elements break the flow of a document. Width, Height, Margin & Padding are respected.  
- **INLINE-BLOCK:** Behaved like an inline element except Width, Heigh, Margin & Padding are respected.  
## CSS Relative Units:  
- Percentages: are always relative to some other value. Sometimes, it's a value from the element itself. For example, **width: 50% - half the width of the parent, line-height: 50% - half the font-size of the element itself.**  
- EM'S: With font-size, 1em equals the font-size of the parent. 2em's is twice the of the parent value, etc. With other properties, 1 em is equal to the computed font-size of the element itself.  
- REM'S: Root ems. telative to the root html element's font-size. Often easier to work with. If the root font-size is 20px, 1 rem is always 20px. 2 rem is always 40px,etc.  
