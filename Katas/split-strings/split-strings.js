function solution(str){
  if (str === "")
    return [];
  if (str.length % 2 === 1)
    str = str + "_";
  let twoChars = "";
  let resultArray = [];
  for (let i = 0; i < str.length; i++){
    twoChars = twoChars + str[i];
    if (i % 2 === 1){
      resultArray.push(twoChars);
      twoChars = "";
    }
  }
  return resultArray;
}