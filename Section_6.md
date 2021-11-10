# CSS (Cascading Style Sheets)
Css is a language for describin how document are presented visually - how they are arreged and styled. There are 3 ways of including CSS styles in our HTML:
1. Inline Styles (not recommended): You can write directly inline on each element. Problematic to change, because you need to do it individually. 
2. The `<style></style` element: put all the style inside this tag in the head of my HTML. This way is easier than the first approach but it makes it impossible to share styles between documents (also not recommended).
3. External Stylesheet (RECOMMENDED!): Write your styles in a css files and then include it by using a `<link>` in the head of your HTML.  
### Colors: you can use rgb (red, green, blue), rgba (red, green, blue, alpha) or hexadecimal notation (0-9 & A-F; ex. #F85FAD). 
### SIZES: Relative and Absolutes
- Relatives: em, rem, vh, vw, %, etc.  
- Absolutes: px, pt, cm, in, mm.