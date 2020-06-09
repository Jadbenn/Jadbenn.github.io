// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [{
        name: "Poivron vert",
        vegetarian: true,
        glutenFree: true,
        price: 2.05,
        organic: true,
        category: "legumes"
    },
    {
        name: "Courgette",
        vegetarian: true,
        glutenFree: false,
        price: 1.80,
        organic: true,
        category: "legumes"
    },
    {
        name: "Poulet",
        vegetarian: false,
        glutenFree: true,
        price: 10.50,
        organic: false,
        category: "viandes"
    },
    {
        name: "Pain",
        vegetarian: true,
        glutenFree: false,
        price: 1.50,
        organic: false,
        category: "epicerie"
    },
    {
        name: "Filet de Poisson",
        vegetarian: false,
        glutenFree: true,
        price: 5.99,
        organic: false,
        category: "viandes"
    },
    {
        name: "Flocon d'avoine",
        vegetarian: true,
        glutenFree: true,
        price: 10.25,
        organic: true,
        category: "epicerie"
    },
    {
        name: "Riz Blanc",
        vegetarian: true,
        glutenFree: false,
        price: 2.05,
        organic: false,
        category: "epicerie"
    },
    {
        name: "Jus d'orange organique",
        vegetarian: true,
        glutenFree: true,
        price: 1.25,
        organic: true,
        category: "boissons"
    },
    {
        name: "Boisson cola",
        vegetarian: true,
        glutenFree: true,
        price: 1.99,
        organic: false,
        category: "boissons"
    },
    {
        name: "Eau",
        vegetarian: true,
        glutenFree: true,
        price: 0.99,
        organic: false,
        category: "boissons"
    },
    {
        name: "Fromage",
        vegetarian: true,
        glutenFree: true,
        price: 4.05,
        organic: false,
        category: "produitslaitiers"
    },
    {
        name: "Steak de Boeuf",
        vegetarian: false,
        glutenFree: true,
        price: 8.99,
        organic: true,
        category: "viandes"
    },
    {
        name: "Lait 2%",
        vegetarian: true,
        glutenFree: true,
        price: 2.99,
        organic: true,
        category: "produitslaitiers"
    },
    {
        name: "Fraises",
        vegetarian: true,
        glutenFree: true,
        price: 2.50,
        organic: true,
        category: "legumes"
    },
    {
        name: "Kiwi",
        vegetarian: true,
        glutenFree: true,
        price: 3.50,
        organic: true,
        category: "legumes"
    },
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(restriction) {
    let product_names = [...products];

    if (restriction.includes("Vegetarian")) {
        product_names = product_names.filter(product => product.vegetarian);
    }
    if (restriction.includes("GlutenFree")) {
        product_names = product_names.filter(product => product.glutenFree);
    }
    if (restriction.includes("Organic")) {
        product_names = product_names.filter(product => product.organic);
    }

    return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}
