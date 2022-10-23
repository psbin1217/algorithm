//object가 뭐임? 
//=> 객체 라고 부르며, key와 value로 이루어져 있으며, key를 통해 접근할 수 있다.

//객체를 선언하는법
// let 변수명 = { key: value, key2: value2, key3: value3, ... }

//아래 person 객체에서 key 는 name 이며, value 는 '수빈' 이다.
let person = {
    name: '수빈',
    age: '23',
    mobile: '010-7770-4658',
    spec: {
        height: '',
        weight: '',
    },
    say: () => { console.log('안녕') }
}

//위에 선언한 person 객체에서 name 값을 구하시오
console.log(person.name)

// person 의 자료형 => object
console.log(typeof person)

// person.name 의 자료형 => string
console.log(typeof person.name)

// person.age 의 자료형 => string
console.log(typeof person.age)

// person.mobile 의 자료형 => string
console.log(typeof person.mobile)

person.age = 20

// person.age의 자료형 => number
console.log(typeof person.age)

// person.spec의 자료형 => object
console.log(typeof person.spec)

// 메서드란? 객체에 속해있는 함수 (메서드가 의미하는것이 즉, 함수.)
// person.say의 자료형 => function
console.log(typeof person.say)


// 변수 선언 
// let 변수명 = 값

// 함수선언식
// function 함수명() { 내용 }

// 함수 표현식
// let 함수명 = function() { 내용 }

// 함수 표현식 (arrow function)
// let 함수명 = () => { 내용 } 

// solution이라는 이름의 함수를 선언함.
const solution = () => {
    console(555);
}
// person.solution 에 위에서 선언한 solution이라는 이름의 함수를 저장함
person.solution = solution

// person.solution2 에 이름이없는 화살표 함수를 저장함
person.solution2 = () => { console.log(555) }

person.solution()
person.solution2()

