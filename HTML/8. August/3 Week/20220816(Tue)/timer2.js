var count = 0;
var control = true;

    onmessage = function(e) {
        if(e.data == "start" && control == true) {
            timer = setInterval(myCallback, 1000);
        }
        else if(e.data == "stop" && count != 0) {
            clearInterval(timer);
            control = false;
        }
    }
    function myCallback() {
        count++;
        postMessage(count);
    }
