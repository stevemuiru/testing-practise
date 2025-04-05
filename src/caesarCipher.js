const caesarCipher = (str, shift) => {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      if (char >= 'A' && char <= 'Z') {
        let base = 'A'.charCodeAt(0);
        let shiftedCode = ((char.charCodeAt(0) - base + shift) % 26) + base;
        result += String.fromCharCode(shiftedCode);
      } else if (char >= 'a' && char <= 'z') {
        let base = 'a'.charCodeAt(0);
        let shiftedCode = ((char.charCodeAt(0) - base + shift) % 26) + base;
        result += String.fromCharCode(shiftedCode);
      } else {
    
        result += char;
      }
    }
  
    return result;
  };
  
  export default caesarCipher;
  