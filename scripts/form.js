const products = ["Can Opener", "Computer", "Electric Shaver", "Fan", "Umbrella", "Washing Machine"];
createOptions(products);
function createOptions(products) {
    // Use 'select' to target the first <select>, or use '#yourId' if your <select> has an id
    const choices = document.querySelector('select'); // or document.querySelector('#productSelect')
    if (!choices) {
        console.error('Select element not found. Check your form.html and selector.');
        return;
    }
    products.forEach(product => {
        const option = document.createElement("option");
        option.textContent = product;
        option.value = product;
        choices.appendChild(option);
    });
}