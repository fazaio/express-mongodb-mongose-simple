const router = require("express").Router();
const users = require("../controllers/users");

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/all", users.READS_USERS);
router.post("/create", users.CREATES_USERS);
router.post("/update/:id", users.UPDATE_USERS);
router.delete("/delete/:id", users.DELETE_USERS);

module.exports = router;
