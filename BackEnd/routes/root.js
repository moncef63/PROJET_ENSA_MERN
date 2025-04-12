// Desc: Route for root path
// 1. Import the required modules
// 2. Create a router object
// 3. Import the path module
// 4. Create a GET route for the root path
// 5. Send the index.html file as a response
// 6. Export the router object
// 7. Update the server.js file to use the router object
const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router