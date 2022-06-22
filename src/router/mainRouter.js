const { Router } = require("express"); //object destructuring
const mainController = require("../controllers/mainController");
const mainRouter = Router();

mainRouter.get('/', mainController.home);

mainRouter.get('/detail/:id', mainController.detail);

module.exports = mainRouter;