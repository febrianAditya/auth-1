require("dotenv").config()

const express = require("express")
const app = express()
const PORT  = 3000
const morgan = require("morgan")
const session = require("express-session")
const flash = require("express-flash")
const router = require("./routes")

app.set('view engine', 'ejs')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}))


app.use(morgan("dev"))
app.use(flash())
app.use("/", router)

app.listen(PORT, () => {
    console.log(`I LOVE YOU ${PORT}`);
    
})