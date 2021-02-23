//make area for lap and have it replace the text there for every lap
//add variable for running vs not, when not running lap will reset timer and when is running itll add it to a lap
//decimals are tenth of a second not milliseconds

$(function () {
let time = 0;
let $startPause = $('#startORpause');
let $lapReset = $('#lapORreset');
let isRunning = false;

    function start(){

    }
    function pause(){
        
    }
    function lap(){

    }
    function clear(){

    }
    function checkStartPause(){
        if(!isRunning){
            $lapReset.html("lap");
            $startPause.html('pause');
            console.log(isRunning);
            start();
            isRunning = true;
        }else{
            console.log(isRunning);
            $lapReset.html("reset");
            $startPause.html('start');
            pause();
            isRunning = false;
        }
    }

    function checkLapClear(){
        if(!isRunning){
            clear();
        }else{
            lap();
        }
    }
    
    $startPause.on('click', checkStartPause);
    $lapReset.on('click', checkLapClear);
})