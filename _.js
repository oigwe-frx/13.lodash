// This object will represent our library containing all the functionality we add to it.
const _ = { 
  
  //Clamp Method
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);

    return clampedValue;
  },

  
  
  //inRange Method
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


  
  //Words Method
  words(string) {
    return string.split(' ');
  },

  
  //Pad Method  
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
  
  
  //Has Method
    has(object, key) {
    if(object[key]) { 
      return true;
    }
    else {
      return false;
    }
  },
};






// Do not write or modify code below this line.
module.exports = _;
