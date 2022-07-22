# Class 06

## Javascript

JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language. It is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
In other words, Javascript is a very versatile programming language, used most commonly to provide functionality to websites but also used in some cases offline such as [Node.js](https://nodejs.org/en/).
The standards for JavaScript are the ECMAScript Language Specification. We are currently on version six, also known as ES6.

### Javascript Varibales

Javascript offers variables which allow you to store information with a quick and easy to reference name. Javascript variables are declared with `var`, `let` and `const`.
The `var` keyword is used in all JavaScript code from 1995 to 2015. The `let` and `const` keywords were added to JavaScript in 2015.
As a general rule: always use `const` to declare variables unless you think the variable may change. Then use `let`.

An example for this from [w3schools](https://www.w3schools.com/js/js_variables.asp);

```const price1 = 5;
const price2 = 6;
let total = price1 + price2;
```

The two variables price1 and price2 are declared with the `const` keyword.
These are constant values and cannot be changed.
The variable total is declared with the `let` keyword.
This is a value that can be changed.
