// 002 Node.js REPL로 코드 실행하기

{/* <내용> */}
// REPL: Read-Eval-Print-Loop
// => 사용자가 입력한 결과를 바로 반환하는 대화형 Shell 환경
// => 간단한 js 디버깅, 노드의 라이브러리 테스트할 때 유용

// Read - 사용자의 명령어를 입력받으면 메모리에 JS 데이터 구조로 Read(분석)
// Eval - 분석한 명령어를 내부  데이터 구조로 가져와서 Evaluate(평가), 해당 명령어 실행
// Print - Eval에 의해 얻어진 결과를 받아서 사용자에게 Print(출력)
// Loop - Print 까지 완료된 후 다시 Read 상태로 돌아가는 환경이 Loop(반복)

{/* <코드> */}
// C:\Users\SAMSUNG>node
// Welcome to Node.js v20.9.0.

// > 1+2
// 3
// > x=5
// 5
// > var foo = 'hello'
// undefined
// > console.log(foo)
// hello
// undefined // console.log()의 리턴값이 undefined이기 때문

{/* <추가설명> */}
// Node.js REPL에서는 각 표현식의 평가 결과를 보여줌
// 출력 후 console.log()의 반환값인 undefined를 보여준다