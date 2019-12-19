const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(req.params);

  console.log(id);
  try {
    const response = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);

    console.log(response.data[0].ingredients);

    res.render("beerDetails", { beer: response.data[0] });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
