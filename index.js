#!/usr/bin/env node
const express = require('express')

// Load an example default Obojobo middleware
const defaultObojoboMiddleware = require('obojobo-express/middleware.default')

// Start a web server
const app = express()

// add the middleware to Express
defaultObojoboMiddleware(app)

// provide the default logger
const logger = require('obojobo-express/logger');

// load the utilities used to start the http server and attach
// the express app
const startServer = require('obojobo-express/http_server.js')

// do it
const server = startServer(app, logger, process.env.PORT)
