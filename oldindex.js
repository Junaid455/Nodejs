const express = require("express");
const app = express();
const path = require("path");
const Members = require("./Member");

const logger = require("./middleware/logger.js");

// Initialize Middleware
// app.use(logger);

app.get("/", (req, res) => {
  // res.send('<h1>Express App Runs</h1>');
  // res.sendFile(path.join(__dirname, 'public', 'index.html'));

  // Set Static Folder
  app.use(express.static(path.join(__dirname, "public")));
});

// Get All Members
app.get("/api/gemember", (req, res) => {
  res.json(Members);
});

// Get Single Members
app.get("/api/member/:id", (req, res) => {
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({ msg: `Member Not Found On Id : ${req.params.id}` });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started On Port : ${PORT}`));
