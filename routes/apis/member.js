const express = require("express");
const router = express.Router();
const Members = require("../../Member");

// Get All Members
router.get("/", (req, res) => res.json(Members));

// Get Single Members
router.get("/:id", (req, res) => {
  const found = Members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(Members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `Member Not Found On Id : ${req.params.id}` });
  }
});

module.exports = router;
