function findMissingLetter(array)
{
  let prev = array[0].charCodeAt(0);
  let gap = 0;
  let number = 0;
  for (let i = 0; i < array.length; i++){
    gap = array[i].charCodeAt(0) - prev;
    if (gap > 1){
      number = array[i].charCodeAt(0);
    }
    prev = array[i].charCodeAt(0);
  }
  return String.fromCharCode(number - 1)
}