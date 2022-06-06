const express = require('express')
const app = express()
const port = 3000
const spices = require('./api/routes/spicesRoutes')

app.use('/spices', spices)


app.listen(port, () => console.log(`Server running at http://localhost:${port}`))