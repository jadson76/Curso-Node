//let e const

{
    var a = 2

    let b = 2
}

//console.log(b)

//Template String

const produto = 'iPad'
console.log (`${produto} é caro`)

//Destrucring

const [l,e,...tras] = "Cod3r"
console.log(l,e,tras)

const {idade: i, nome: n} = {nome:'Ana', idade:9}
console.log(i,n)