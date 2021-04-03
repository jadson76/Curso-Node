const tecnlogias = new Map()
tecnlogias.set('react',{framework:false})
tecnlogias.set('angular',{framework:true})

console.log(tecnlogias.get('react'))

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{},'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl,ch) =>{
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))