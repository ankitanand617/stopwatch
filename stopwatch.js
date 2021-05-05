
var hourcount1 = 0;
var hourcount2 = 0;
var mincount1 = 0;
var mincount2 = 0;
var seccount1 = 0;
var seccount2 = 0;

function stopfun() {
    clearInterval(intervalId);
    hourcount1 = 0;
    hourcount2 = 0;
    mincount1 = 0;
    mincount2 = 0;
    seccount1 = 0;
    seccount2 = 0;
    document.getElementById('seconds').innerHTML = seccount2 + "" + seccount1;
    document.getElementById('minutes').innerHTML = mincount2 + "" + mincount1;
    document.getElementById('hours').innerHTML = hourcount2 + "" + hourcount1;

    document.getElementById("pause").disabled = true;
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById('pause').innerHTML = "Pause";

}

function pausefun() {
    var x = document.getElementById('pause').innerHTML;

    if (x == 'Pause') {
        clearInterval(intervalId);
        document.getElementById('pause').innerHTML = "Continue";
    }
    else {
        startfun();
        document.getElementById('pause').innerHTML = "Pause";

    }
}


function startfun() {
    intervalId = setInterval(start, 1000);
    document.getElementById("pause").disabled = false;
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
}
function start() {
    if (seccount1 < 9) {
        seccount1++;

    }
    else {
        seccount1 = 0;
        if (seccount2 < 5) {
            seccount2++;
        }
        else {
            seccount2 = 0;
            if (mincount1 < 9) {
                mincount1++;
            }
            else {
                mincount1 = 0;
                if (mincount2 < 5) {
                    mincount2++;
                }
                else {
                    mincount2 = 0;
                    if (hourcount1 < 9) {
                        hourcount1++;
                    }
                    else {
                        hourcount1 = 0;
                        hourcount2++;
                    }
                }
            }
        }

    }
    document.getElementById('seconds').innerHTML = seccount2 + "" + seccount1;
    document.getElementById('minutes').innerHTML = mincount2 + "" + mincount1;
    document.getElementById('hours').innerHTML = hourcount2 + "" + hourcount1;
}

function dispaly()
{
    time=new Date();
    document.getElementById('time').innerHTML=time;
}
setInterval(dispaly,1000);
