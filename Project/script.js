const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);

})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
}

const sr = ScrollReveal ({
	distance: '30px', 
	duration: 2500,
	reset: true
})
sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img',{delay:200, origin:'right'});
sr.reveal('.container, .about, .menu, .contact',{delay:200, origin:'bottom'});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Select the cart icon
const cartIcon = document.getElementById("add-to-cart");

// Function to create and show the popup
function displayCartPopup() {
	if(cartArray.length == 0){
		const hideText = document.getElementById("text")
		hideText.classList.remove("genera-displayNone")
	}else{
		const hideText = document.getElementById("text")
		hideText.classList.add("genera-displayNone")
		const popup_content = document.getElementById("popup-content-items-id")
		console.log(popup_content)	
		cartArray.forEach((items) => {
			const pizzaName = items.children[1].children[0].children[0].innerText
			const pizzaPrize = items.children[1].children[1].children[0].innerText
			const newitem = document.createElement("P")
			 newitem.innerText = `pizza: ${pizzaName} price: ${pizzaPrize}`
			 newitem.classList.add("newItemlass")
			popup_content.appendChild(newitem)
			
			
		})
	}
	const popup = document.getElementById("cart-popup");
    popup.classList.remove("cart-popup-displaynone")
	
}

// Function to close the popup
function closePopup() {
	const popup_content = document.getElementById("popup-content-items-id")
	popup_content.innerHTML = ""
    const popup = document.getElementById("cart-popup");
    popup.classList.add("cart-popup-displaynone")
	
}


// Add event listener to the cart icon to display popup
cartIcon.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    displayCartPopup(); // Show the popup
});

const button = document.getElementById("close-button")

button.addEventListener("click", function(event) {
	
    event.preventDefault(); // Prevent default link behavior
    closePopup();
	
});






const pizza = document.getElementById("pizza");

pizza.addEventListener("click", (e) => {
	cartArray.push(pizza)
	console.log(cartArray)
})






const pizza1 = document.getElementById("pizza1");

pizza1.addEventListener("click", (e) => {
	cartArray.push(pizza1)
	console.log(cartArray)
})


const pizza2 = document.getElementById("pizza2");

pizza1.addEventListener("click", (e) => {
	cartArray.push(pizza2)
	console.log(cartArray)
})

const pizza3 = document.getElementById("pizza3");

pizza1.addEventListener("click", (e) => {
	cartArray.push(pizza3)
	console.log(cartArray)
})

//dont touch bitch
const cartArray = []