const express = require("express")
const router = express.Router()
const AuthControllers = require("../controllers/authControllers")
// router.get("/", (req, res) => {
//     res.send("Smpai ke folder routing")
// })


// ini untuk routing register
// buatin yang pertama untuk render ejs nya
router.get("/register", AuthControllers.renderRegisterPage)

// ini untuk handle inputan tag form dari html
router.post("/register", AuthControllers.handleRegister)

// ini untuk routing login
// buatin yang pertama untuk login render ejs nya
router.get("/login", AuthControllers.renderLoginPage)

module.exports = router