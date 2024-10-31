function showPopup(name, description, price) {
    document.getElementById("modalPizzaName").textContent = name;
    document.getElementById("modalPizzaDescription").textContent = description;
    document.getElementById("modalPizzaPrice").textContent = `$${price.toFixed(2)}`;
    
    // Show the modal
    document.getElementById("pizzaModal").style.display = "flex";
}

function closePopup() {
    document.getElementById("pizzaModal").style.display = "none";
}
