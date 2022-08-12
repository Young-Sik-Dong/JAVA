onmessage = function(e) {
    var result = "A";
    var rate = e.data/10;
    // 문자열을 숫자로 변경
    rate = parseInt(rate);
    switch(rate) {
        case 10: result = "A";
        case 9: result = "A";
        break;
        case 8: result = "B";
        break;
        case 7: result = "C";
        break;
        case 6: result = "D";
        break;
        default : result = "F";
    }

    if(rate == 10 || rate == 9)
    result = "A";
    else if(rate == 8)
    result = "B";
    else if(rate == 7)
    result = "C";
    else if(rate == 6)
    result = "D";
    else
    result = "F";
    // postMessage 함수로 result 값을 전송
    postMessage(result);
}
