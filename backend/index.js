const express = require("express");
const mainRouter = require("..")
const app = express()

app.use("/api/vi", mainRouter)
