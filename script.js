function vizinho() {

  let numero = prompt('Digite um número: ')
  let saida = document.querySelector('p#res')

  if (Number(numero) != '') {

    let anterior = Number(numero) - 1
    let posterior = Number(numero) + 1
    saida.innerHTML = `O vizinho anterior é <strong>${anterior}</strong> e o posterior <strong>${posterior}</strong>`
    
  }else{
    //saida.innerHTML = 'Número obrigatório!'
    saida.innerHTML = ''
    alert('Número obrigatório!')
  }

}