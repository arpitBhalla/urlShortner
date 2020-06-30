const { request } = require("express");

const express=require('express');
const router=express.Router()
const sendRes = require('../util/respose')

router.use((req,res,next)=>{
    console.log("Short API called")
    

    return 0;
})

module.exports=router