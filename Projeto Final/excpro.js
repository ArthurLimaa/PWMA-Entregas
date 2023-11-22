// excpro.js

function excluirProduto() {
    const codigoExcluir = document.getElementById('codigoExcluir').value;

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    produtos = produtos.filter(p => p.codigo !== codigoExcluir);

    localStorage.setItem('produtos', JSON.stringify(produtos));

    alert('Produto excluído com sucesso!');
}
