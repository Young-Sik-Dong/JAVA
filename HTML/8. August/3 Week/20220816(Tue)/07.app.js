function initialize(){
    // offsetWidth = 요소의 가로 너비, offsetHeight = 요소의 세로 높이
    // 캔버스의 margin을 제외하고, padding값과 border값까지 계산한 값을 가져옴
    graph1.width=document.getElementById('gr1').offsetWidth;
    graph1.height=document.getElementById('gr1').offsetHeight;
}
// 캔버스 크기 설정
initialize();
// 그래프 1 데이터 객체
var graphInfo1 = {
    title: "주요 도시 연평균 미세먼지 농도",
    max: 35,
    data: [// 가로 데이터, 세로 데이터, 그래프 색상
        {city: "서울", range: 23, color: "#fe802c"},
        {city: "부산", range: 26, color: "#ffd100"},
        {city: "대구", range: 26, color: "#81d733"},
        {city: "인천", range: 29, color: "#666666"},
        {city: "광주", range: 26, color: "#43cbff"},
        {city: "대전", range: 28, color: "#3183c2"},
        {city: "진주", range: 25, color: "#d4155b"}
    ]
}
// 그래프1 그리기 함수
function drawGraph1(){
    //getContext("2d") : 랜더링 컨텍스트와 그리기 함수를 사용할 수 있게 하는 메소드
    var ctx = graph1.getContext("2d");
    // 그래프 1 데이터 객체
    var data = graphInfo1;
    // 초기 설정
    // 채우기 색 흰색
    ctx.fillStyle = "white";
    // 0,0 부터 캔버스의 가로, 세로 크기만큼 흰색 사각형 그리기
    ctx.fillRect(0, 0, graph1.width, graph1.height);
    // 타이틀
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.fillText(data.title, graph1.width / 2, 35);
    ctx.font = "12px Arial";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for(var i=0; i<=data.max; i+=5){
        var y = 65+i*4.5;
        ctx.moveTo(50, y);
        ctx.lineTo(graph1.width-20, y);
        ctx.fillText(data.max-i, 40, y);
    }
    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
    ctx.stroke();
    
    var y = 65+data.max*4.5;
    for(var i=0; i<data.data.length; i++){
        var x = 110 + i * 30;
        ctx.fillStyle = data.data[i].color;
        ctx.fillRect(x, y-data.data[i].range*4.5, 25, data.data[i].range*4.5);
    }
    ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
    ctx.fillRect(50, y+10, graph1.width-70, 30);
    for(var i=0; i<data.data.length; i++){
        var x = 65+i*4.5;
        ctx.fillStyle = data.data[i].color;
        ctx.fillRect(x, y+20, 10, 10);
        ctx.font = "11px Arial";
        ctx.textAlign = "left";
        ctx.fillStyle = "black";
        ctx.fillText(data.data[i].city, x+14, y+25);
    }
}