var isstop=true;
var s=0,min=0,hr=0;

function start()
{ 
 if(isstop==true)
    {
        
        isstop=false;
        timer();

    }

}
function timer(){
    if(isstop==false)
        {
           s=parseInt(s);
           min=parseInt(min);
           hr=parseInt(hr);
            s++;
            if(s==60){
                min++;
                s=0;
            }
            if(min==60){
                hr++;
                min=0;
            }
            if(s<10){
                s="0"+s;
            }
            if(min<10){
                min="0"+min;
            }
            if(hr<10){
                hr="0"+hr;
            }
            stopwatch.innerHTML= hr + " : " + min + " : " + s;
            setTimeout("timer()",1000);
        }

}
function stop()
{
    isstop=true;
}
function reset(){
    istop=true;
    s=0;
    min=0;
    hr=0;
    stopwatch.innerHTML="00 : 00 : 00";
   
}