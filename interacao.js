// Média aritmética.
// Soma de todos os elementos(Todas as notas bimestrais), dividindo-se pelo número delas mesmas.

function calcular() {
    // se tu nao pegar o value tu nao tem o conteúdo experimente remover 
    // o value de uma das linhas abaixo e executar
    // vai imprimir no console log a linha de comando tu vai notar 
    // já passei direto pra float pq economiza variaveis
    
    let inputnota1 = parseFloat(document.getElementById("nota1").value);
    let inputnota2 = parseFloat(document.getElementById("nota2").value);
    let inputnota3 = parseFloat(document.getElementById("nota3").value);
    let inputnota4 = parseFloat(document.getElementById("nota4").value);
    let resultado = document.getElementById("resultado");
    
    // aqui só pra tu ver como imprime
    console.log(inputnota1)
    console.log(inputnota2)
    console.log(inputnota3)
    console.log(inputnota4)
   
    // aqui ja nomei direto as variaveis
    let somanotas = (inputnota1 + inputnota2 + inputnota3 + inputnota4) / 4;

    console.log(somanotas);
    //aqui faltou o = 
    // e tu tem que formatar como vai sair pq ta só um texto simples 
    resultado.innerHTML = `<p> A média do Zé é ,${somanotas} .</p>` 
}

