const { debug } = require("winston");
const winston = require("winston");
const logger = winston.createLogger({
  level: process.env.LOGGER_LEVEL || "info",
  format:winston.format.combine(
      winston.format.colorize(),
      
  )
});
