// Select elements from the HTML document to work with
const quoteElement = document.getElementById('quote');
const button = document.getElementById('new-quote');

// Create an asynchronous function to get quotes from the API
async function fetchQuote() {
  try {
    // Send a GET request to the API
    const res = await fetch('https://api.quotable.io/random');
    // Convert the response into a JavaScript object
    const quotedata = await res.json();
    // Replace existing quote on page with a new quote
    quoteElement.textContent = `"${quotedata.content}" — ${quotedata.author}`;
  }
  // Error handling 
  catch (err) {
    quoteElement.textContent = "Could not fetch quote.";
    console.error(err);
  }
}

// Add an event listener to the button
button.addEventListener('click', fetchQuote);
// Call the function on page load
fetchQuote();