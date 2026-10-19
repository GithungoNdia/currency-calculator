// Link HTML elements to variables using their IDs
document.getElementById('calcBtn').addEventListener('click', function() {
    
    // 1. Get input values typed by the user
    const usdAmount = parseFloat(document.getElementById('usdAmount').value);
    const rate = parseFloat(document.getElementById('exchangeRate').value);
    
    // 2. Validate input (ensure user typed a number greater than zero)
    if (isNaN(usdAmount) || usdAmount <= 0) {
        alert("Please enter a valid USD amount to calculate.");
        return;
    }

    // 3. Mathematical Calculations
    const grossKsh = usdAmount * rate;
    const internet = grossKsh * 0.15;
    const savings = grossKsh * 0.25;
    const living = grossKsh * 0.60;

    // 4. Update HTML layout text with formatted currency calculations
    document.getElementById('grossKsh').innerText = grossKsh.toLocaleString() + " KSh";
    document.getElementById('internetFund').innerText = internet.toLocaleString() + " KSh";
    document.getElementById('savingsFund').innerText = savings.toLocaleString() + " KSh";
    document.getElementById('livingFund').innerText = living.toLocaleString() + " KSh";

    // 5. Unhide results display window box elements smoothly
    document.getElementById('results').style.display = "block";
});
