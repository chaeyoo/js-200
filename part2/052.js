// 052 클래스 상속 이해하기

class Chart {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    drawLine() {
        console.log('draw line')
    }
}

class BarChart extends Chart {
    constructor(width, height) {
        super(width, height) // 상속 시 생성자 함수에서 상속한 부모 클래스의 생성자 호출할 때 super 키워드 사용 
        // super가 부모의 생성자 함수를 가리킴
    }

    draw() {
        this.drawLine();
        console.log(`draw ${this.width} x ${this.height} barChart`);
    }
}

const barChart1 = new BarChart(100, 100);
barChart1.draw();