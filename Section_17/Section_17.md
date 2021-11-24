# Section 17: JavaScript Arrays
## Ordered collections of values
> Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed.
### **Arrays are indexed** ----> days[0] = "monday"
If you want to access any data (such as the letter of a word) of an element in the array, you must specify the location of that element and then the location of the data you need, for example ---> **days[0][0] = "m"**
### Useful methods
- Concat() is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
- IndexOf()  returns the first index at which a given element can be found in the array, or -1 if it is not present.
- Includes() determines whether an array includes a certain value among its entries, returning true or false as appropriate.
- Reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
- Slice() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
- Splice() ethod changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
- Sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
