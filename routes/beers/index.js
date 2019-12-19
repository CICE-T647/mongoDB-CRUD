const Express = require("express");
const router = Express.Router();

router.use("/all", require("./allBeers.js"));
router.use("/details", require("./beerDetails"));

module.exports = router;
