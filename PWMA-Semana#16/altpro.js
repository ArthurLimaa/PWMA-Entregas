// altpro.js

function alterarProduto() {
    const codigoAlterar = document.getElementById('codigoAlterar').value;
    const novoNome = document.getElementById('novoNome').value;
    const novaMarca = document.getElementById('novaMarca').value;
    const novoPreco = document.getElementById('novoPreco').value;

    
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    const produtoParaAlterar = produtos.find(p => p.codigo === codigoAlterar);

    if (produtoParaAlterar) {
   
        produtoParaAlterar.nome = novoNome;
        produtoParaAlterar.marca = novaMarca;
        produtoParaAlterar.preco = novoPreco;

        localStorage.setItem('produtos', JSON.stringify(produtos));

        alert('Produto alterado com sucesso!');
    } else {
        alert('Produto não encontrado. Verifique o código informado.');
    }
}
