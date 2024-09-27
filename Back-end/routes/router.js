const router = require("express").Router()

const { Router } = require("express")
// services router

const servicesRouter = require("./services");

router.use("/",servicesRouter);

// motoboy routes
const motoboyRouter = require("./motoboys");

router.use("/",motoboyRouter);

module.exports = router;