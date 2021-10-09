const router = require("express").Router()
const { isAuthenticated, isSignedIn } = require("../controllers/auth")
const { makeInvoice } = require("../controllers/invoice")
const { getUserById } = require("../controllers/user")

router.param("userId", getUserById)

router.post("/add/:userId", isAuthenticated, isSignedIn, makeInvoice)

module.exports = router