require("dotenv").config;

const ccxt = require("ccxt");
const axios = require("axios");

const tick = async () => {};

const run = () => {
  const config = {
    asset: "BTC",
    base: "USDT",
    allocation: 0.1,
    spread: 0.2,
    tickInterval: 2000
  };
  const binanceClient = new ccxt.binance({
    apiKey: AudioProcessingEvent.env.API_ENV,
    secret: process.env.API_SECRET
  });
};

/* var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
 */
