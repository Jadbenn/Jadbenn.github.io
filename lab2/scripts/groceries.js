// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

//will contain products in the format outlined in the add function

const produits = [];

//adds a product to the products list
function add(name, Vegetarien, sansgluten, sanslactose, Organique, price) {
    produits.push({
        name: name,
        Vegetarien: Vegetarien,
        sansgluten: sansgluten,
        sanslactose: sanslactose,
        Organique: Organique,
        price: price
    });
}

add('Poivron vert', true, true, true, true, '$2.00');
add('Pain', true, false, true, false, '$1.50');
add('Filet de Poisson', false, true, true, true, '$5.99');
add('Lait 2%', true, true, false, false, '$3.50');
add('Lait sans Lactose', true, true, true, true, '$3.50');
add('Beurre', true, true, false, true, '$4.00');
add('Pommes', true, true, true, true, '$1.00');
add('Courgette', true, true, true, true, '$2.55');
add('Riz Blanc', true, true, true, false, '$5.25');
add('Fraises', true, true, true, false, '$2.75');
add('Farine', true, false, true, false, '$1.40');

//Sorts the produits in order from least to most expensive
produits.sort((p1, p2) => (p1.price > p2.price) ? 1 : -1);

// given restrictions provided, make a reduced list of produits
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, checkboxes) {
    let productNames = [];

    //Check if none of the checkboxes are checked, then no need to verify each item individually
    let anyChecked = false;
    for (let j = 0; j < checkboxes.length && anyChecked === false; j++) {
        if (checkboxes[j].checked) {
            anyChecked = true;
        }
    }
    //If none of the checkboxes are checked, display all items
    if (anyChecked === false) {
        for (let i = 0; i < prods.length; i++) {
            productNames.push(getPricedProduct(i));
        }
        return productNames;
    }

    nextProduct:
        for (let i = 0; i < prods.length; i++) {
            for (let j = 0; j < checkboxes.length; j++) {
                if (checkboxes[j].checked && !prods[i][getKeyFromCheckboxId(j)]) {
                    continue nextProduct;
                }
            }
            productNames.push(getPricedProduct(i));
        }
    return productNames;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    let totalPrice = 0.0;
    for (let i = 0; i < produits.length; i += 1) {
        if (chosenProducts.indexOf(getPricedProduct(i)) > -1) {
            totalPrice += getNumberFromPrice(produits[i].price);
        }
    }
    return totalPrice;
}

function getNumberFromPrice(priceString) {
    return parseFloat(priceString.substring(1))
}

function getPricedProduct(index) {
    return produits[index].name + '  ' + produits[index].price
}

function getKeyFromCheckboxId(id) {
    switch (id) {
        case 0:
            return 'Vegetarien';
        case 1:
            return 'sansgluten';
        case 2:
            return 'sanslactose';
        case 3:
            return 'Organique';
    }
}
