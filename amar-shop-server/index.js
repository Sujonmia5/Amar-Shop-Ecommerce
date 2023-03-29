const express = require('express')
const app = express()
const Port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('server is running')
})

app.listen(Port, () => {
    console.log('server running is on', Port);
})