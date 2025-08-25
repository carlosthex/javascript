let num = [9, 5, 2, 6, 4]

/*for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}*/
let i = 0
for (i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log(num.indexOf(9))