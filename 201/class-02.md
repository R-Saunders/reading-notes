# Class 02

## HTML Text Fundamentals. HTML Advanced Text Formatting.

Semantic elements are an important part of HTML as it provides a more comprehensible structure to the code written. This makes it easier for someone to read, it also provides more information to the broswer and allows it to interpret the code easier.
HTML offers six levels of headings, starting with H1 going down to H6. There should only ever be one H1 for a page but there may be multiple's of other heading types.
The `<sup>` and `<sub>` elements are used to create superscript and subscript text. This is a visual effect that shows on the text itself.
The `<abbr>` element is a helpful semantic element for abbreviations. This comes with the `title` attribute that is used to provide a full readable description or expansion of the abbreviation.

## How CSS Is Structured.

CSS can be applied in several manners.
* Inline - such as `<div style="font-size:16px">`
* Inside a style tag within the head - such as `<style> div { font-size:16px; } </style>`
* Inside a seperate stylesheet, written in the same manner as with a style tag but linked to the HTML document using `<link href="style.css" rel="stylesheet">`
Generally speaking we should avoid writing inline style CSS as it is harder to maintain and less legible. 
Review the block of code below and answer the following questions:
```
   h2 {
     color: black;
     padding: 5px;
   }
```
In the above example `h2` is the selector, `color` and `padding` are CSS declarations, `black` and `5px` are CSS properties.
  
## Learn JS

In Javascript the string datatype is represented by content enclosed in apostrophes `' '`.
There are many types of operators in JS such as addition `+`, subtraction `-`, multiplication `*` and division `/`.
These help to solve real worlds problems in the same way maths would in any situation. You can use this to create a HTML based calculator.
  
## Making Decisions In Your Code – Conditionals.

An if statement checks a condition and if it evaluates to true, then the code block will execute.
You can add additional conditions with the use of `else if`.
There are several comparison operators such as equals `==`, greater than `>` or smaller than `<`.
The logical opertator or `||` will return `true` if either condition is met. The logical operator and `&&` will return `true` only if both conditions are met. 