function sum(n) {
    let ret = 0
    for (let i = 1; i <= n; i++) {
        ret = ret + i
        // ret += i 
    }
    return ret
}

console.log(sum(6))