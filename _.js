// This object will represent our library containing all the functionality we add to it.
const _ = { 
  
  
  //Number Methods
  
  //clamp
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);

    return clampedValue;
  },

  
  
  //inRange 
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


  
  //String Methods
  
  //words
  words(string) {
    return string.split(' ');
  },

  
  //pad
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
  
  
  //Object Methods
  
  //has
  has(object, key) {
    if(object[key]) { 
      return true;
    } else {
       return false;
     }
  },
  
  
  
  //invert
  invert(object) {
    const invertedObject = {};
  
    for (let key in object) {
       let originalValue = object[key];   
        invertedObject[originalValue] = key;
     }

    return invertedObject;
    },
  
  
  
  //findKey
    findKey(object, predicate) {
      for(let key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);

        if(predicateReturnValue) {
          return key;
        } 
      }
      return undefined;
    },
  
  
  //Array Methods
  
  //drop 
    drop(array, number=1) {
      return array.slice(number) 
    }, 
  
  
  
  //dropWhile 
    dropWhile(array, predicate) {
      const dropNumber = array.findIndex((element, index) => {
        return !predicate(element, index);
    });

      let droppedArray = this.drop(array, dropNumber);

      return droppedArray;
    },
  
  
  
  //chunk
    chunk(array, size = 1) {
    let arrayChunks = [];
    let index = 0;

    while(index < array.length){
      let arrayChunk = array.slice(index, index + size);
      arrayChunks.push(arrayChunk);
      index += size;
    };
    
    return arrayChunks;
  },
};






// Do not write or modify code below this line.
module.exports = _;
