const express = require("express");
const cors = require('cors')

app.use(cors())
app.use(express.json())

const mainRouter = require("..")

const app = express()

app.use("/api/vi", mainRouter)
app.listen(3000)