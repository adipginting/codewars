function humanReadable (seconds) {
  let hours = parseInt(seconds / 3600).toString();
  let min = parseInt((seconds % 3600)/60).toString();
  let sec = ((seconds % 3600) % 60).toString();
  
  let returnValue = '';
  if (hours.length < 2){
    hours = "0"+ hours;
  }
  if (min.length < 2){
    min = "0"+ min;
  }
  
  if (sec.length < 2){
    sec = "0" + sec;
  }
  
  return `${hours}:${min}:${sec}`;
}