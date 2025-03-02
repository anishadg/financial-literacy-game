console.log("Financial Literacy Game is running!");
const express = require("express");
const app = express();

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static("public"));

// Define a route for the homepage
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Financial Literacy Game!</h1>");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

