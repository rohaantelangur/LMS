const express = require("express");
const { find } = require("../models/users.models");
const router = express.Router();
const User = require("../models/users.models");

router.get("", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
})
module.exports = router;