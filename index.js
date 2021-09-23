const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/apis/member");

const logger = require("./middleware/logger.js");

app.get("/", (req, res) => {
  // Set Static Folder
  app.use(express.static(path.join(__dirname, "public")));
});

// Member Api
app.use('/api/member/', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started On Port : ${PORT}`));
