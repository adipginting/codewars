function findNb(m) {
  // your code 
  const x1 = (-1 + Math.sqrt(1 + 8 * Math.sqrt(m)))/2;
  const x2 = (-1 - Math.sqrt(1 + 8 * Math.sqrt(m)))/2
  
  if (x1 > 0 && Number.isInteger(x1)){
    return parseInt(x1);
  }
  
  if(x2>0 && Number.isInteger(x2)){
    return parseInt(x2);
  }
  
  return (-1);
}