// loading the package (Creating web server)
const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

// object of loaded package
const app = express();
dotenv.config();

// API endpoint (Creating API)
app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server started on PORT", PORT));

// .env is a file where we store secret or confedential information
