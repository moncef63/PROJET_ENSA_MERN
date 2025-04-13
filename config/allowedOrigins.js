// Exporting allowed origins for CORS
// This is used in the CORS middleware to allow requests from only the specified origins
// This is used in the server.js file to allow requests from the specified origins
const allowedOrigins = [
    'http://localhost:3000',
    'https://www.techensa.com',
    'https://techensa.com'
]

module.exports = allowedOrigins