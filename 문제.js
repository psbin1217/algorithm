const person = { name: '수빈', age: 20, mobile: '010-7770-4658' }


const keyArray = Object.keys(person)
const valueArray = Object.values(person)
const entriesArray = Object.entries(person)


console.log(Object.keys(person))
// 출력값: ['name','age','mobile']
console.log(Object.values(person))
// 출력값: ['수빈', 20, '010-7770-4658']
console.log(Object.entries(person))
// 출력값: [['name','수빈'], ['age',20], ['mobile','010-7770-4658']]


console.log(keyArray[2])
//출력값: 'mobile'

console.log(valueArray)
//출력값: ['수빈',20,'010-7770-4658']

console.log(valueArray[1])
//출력값: 20 

console.log(entriesArray[2])
//출력값:['mobile','010-777-4658']

console.log(keyArray[1])
//출력값: 'age'

// Object는 표xxxx체 이다. => 표준내장객체

// Object는 대표적으로 xxxx(), xxxxxx(), xxxxxxx() 메서드를 갖는다 => keys , values, entries

// 복합연산자의 규칙

console.log(++person.age)
//=> 21
console.log(person.age)
//=> 21

console.log(person.age++)
//=> 21