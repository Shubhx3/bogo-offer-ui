document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bogo-form');
    const totalPriceElement = document.getElementById('total-price');
    const options = form.querySelectorAll('input[type="radio"]');
    
    
    /**
     * Updates the price displayed on the page based on the selected option in the form.
     *
     * @return {void} This function does not return anything.
     */
    function updatePrice() {
        const selectedOption = form.querySelector('input[type="radio"]:checked');
        const price = parseFloat(selectedOption.value);
        totalPriceElement.textContent = `$${price.toFixed(2)} USD`;
    }
    
    // Add event listeners to each option
    options.forEach(option => {
        option.addEventListener('change', function() {
            updatePrice();
            options.forEach(opt => {
                opt.closest('.option').classList.remove('selected');
            });
            this.closest('.option').classList.add('selected');
        });
    });
    
    // Add event listener to the add to cart button
    const addToCartButton = document.getElementById('add-to-cart');
    addToCartButton.addEventListener('click', function() {
        const selectedOption = form.querySelector('input[type="radio"]:checked');
        const optionText = selectedOption.nextElementSibling.querySelector('.option-title').textContent;
        const price = totalPriceElement.textContent;
        
        let customizations = '';
        const customizationDiv = selectedOption.closest('.option').querySelector('.customization');
        const selects = customizationDiv.querySelectorAll('select');
        selects.forEach((select, index) => {
            customizations += `\n#${index + 1}: ${select.options[select.selectedIndex].text}`;
        });
        
        alert(`Added to cart:\n${optionText}\nPrice: ${price}${customizations}`);
    });

    // Initialize the second option as selected
    options[1].closest('.option').classList.add('selected');
});