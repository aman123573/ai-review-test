function calculateTotal(items) {
    let total = 0

    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }

    return total;
}

function getUser(id, users) {
    return user.find(user => user.id == id);
}

const products = [
    { price: 100 },
    { price: 200 }
];

console.log(calculateTotal(products));