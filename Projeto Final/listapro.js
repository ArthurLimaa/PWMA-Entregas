

document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    const table = document.createElement('table');
    table.classList.add('product-table');

   
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    ['Código', 'Nome', 'Marca', 'Preço'].forEach(columnName => {
        const th = document.createElement('th');
        th.textContent = columnName;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    
    const tbody = document.createElement('tbody');

    
    produtos.forEach(product => {
        const row = document.createElement('tr');

    
        ['codigo', 'nome', 'marca', 'preco'].forEach(column => {
            const cell = document.createElement('td');
            cell.textContent = product[column];
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    productList.appendChild(table);
});
