// 자바스크립트의 표준 내장객체
// 자바스크립트라는 언어가 기본적으로 가지고있는 객체를 뜻함 
// 참조자료: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects
// 종류: Object, Array, String, Number, Boolean

// 내장객체 Object의 대표적인 메서드
// keys
// values
// entries

const person = { name: '수빈', age: 20, mobile: '010-7770-4658' }

// person 객체의 키(key): name, age, mobile
// person 객체의 값(value): "수빈", 20, '010-7770-4658'

// Object.keys 메서드의 반환(return)값의 자료형은 문자열로 이루어진 배열(Array)임
console.log(Object.keys(person)) // => ['key1','key2','key3']

const keyArray = Object.keys(person)

// 상수 keyArray의 자료형은?  => array
// keyArray[0]의 자료형은? => string
// keyArray[1]의 자료형은? => string

// Object.values 메서드의 반환(return)값의 자료형은 값으로 이루어진 배열(Array)임 (해당 값의 타입이 그대로 적용됨) 
console.log(Object.values(person)) // => ['수빈', 20, '010-7770-4658']


const valueArray = Object.values(person)
// valueArray의 값은? =>  ['수빈', 20, '010-7770-4658']
// 자료형은? => array
// valueArray[1] 의 자료형은? => number

// 인덱스란? 예를들어 책에서의 페이지와 같은 개념, ex) 총 200페이지인 책에서 찾고싶은 내용이 담긴 페이지가 i번 페이지
// let book = ['서론', '본론1','본론2', '결론']
// book[2]


console.log(Object.entries(person))
// Object.entries는 배열로 이루어진 배열을 반환함 => [['key', value], ['key2', value2], ['key3', value3]]
//힌트 Object.entries 또한 배열(Array)을 반환함
// => [['name', '수빈'], ['age', 20], ['mobile', '010-7770-4658']]

const array = ['name', '수빈', 'age', 20, 'mobile', '010-7770-4658'];
const nameKey = array[192834];
const nameValue = array[192835];





// 배열은 [값, 값, 값]

//객체는 {키:값}

//혼종 => [키:값]

