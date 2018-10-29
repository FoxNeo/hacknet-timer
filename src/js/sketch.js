let counter = 0;
let timeleft = 35;
let milis = 100;

function convertSeconds(s) {
  let min = floor(s / 60);
  let sec = s % 60;
  return nf(min, 2) + ' : ' + nf(sec, 2) + ' . ';
}
function convertMiliseconds(s)
{
  let value = s % 100;
  return nf(value, 2);
}

function setup(){
  noCanvas();
  let timer = select('#timer');
  timer.html(convertSeconds(timeleft - counter));
  let miliseconds = select('#miliseconds');
  let container = select('#container');
  let body = select('#body');
  miliseconds.html(convertMiliseconds((timeleft *10000) - milis));
  let intervalMilis =  setInterval(setMilis, 10);
  let intervalSec =  setInterval(timeIt, 1000);
  
  function timeIt() {
    counter++;
     timer.html(convertSeconds(timeleft - counter));

     if((counter - timeleft == -29))
     {
      body.addClass('black-color');
      container.addClass('warning-color');
      body.removeClass('container');
     }
       if((counter - timeleft == -9))
       {
        body.removeClass('black-color');
        body.addClass('danger');
       }
    if (counter == timeleft)
      {
        milis = 0;
        counter = 0;
        clearInterval(intervalSec);
        clearInterval(intervalMilis);
        miliseconds.html(" 00");
      }
  }
  function setMilis()
  {
    milis++;
    miliseconds.html(convertMiliseconds((timeleft *10000) - milis));
    if(milis == timeleft)
      {
        milis = 0;
      }
 }
}