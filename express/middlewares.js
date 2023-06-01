module.exports = {
  primerMiddelware: (req, res, next) => {
    console.log("hola estoy en la ruta>", req.url);
    next();
  },
};
