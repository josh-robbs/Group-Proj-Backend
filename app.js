const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const port = process.env.PORT || 9000
const events = require("./routes/events")
const neighbors = require("./routes/neighbors")
const attendees = require("./routes/attendees")


app.use(cors())
app.use(bodyParser.json())

app.use("/events",events)
app.use("/neighbors",neighbors)
app.use("/attendees",attendees)


app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})
