// 051 클래스 정의하기

// 클래스: 별도 타입의 객체를 생성하는 설계 도면으로 속성과 메소드 정의
// 클래스로부터 만들어진 객체들을 인스턴스라고 함

class Cart {
    constructor() {
        this.store = {};
    }

    addProduct(product) {
        this.store[product.id] = product
    }

    getProduct(id) {
        return this.store[id]
    }
}

const cart1 = new Cart();

cart1.addProduct({ id: 1, name: '노트북' });
console.log(cart1.store)

const p = cart1.getProduct(1);
console.log(p);