// 037 함수 기본 매개변수 처리하기

// 기본 매개변수는 ES6에 추가된 것으로
// 매개 변수를 정의할 때 기본으로 할당될 인자값고 함께 작성

function drawChart(width = 200, height = 400) {
    console.log(`${width} x ${height} 차트를 그립니다.`)
}

drawChart(100);
drawChart();

// 기본 매개 변수는 이전 매개변수를 변수로도 사용 가능
function drawChart2(width = 200, height = width / 2) {
    console.log(`${width} x ${height} 차트를 그립니다.`)
}

drawChart2(300);
drawChart2();