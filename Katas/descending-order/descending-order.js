function descendingOrder(n){
  //...
  if (n < 10)
    return n;
  
  let number_array = [];
  while(n != 0){
    number_array.push(n % 10);
    n = parseInt(n / 10);
  }
  
  function merge_sort(array){
    if (array.length === 1){
      return array;
    }
    const middle = parseInt(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle, array.length);
    
    merge_sort(left);
    merge_sort(right);
    
    let i = 0, j = 0, k = 0;
    while(i < left.length && j < right.length){
      if (left[i] > right[j]){
        array[k] = left[i];
        i++;
      }
      else {
        array[k] = right[j];
        j++;
      }
      k++;
    }
    
    while(i < left.length){
      array[k] = left[i];
      i++;
      k++;
    }
    
    while(j < right.length){
      array[k] = right[j];
      j++;
      k++;
    }
  }
  
  merge_sort(number_array);
  let number_str = "";
  for (let i = 0; i < number_array.length; i++){
    number_str = number_str + number_array[i];
  }
  return parseInt(number_str);
}