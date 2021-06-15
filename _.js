// This object will represent our library containing all the functionality we add to it.
const _ = { 
  
  //Number - Clamp Method
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);

    return clampedValue;
  },

  
  
  //Number - inRange Method
  inRange(number, start, end) {
    if(!end) {
      end = start;
      start = 0;
    };
    if(start > end) {
      let temp = end;
      end = start;
      start = temp;
    };

    const isInRange = (start <= number) && (number < end);

    return isInRange;
  },


  
  //String - Words Method
  words(string) {
    return string.split(' ');
  },

  
  //String - Pad Method  
  pad(string, length) {
    if(length <= string.length) {
      return string
    } else {
      const startPaddingLength = Math.floor((length - string.length)/2);
      const endPaddingLength = length - string.length - startPaddingLength;
    
      let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      
      return paddedString; 
    }
  },
  
  
  //Object - Has Method
    has(object, key) {
    if(object[key]) { 
      return true;
    }
    else {
      return false;
    }
  },
  
  
  
  //Object - Invert Method
    invert(object) {
    const invertedObject = {};
  
    for (let key in object) {
      let originalValue = object[key];   
      invertedObject[originalValue] = key;
    }

    return invertedObject;
  },
  
  
  
};






// Do not write or modify code below this line.
module.exports = _;
