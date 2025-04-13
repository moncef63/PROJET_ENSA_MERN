//declare the required modules for the logger middleware function date-fns, uuid, fs, and fs.promises
//create a function logEvents that takes in a message and a logFileName as arguments
//create a dateTime variable that formats the current date and time
//create a logItem variable that concatenates the dateTime, a uuid, and the message
//try to create a logs directory if it does not exist
//append the logItem to the logFileName
//catch any errors and log them to the console
//create a logger function that takes in req, res, and next as arguments
//call the logEvents function with the request method, request url, and request origin as arguments
//log the request method and path to the console
//call the next function
//export the logEvents and logger functions
const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message, logFileName) => {
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)
    } catch (err) {
        console.log(err)
    }
}

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
    console.log(`${req.method} ${req.path}`)
    next()
}

module.exports = { logEvents, logger }