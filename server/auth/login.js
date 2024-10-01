const express = require("express");
const router = express.Router();
const User = require("../models/users");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

router.post("/user-login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // const isMatch = await bcrypt.compare(password, user.password);
        const isMatch = password === user.password
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }
        // const accessToken = jwt.sign({ email: email, role: role}, process.env.SECRET_KEY);
        // res.cookie("accessToken", accessToken, { httpOnly: true, sameSite: true});
        res.status(200).json({ message: "Login successful", userId: user._id });
    } 
    catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;