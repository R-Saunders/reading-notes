# Class 08

## Contents

- [Home Page](https://r-saunders.github.io/reading-notes)
- [Class 01](https://r-saunders.github.io/reading-notes/102/class-01)
- [Class 02](https://r-saunders.github.io/reading-notes/102/class-02)
- [Class 03](https://r-saunders.github.io/reading-notes/102/class-03)
- [Class 04](https://r-saunders.github.io/reading-notes/102/class-04)
- [Class 04 Website](https://r-saunders.github.io/reading-notes/102/class-04-website)
- [Class 05 Website](https://r-saunders.github.io/reading-notes/102/class-05-website)
- [Class 05](https://r-saunders.github.io/reading-notes/102/class-05)
- [Class 06 Website](https://r-saunders.github.io/reading-notes/102/class-06-website)
- [Class 06](https://r-saunders.github.io/reading-notes/102/class-06)
- [Class 07 Website](https://r-saunders.github.io/reading-notes/102/class-07-website)
- [Class 07](https://r-saunders.github.io/reading-notes/102/class-07)
- [Class 08](https://r-saunders.github.io/reading-notes/102/class-08)
- [Class 08 Website](https://r-saunders.github.io/reading-notes/102/class-08-website)

## Javascript

### Expressions and Operators

#### Assignment operators

An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal `=` which assigns the value of its right operand to its left operand. That is, `x = f()` is an assignment expression that assigns the value of `f()` to `x`.

MDN offers the following table for assignment operators.

|Name|Shorthand Operator|Meaning|
|-|--|-|
|[Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)|`x = f()`|`x = f()`|
|[Addition assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)|`x += f()`|`x = x + f()`|
|[Subtraction assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)|`x -= f()`|`x = x - f()`|
|[Multiplication assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)|`x *= f()`|`x = x * f()`|
|[Division assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment)|`x /= f()`|`x = x / f()`|
|[Remainder assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)|`x %= f()`|`x = x % f()`|
|[Exponentiation assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)|`x **= f()`|`x = x ** f()`|
|[Left shift assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)|`x <<= f()`|`x = x << f()`|
|[Right shift assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)|`x >>= f()`|`x = x >> f()`|
|[Unsigned right shift assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)|`x >>>= f()`|`x = x >>> f()`|
|[Bitwise AND assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)|`x &= f()`|`x = x & f()`|
|[Bitwise XOR assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)|`x ^= f()`|`x = x ^ f()`|
|[Bitwise OR assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)|`x &#124;= f()`|`x = x &#124; f()`|
|[Logical AND assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)|`x &&= f()`|`x && (x = f())`|
|[Logical OR assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)|`x &#124;&#124;= f()`|`x &#124;&#124; (x = f())`|
|[Logical nullish assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)|`x ??= f()`|`x ?? (x = f())`|

#### Comparison operators

A comparison operator compares its operands and returns a logical value based on whether the comparison is true. he operands can be numerical, string, logical, or object values. If two operands are of different types then Javascript will try and convert them to match them up. For example `2 == '2'` returns `true`. Javascript recognises one as a string and the other as a number but converts them to match. There are two exceptions to this which is the strict equality `===` and strict inequality `!==` operators. These simply do not do any conversion at all.

MDN offers the following table for comparison operators.

|Operator|Description|Examples returning true|
|--------|-----------|-----------------------|
|[Equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) (==)|Returns true if the operands are equal.|`3 == var1`,`"3" == var1`, `3 == '3'`|
|[Not equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality) (!=)|Returns true if the operands are not equal.|`var1 != 4`, `var2 != "3"`|
|[Strict equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) (===)|Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.|`3 === var1`|
|[Strict not equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality) (!==)|Returns true if the operands are of the same type but not equal, or are of different type.|`var1 !== "3"`, `3 !== '3'`|
|[Greater than](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than) (>)|Returns true if the left operand is greater than the right operand.|`var2 > var1`, `"12" > 2`|
|[Greater than or equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal) (>=)|Returns true if the left operand is greater than or equal to the right operand.|`var2 >= var1`, `var1 >= 3`|
|[Less than](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) (<)|Returns true if the left operand is less than the right operand.|`var1 < var2`, `"2" < 12`|
|[Less than or equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal) (<=)|Returns true if the left operand is less than or equal to the right operand.|`var1 <= var2`, `var2 <= 5`|

### Loops and iteration

Loops offer a quick and easy way to do something repeatedly. They are used to repeat an action number of times without having to repeat the same line of code. Conditions typically return true or false. A loop will continue running until the defined condition returns false.

#### `for` statement

A `for` loop repeats until a specified condition evaluates to false.

MDN provides th below example.

```
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
```

When a `for` loop executes, the following occurs:

1. The initializing expression initialExpression, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
2. The conditionExpression expression is evaluated. If the value of conditionExpression is true, the loop statements execute. Otherwise, the for loop terminates. (If the conditionExpression expression is omitted entirely, the condition is assumed to be true.)
3. The statement executes. To execute multiple statements, use a block statement ({ }) to group those statements.
4. If present, the update expression incrementExpression is executed.
5. Control returns to Step 2.

#### `while` statement

A `while` statement executes its statements as long as a specified condition evaluates to true.

MDN gives the following example.

```
while (condition)
  statement
```

If the `condition` becomes `false`, `statement` within the loop stops executing and control passes to the statement following the loop.

The condition test occurs before `statement` in the loop is executed. If the condition returns `true`, `statement` is executed and the `condition` is tested again. If the `condition` returns `false`, execution stops, and control is passed to the `statement` following `while`.

To execute multiple statements, use a block statement (`{ }`) to group those statements.
