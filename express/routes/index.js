const { Router } = require("express");
const { getCharById } = require("../controlers/getCharById");
const { getCharDetail } = require("../controlers/getCharDetail");
const { favs } = require("./utils/favs");

const router = Router();

router.get("/onsearch/:onsearchId", getCharById);
router.get("/detail/:detailId", getCharDetail);

router.post("/create", (req, res) => {
  favs.push({ ...req.body });
  res.status(201).json({ msg: "add ok", data: favs });
});

router.get("/get", (req, res) => {
  res.status(201).json(favs);
});

router.delete("/delete", (req, res) => {
  const { id } = req.params;
  favs = favs.filter(pj => pj.id !== +id);
  return res.status(200).json({ msg: "deleted", data: favs });
});

module.exports = router;
