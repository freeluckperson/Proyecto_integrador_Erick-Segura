const router = require("express").Router();

const getCharById = require("../controlers/getCharById");

const { postFav, deleteFav } = require("../controlers/handleFavorites");



router.get("/character/:id", getCharById);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
