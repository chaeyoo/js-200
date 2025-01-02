console.log('hello');

window.hello = function hello(name) {
    console.log('hello ' + name)
}

// 윈도우에 메소드를 추가하면 window를 통하지 않고 직접 해당 메소드 호출 가능