const express = require('express')
const zod = require('zod')
const router = express.Router()

const signUpSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    password: zod.string(),
})

router.post("/signup", (req, res) => {
    const body = req.body;
    const {success} = signUpSchema.safeParse(req.body);
    if (!success) {
        return res.json({
            message: "Email already taken / Incorrect input"
        })
    }

    const user = User.findOne({
        
    })
})

module.exports = router