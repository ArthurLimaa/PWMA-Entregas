

function cadastrarProduto() {
    const codigo = document.getElementById('codigo').value;
    const nome = document.getElementById('nome').value;
    const marca = document.getElementById('marca').value;
    const preco = document.getElementById('preco').value;

    
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    
    const produtoExistente = produtos.find(p => p.codigo === codigo);

    if (!produtoExistente) {
     
        produtos.push({ codigo, nome, marca, preco });

      
        localStorage.setItem('produtos', JSON.stringify(produtos));

        alert('Produto cadastrado com sucesso!');
    } else {
        alert('Produto com código já cadastrado. Utilize um código diferente.');
    }
}
