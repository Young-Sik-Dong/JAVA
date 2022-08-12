onmessage = function (e) {
    var result = 0;
    var op1 = parseInt(e.data.op1);
    var op2 = parseInt(e.data.op2);
    result = op1 * op2;

    this.postMessage(result);
    }