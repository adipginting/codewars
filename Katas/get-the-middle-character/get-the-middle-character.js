function getMiddle(s)
{
  //Code goes here!
  if (s.length % 2 === 0){
    return s.substr(s.length/2-1,2);
  }
  return s.substr(s.length/2,1);
}