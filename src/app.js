
const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const app = express();

// middleware 
const rateLimiter = rateLimit({
    windowMs: 1*60*1000, // 1 minute
    limit:5,
    message:'too many requests from this ip. Please try again later'
})

app.use(rateLimiter);
app.use(xssClean());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/test', async(req,res)=>{
    res.status(200).send({message:'Welcome to our server'});
});
app.get('/api/user', async(req,res)=>{
    res.status(200).send({message:'User profile is returned'});
});


// client error handling 
app.use((req,res,next)=>{
  next(createError(404, 'Route not found'));
})
// server error handling all the error
app.use((err,req,res,next)=>{
    return res.status(err.status || 500).json({
        success:false,
        message:err.message,
    });
});

module.exports = app;