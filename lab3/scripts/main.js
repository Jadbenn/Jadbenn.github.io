// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName + "Btn").className += " active";
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices() {
    var selected = [];
    $('#dietSelect input:checked').each(function() {
        selected.push($(this).attr('name'));
    });

    var legumes = document.getElementById('legumes');
    var produitslaitiers = document.getElementById('produitslaitiers');
    var viandes = document.getElementById('viandes');
    var epicerie = document.getElementById('epicerie');
    var boissons = document.getElementById('boissons');
    var categories = document.getElementsByClassName('category');
    for (i = 0; i < categories.length; i++) {
        categories[i].innerHTML = "";
    }

    // obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(selected);

    // sort product list by price
    optionArray.sort(function(a, b) {
        return a.price - b.price;
    });

    // for each item in the array, create a checkbox, label and img element
    for (i = 0; i < optionArray.length; i++) {

        var productName = optionArray[i].name;
        var productPrice = optionArray[i].price;
        var productCategory = optionArray[i].category;

        // create the checkbox
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;

        // create a label for the checkbox
        var label = document.createElement('label');
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName + ": " + productPrice));

        // create an image for the checkbox
        var image = document.createElement('img');
        image.src = "images/" + productName + ".jpg";
        image.alt = productName;

        var div = document.createElement('div');

        if (productCategory === 'legumes') {
            legumes.appendChild(div);
        } else if (productCategory === 'produitslaitiers') {
            produitslaitiers.appendChild(div);
        } else if (productCategory === 'viandes') {
            viandes.appendChild(div);
        } else if (productCategory === 'epicerie') {
            epicerie.appendChild(div);
        } else {
            boissons.appendChild(div);
        }

        div.appendChild(image);
        div.appendChild(document.createElement("br"));
        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
    }
}

function selectedItems() {

    var ele = document.getElementsByName("product");
    var chosenProducts = [];

    var results = document.getElementById('resultsList');
    results.innerHTML = "";
    var totalCost = document.getElementById('totalCost');
    totalCost.innerHTML = "";

    var div, label, image;

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            div = document.createElement('div');
            results.appendChild(div);

            // create a label
            label = document.createElement('label');
            label.htmlFor = ele[i].value;
            label.appendChild(document.createTextNode(ele[i].value));

            // create an image for the checkbox
            image = document.createElement('img');
            image.src = "images/" + ele[i].value + ".jpg";
            image.alt = ele[i].value;

            div.appendChild(image);
            div.appendChild(document.createElement("br"));
            div.appendChild(label);

            div.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
        }
    }

    // add paragraph and total price
    var para = document.createElement("p");
    para.innerHTML = "Prix total: ";

    var span = document.createElement("span");
    span.innerHTML = "$" + getTotalPrice(chosenProducts).toFixed(2);

    para.appendChild(span);
    totalCost.appendChild(para);

}
