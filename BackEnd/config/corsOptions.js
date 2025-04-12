// Exported as a function that returns an object with the CORS options
// This object is passed to the cors middleware to enable CORS
// It specifies the allowed origins for CORS
// It checks if the origin is in the allowedOrigins array
// If the origin is allowed, it calls the callback function with no error
// If the origin is not allowed, it calls the callback function with an error
// This function is used in the server.js file to enable CORS for the server
const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions