const express = require("express");
const app = express();
app.use(express.json());
const connect = require("./configs/db");
const { register, login } = require("./controllers/auth.controllers");
const userController = require("./controllers/users.controllers");
const postController = require("./controllers/post.controllers");
const { body, validationResults } = require("express-validator");

app.post(
  "/register",
  body("name").trim().not().isEmpty().withMessage("Please enter your name"),
  body("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please enter a valid email")
    .isEmail(),
  body("password").trim().not().isEmpty(),
  register
);
app.post(
  "/login",
  body("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please enter a valid email")
    .isEmail(),
  body("password").trim().not().isEmpty(),
  login
);

app.use("/users", userController);
app.use("/post", postController);

app.listen(5000, async () => {
  try {
    await connect().then(() => console.log("mongodb connect successfully"));
    console.log("Listening on port 5000");
  } catch (error) {
    console.log(error);
  }
});
