const express = require("express");

const router = express.Router();
const authenticate = require("../middelwares/authenticate");
const Post = require("../models/post.models");

router.post("", authenticate, async (req, res) => {
  req.body.user = req.userID;
  try {
    const post = await Post.create(req.body);
    return res.status(200).send(post);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});
router.get("", authenticate, async (req, res) => {
  try {
    const post = await Post.find()
      .populate({
        path: "user",
        select: { name: 1 },
      })
      .lean()
      .exec();
    return res.status(200).send(post);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});
router.get("/:id", authenticate, async (req, res) => {
  req.body.user = req.userID;
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).send(post);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});
router.patch("/:id", authenticate, async (req, res) => {
  req.body.user = req.userID;
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(post);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});
router.delete("/:id", authenticate, async (req, res) => {
  req.body.user = req.userID;
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.status(200).send(post);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});
module.exports = router;
