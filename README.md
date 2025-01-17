# Intro_JavaScript_Meetup

---
We will learn about
* Variables
* Data Types
* Indexing and slicing
* Control Flow
  - Basic Operators
  - If, else statements
* Loops
  - For in
  - For of
  - While loop
* Functions
  - Function DataType
---

<br>

### Variables

***So what is a variable?***

A variable is something that is not known, and can have any type of <u>Data</u>.

---
<br>

### DataTypes

Data is something that holds some information. eg Numbers, characters.

**String**

Anything encased in Double quotes or single quotes is a string.
```js
const my_str = "Hello, Everyone!"
```

**Number**

Includes Integers, Decimals or exponential notation(which idk about *lack of math from the author*)
```js
const my_int = 50
const my_decimal = 45.564
```

**Boolean**

This datatype can hold two values, `true` and `false`

```js
let truthful = false

console.log(3 < 5) // Returns true
console.log(3 > 5) // Returns false
```

**undefined**

As the name suggests its not defined. <br>
It means that you have declared a variable but not assigned it anything.

```js
var not_defined;
console.log(not_defined) // Returns undefined
```

**Null**

It simply means nothing, its not 0 or an empty string (`''`).

```js
const nothing = null
console.log(nothing) // returns Null
```

**Object**

It allows to store a collection of data. For example :-
```js
let company = {"name":"ChanR", "place": "Calfornia", "founder": "Rishov", "Website": null};
```
<br>
So it has like a key("name", "place", etc) and a value("ChanR", "Calfornia", etc)
<br>
<br>

**Array**

It can store many values.

```js
let random_array = ["Hello", "1", 1, 2, 3, true, null]
```

Arrays can also store other arrays in them. <br>
They are called nested arrays. <br>

```js
let nested_array = ["Hello", ["World", "1", [1, 2, 3]]]
```

### Indexing and slicing

**Indexing**
Indexing means getting individual values or item you could say from the data.
<br>
For example here we have a variable `a` and this `a`'s value is `Hello World`. So lets suppose you want the `W` from it.
<br>
So to get that you need to count from O so like this
<br>
```
H e l l o   W o r l d
0 1 2 3 4 5 6 7 8 9 10
```

so to get `W` we need the index value `6`

**Note :- Spaces are also counted in indexing**
<br>
You can do this for array's too
<br>
```js
let a_array = [1, 2, 3, 4, [5, 6, 7, 8, 9]]
```
Lets get the number `7`
```js
console.log(a_array[6])
```
Woah whats this `undefined` whaaaa
<br>
What happened here is we made a nested array so there are actually only 4 indices to get `7` we do this
<br>
We go inside the array in the variable `a_array`, so that array is at the `4th` index postion so we do this
<br>
```js
console.log(a_array[4])
```
<br>

Now we add another `[]` after there to say go inside this array and get the index `2` which is `7`.

```js
console.log(a_array[4][2])
```

### Control Flow

**Basic Operators**

`>` = Greater than
<br>
`<` = Less than
<br>
`<=` = Greater than or equal to
<br>
`>=` = Less than or equal to
<br>
`!=` = Not equal to
<br>
`==` = Equal to
<br>
`variable++` = Increase number(variable) by 1
<br>
`**` = Exponent
<br>

**If statements**

They say if some value is this or that then run it(they can also say if some value is not this or that then run this).
<br>
There also use `else if`. It runs when the if statements fails(or isnt true), or if another `else if` fails.
<br>
And there is also `else` it runs when everything `else` fails (*see what i did there ;D*)

```js

let a = 5

if (a < 10) {
  console.log("10 is the winner!")
} else {
  console.log("10 loses!")
} // You know what it will return lol. psssttt its 10 is the winner!...

// Lets use else if

if (a == 4){
  console.log("a is 4")
} else if (a == 5){
  console.log("a was 5")
  a += 1 // see we changed the variable's value as we used let
  console.log("a is 6 now see")
  console.log(a)
}
```
<br>

# Loops

**For loop**
Used for repeating a certain code a number of times.

```js
for (let step=0; step<5; step++) {
  console.log(step)
}
```

A `for of` loop will outputs an array's data (strings, numbers)

```js
const types = [ 'object', 'array', 'string', 'integer', 'float', 'boolean' ]

// For of loop

for (const type of types) {
  console.log(type)
}
```

A `for in` loops will outputs an array's indices(plural of index)

```
// For ... in loop

for (const type in types) {
  console.log(type)
```

A while loop runs `while` a given condition is true

```js
let a = 4
while (a < 5) {
  a++ // Means increase a so we dont get an infinte loop
  console.log("Not any more!")
}
```

### Functions

In a function you give an input and the function does somethings and outputs things

In JS you make a function like this
```js
function hello() {
  console.log("Hi")
}

hello() // Outputs Hi
```

You see `hello` is the function name, and we put paranthesis after it so as it can tell the user what type of input it wants, and the code in the `{ }` takes that input and and does some stuff with it and outputs it.

You just need to call the function.


So you could have a function like this
```js
function find_root(number) {
  console.log(number**0.5)
}
```
Lets say you pass 2 in it will output the square root of 2.
<br>
*(which i forgot what it is...)*

**Function DataType**

There is also another datatype thats called the function datatype, in it you assign a function to a variable. This is also called an **Anonymous Function** as it has no name(expect the variable name).

```js
let x = function() {
  console.log("Hello")
}
```
