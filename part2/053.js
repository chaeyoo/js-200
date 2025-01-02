// 053 클래스 정적 메소드와 속성 정의

// *** 정적 메소드드
// 정적 메소드: 클래스를 통해 직접 호출하는 메소드
// 클래스에서 정적 메소드는 static 키워드로 정의

class Product {
    static build(name, price) {
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    static getTaxPrice(product) {
        return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// 클래스로 상속 시 정적 메소드도 상속
// cf) 생성자 함수의 prototype 기반 상속과는 다름
class DesposableProduct extends Product {
    depose() {
        this.deposed = true;
    }
}

const gum = Product.build('껌', 1000); // Product 클래스의 build 정적 메소드 호출
console.log(gum);

const clothes = new DesposableProduct(1, '옷', 2000);
const taxPrice = DesposableProduct.getTaxPrice(clothes); // 상속받은 정적 메소드 호출 가능
console.log(taxPrice);

clothes.depose();
console.log(clothes.deposed);


// *** 정적 속성
class ProductWithCode {
    // 정적 속성 static, get 키워드 사용
    static get CODE_PREFIX() {
        return "PRODUCT - "
    }

    constructor(id) {
        this.id
        this.code = ProductWithCode.CODE_PREFIX + id;
    }
}

const product1 = new ProductWithCode('001');
console.log(ProductWithCode.CODE_PREFIX); // 정적 속성은 클래스로 직접 호출
console.log(product1.code);