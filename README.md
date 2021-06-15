# Lodash

In this project, you will be implementing some of the most exciting functionality from the widely-popular lodash.js library which provides many methods that add new functionality for numbers, strings, objects, and arrays.
We’ve selected ten methods for you to implement.

---


## Method: .clamp()
### Used for data type: Number

This method implemented is .clamp(). <br>
.clamp() takes three arguments: a number, a lower bound, and an upper bound. The method modifies the provided number to be within the two provided bounds. If the provided number is smaller than the lower bound, it will return the lower bound as the final number. If the number is larger than the upper bound, it will return the upper bound as the final number. If the number is already within the two bounds, it will return the number as the final number.

---

## Method: .inRange()
### Used for data type: Number

This method takes three arguments: a number, a start value, and an end value. The method checks to see if the provided number falls within the range specified by the start and end values. If the provided number is smaller than the start value, .inRange() will return false. If the provided number is larger than or equal to the end value, .inRange() will return false. If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value. If the provided start value is larger than the provided end value, the two values should be swapped. 

---

## Method: .word()
### Used for data type: String

This method takes one argument: a string. The method splits the string into an array of words.

---

## Method: .pad() 
### Used for data type: String

This method takes two arguments: a string and a length. The method adds spaces evenly to both sides of the string to make it reach the desired length. Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length. 

---

## Method: .has()
### Used for data type: Object

This method takes two arguments: an object and a key, and checks to see if the provided object contains a value at the specified key.

---


## Method: .invert()
### Used for data type: Object

This method takes one argument: an object and iterates through each key / value pair in the provided object and swaps the key and value.

---

## Method: .findKey()
### Used for data type: Object

This method takes two arguments: an object and a predicate function — a function that returns a boolean value. The method  iterates through each key / value pair in the provided object and calls the predicate function with the value. The method returns the first key that has a value that returns a truthy value from the predicate function. The method returns undefined if no values return truthy values from the predicate function.

---

## Method: .drop()
### Used for data type: Array

This method takes two arguments: an array and a number representing the number of items to drop from the beginning of the array. This method returns a new array that contains the elements from the original array, excluding the specified number of elements from the beginning of the array. If the number of elements to drop is unspecified, the method should drop one element.

---

