const router = require("express").Router()

const { Router } = require("express")
// services router

const servicesRouter = require("./services");

router.use("/",servicesRouter);


module.exports = router;