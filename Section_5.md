# Section 5: HTML FORMS & TABLES
## Tables
> A table is a structured set of data distributed in rows and columns ( tabulated data ). A table allows you to quickly and easily find values ​​between different types of data that indicate some type of connection.

`<table></table>`  (allows the info)  
`<th></th>` (defines a cell as header of a group of table cells)  
`<tr></tr>` (table row, defines a row of cells in a table)  
`<td></td>` (table colums, defines a cell of a table that contains data)  
-colspan atribute: This attribute contains a non-negative integer value that indicates for how many columns the cell extends.  
-rowspan atribute: This attribute contains a non-negative integer value that indicates for how many rows the cell extends.
### Example
`<table>`  
----`<thead>`  
--------`<tr>`  
-------------`<th rowspan ="2">Animal</th>`  
--------`</tr>`  
----`</thead>`   
----`<tbody>`  
--------`<tr>`  
-------------`<td>` Cat `</td>`  
--------`</tr>`  
`</table>` 
<table>
        <thead>
            <tr>
                <th rowspan="2">Animal</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cat</td>
            </tr>
    </tbody>
</table>   

## Forms
- The form element "represent a document section containing interactive controls for sbmitting information".
- The *action* attribute specifies WHERE the form data should be sent.
- The *method* attribute specifies which HTTP method should be uesed.
> The `<input> HTML` element is used to create interactive controls for web-based forms in order to accept data from the user. How an `<input>` works varies considerably depending on the value of its ***type*** attribute (text, button, radio, checkbox. select, number, password, date, etc).    

We can use `<label></label>` tags to put a text related to the type of input, and we conect the input with the label by using an ID and a FOR; for example:
`<label for="name">`Input your name`</label>`  
`<input type="text" id="name name="name">`  
<label for="name">Input your name</label>
<input type="text" id="name" name="name">
### The name attribute:  
Its a string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted.
Consider the name a required attribute (even though it's not). If an input has no name specified, or name is empty, the input's value is not submitted with the form! 