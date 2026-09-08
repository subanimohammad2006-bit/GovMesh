const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to GovMesh API",
        status: "Running"
    });
});

// Server port
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`GovMesh server running on http://localhost:${PORT}`);
});