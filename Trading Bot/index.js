// This is the index file, containing all crucial methods to trading bot.  


// Configs ccxt and axios libraries. 
// CCXT library allow us to access set of common functions across
// all cryptocurrency extensions. 
// Axios allows http requests. 
require('dotenv').config();
const ccxt = require('ccxt');
const axios = require("axios");

// Tick function with declared algorithms.  
const tick = async (config, binanceClient) => {
  const { asset, base, spread, allocation } = config;
  const market = `${asset}/${base}`;

  // Fetches and cancels orders left open from previous tick, if any
  const orders = await binanceClient.fetchOpenOrders(market);
  orders.forEach(async order => {
    await binanceClient.cancelOrder(order.id);
  });

  // Fetch current market prices using coingecko API
  const results = await Promise.all([
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'), //http request bitcoin (BTC)
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd') //http request tether (USDT)
  ]);
  const marketPrice = results[0].data.bitcoin.usd / results[1].data.tether.usd;

  // Variables for use in trading algorithms
  const sellPrice = marketPrice * (1 + spread);
  const buyPrice = marketPrice * (1 - spread);
  const balances = await binanceClient.fetchBalance();
  const assetBalance = balances.free[asset]; // e.g. 0.01 BTC
  const baseBalance = balances.free[base]; // e.g. 20 USDT
  const sellVolume = assetBalance * allocation;
  const buyVolume = (baseBalance * allocation) / marketPrice;

  // Sends orders, limit buy order and limit sell order
  // Passes market, buyVolume, sellVolume, sellPrice and buyPrice algorithms
  await binanceClient.createLimitSellOrder(market, sellVolume, sellPrice);
  await binanceClient.createLimitBuyOrder(market, buyVolume, buyPrice);

  // Logs to console confirmed orders and transactions
  console.log(`
    New tick for ${market}...
    Created limit sell order for ${sellVolume}@${sellPrice}  
    Created limit buy order for ${buyVolume}@${buyPrice}  
  `);
};

// Run program method
const run = () => {
  const config = { 
    asset: "BTC",
    base: "USDT",
    allocation: 0.1,     // Percentage of our available funds that we trade
    spread: 0.2,         // Percentage above and below market prices for sell and buy orders 
    tickInterval: 2000  // Duration between each tick, in milliseconds
  };

  // Process .env file user credentials
  const binanceClient = new ccxt.binance({
    apiKey: process.env.API_KEY,
    secret: process.env.API_SECRET
  });
  tick(config, binanceClient);
  setInterval(tick, config.tickInterval, config, binanceClient);
};

run(); // Runs Trading Bot