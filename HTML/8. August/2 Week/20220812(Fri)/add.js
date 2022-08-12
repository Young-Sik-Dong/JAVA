// onmessage = function (e) { // 웹사이트로부터 숫자를 기다림
//     var sum = 0;
//     var from = parseInt(e.data.from);
//     // 받은 데이터에서 from에 해당되는 값
//     var to = parseInt(e.data.to);
//     // 받은 데이터에서 to에 해당되는 값
//     for(var i=froml; i<=to; i++)
//         sum += i;
//     this.postMessage(sum); // 합산한 값을 worker객체로 보냄
// }

onmessage = function (e) {
    var sum = 0;
    var from = parseInt(e.data.from);
    var to = parseInt(e.data.to);
    for(var i=from; i<=to; i++)
    sum += i;
    this.postMessage(sum);
    }