const express = require("express")
const app = express()
const port = 5000
const session = require("express-session")
const usersRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const passport = require("./config/passport")

app.use(express.json())

app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use("/users", usersRoutes)
app.use("/auth", authRoutes)
app.use("/auth/login", AuthLoginRoutes)
app.use("/admin", AdminRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})