const express = require('express')
const zod = require('zod')
const JWT_SECRET = require('../config')
const jwt = require("jsonwebtoken")
const router = express.Router()
const {User} = require("../db")

const signUpSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    password: zod.string(),
})

router.post("/signup", async (req, res) => {
    const body = req.body;
    const {success} = signUpSchema.safeParse(req.body);
    if (!success) {
        return res.json({
            message: "Email already taken / Incorrect input"
        })
    }

    const user = User.findOne({
        username: body.username
    })

    if (user._id) {
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const dbUser = await User.create(body)
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)

    res.json({
        message: "User Created Successfully",
        token
    })

})

module.exports = router