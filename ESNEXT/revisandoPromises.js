/* let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana','Bia','Regina','Maria'])
})

p.then(valor => console.log(valor))

setTimeout(function() {
    console.log('Executando callback...')

    setTimeout(function() {
        console.log('Executando callback...')
    },2000)    
},2000) */


function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('executando promise...')
            resolve('Vishhhhhh')
        },tempo)
    })
}

let p = esperarPor(3000).then(texto => console.log(texto))