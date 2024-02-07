const express = require("express");
//morgan is a logger package
const moragn = require("morgan");
const  { createProxyMiddleware } = require('http-proxy-middleware')
const rateLimit = require('express-rate-limit');



const app = express();

//creating rate limiter
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	limit: 5, // Limit each IP to 5 requests per `window` (here, per 1 minutes).
})

//using morgan as a middleware
app.use(moragn('combined'));
app.use(limiter);

const PORT = 3005;

app.use('/bookingservice', createProxyMiddleware({target : 'http://localhost:3001', changeOrigin : true}));
app.get("/home", (req, res) => {
    return res.json({message : "hello i am server"})
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})
