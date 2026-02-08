let products = [];

document.addEventListener('DOMContentLoaded', () => {
  products = Array.from(document.querySelectorAll('main'));
});

function filterProducts(category) {
  const table = document.querySelector('#product-table');
  table.innerHTML = '';
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  let row;
  let index = 0;
  products.forEach((product) => {
    if (category === 'all' || product.dataset.category === category) {
      if (index % 2 === 0) {
        row = document.createElement('tr');
        tbody.appendChild(row);
      }
      const td = document.createElement('td');
      td.appendChild(product.cloneNode(true));
      row.appendChild(td);
      index++;
    }
  });
}

function sortProducts(value) {
  const table = document.querySelector('#product-table');
  table.innerHTML = '';
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  let sortedProducts = products.slice();
  if (value === 'price') {
    sortedProducts.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
  } else if (value === 'rating') {
    sortedProducts.sort((a, b) => parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating));
  }

  let row;
  let index = 0;
  sortedProducts.forEach((product) => {
    if (index % 2 === 0) {
      row = document.createElement('tr');
      tbody.appendChild(row);
    }
    const td = document.createElement('td');
    td.appendChild(product.cloneNode(true));
    row.appendChild(td);
    index++;
  });
}