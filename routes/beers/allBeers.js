const express = require("express");
const router = express.Router();
const axios = require("axios");
const isAdminRole = require("../../middlewares/isAdminRole");

router.get("/", isAdminRole, async (req, res) => {
  try {
    console.log("ENTRA");
    const response = await axios.get("https://api.punkapi.com/v2/beers");

    console.log(response);

    res.render("beers", { beers: response.data });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
