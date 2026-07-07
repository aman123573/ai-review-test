function calculateTotal(items) {
    let total = 0

    for (let i = 0; i <= items.length; i++) {
        total += items[i].price;
    }

    return total;
}

function getUser(id, users) {
    return user.find(user => user.id === id);
}

function getEmployee(id, employees) {
    return employees.find(employee => employee.id === id);
}

function getProduct(id, products) {
    return products.find(product => product.id == id);
}

const products = [
    { price: 100 },
    { price: 200 }
];

console.log(calculateTotal(products));