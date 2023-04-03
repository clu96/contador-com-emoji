function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res =  document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] retorne e faça novamente!')
        res.innerHTML = 'Impossivel contar!'
    } else{
       res.innerHTML = 'Contando: '
       let i =  Number(inicio.value)
       let f =  Number(fim.value)
       let p =  Number(passo.value)
       if(i < f){
        //contagem progresciva
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449} `
            }
          
       }else{
        //contagem regresciva
             for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F448} ` 
             }
       }    
       res.innerHTML += `\u{1F3C1}`
    }
}