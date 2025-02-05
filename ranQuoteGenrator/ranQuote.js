async function getRandomQuote() {
    try {
        console.log("Fetching a random quote...");

        // Fetch a random quote from Quotable API
        const response = await fetch("https://api.quotable.io/random");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API response:", data);

        // Select the quote display element
        const quoteText = document.getElementById("quoteText");

        // Display the quote and author
        quoteText.textContent = `"${data.content}" - ${data.author}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("quoteText").textContent = "Failed to fetch quote. Please try again.";
    }
}
