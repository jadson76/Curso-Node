const soma = (a,b) => a+b
console.log(soma(20,35))

//Arrow Function(this)

const lexico1 = () => console.log(this === exports)
lexico1()
//parametro default

function log(texto = 'Node') {
    console.log(texto)
}
log('Java')

//operador rest

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,10,25))