function narcissistic(value) {
  // Code me to return true or false
  let nums = [];
  let _value = value;
  if (_value < 10)
    return true;
  
  while (_value > 0){
    nums.push(_value % 10);
    _value = parseInt(_value/10);
  }
  const narc = nums.reduce((a, c) => a + c**nums.length, 0);
  return narc === value;
  
}