export const stringMerge = (a,b) => {
    let final = []
    let aLength = a.length
    let bLength = b.length
    let longerString;
    let stringLimit;
    let remainder;
  
    if (aLength < bLength) {
      stringLimit = aLength  
      longerString = b    
    } else {
      stringLimit = bLength
      longerString = a      
    }
  
  
    remainder = longerString.slice(stringLimit)
  
    for (let i = 0; i < stringLimit; i++) {
      final.push(a[i])
      final.push(b[i])
    }
  
    final.push(remainder)
  
    return final.join("")
  }
  