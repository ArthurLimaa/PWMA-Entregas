// acopro.js

function acompanharProduto() {
    const codigoAcompanhar = document.getElementById('codigoAcompanhar').value;

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

   
    const produtoAcompanhado = produtos.find(p => p.codigo === codigoAcompanhar);

    const resultadoAcompanhamento = document.getElementById('resultadoAcompanhamento');

    if (produtoAcompanhado) {
        
        resultadoAcompanhamento.innerHTML = `
            <p><strong>Código:</strong> ${produtoAcompanhado.codigo}</p>
            <p><strong>Nome:</strong> ${produtoAcompanhado.nome}</p>
            <p><strong>Marca:</strong> ${produtoAcompanhado.marca}</p>
            <p><strong>Preço:</strong> ${produtoAcompanhado.preco}</p>
        `;
    } else {
        resultadoAcompanhamento.textContent = 'Produto não encontrado. Verifique o código informado.';
    }
}
