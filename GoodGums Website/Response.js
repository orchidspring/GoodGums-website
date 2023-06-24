

// Get the query parameters from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get the order details from the query parameters
const product = urlParams.get('product');
const quantity = urlParams.get('quantity');
const name = urlParams.get('name');
const email = url