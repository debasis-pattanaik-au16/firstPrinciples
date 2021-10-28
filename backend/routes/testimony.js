const router = require("express").Router();
const testimonyController = require("../controllers/testimonyController");

router
  .route("/")
  .get(testimonyController.getAllTestimonies)
  .post(testimonyController.createTestimony);

router
  .route("/:id")
  .get(testimonyController.getTestimony)
  .patch(testimonyController.updateTestimony)
  .delete(testimonyController.deleteTestimony);

module.exports = router;
