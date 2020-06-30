const { request } = require("express");

const express=require('express');
const router=express.Router()
const sendRes = require('../util/respose')

const UID=(max=6)=>(new Date().getTime()*Math.random()).toString(16).substr(2,max)

router.use((req,res,next)=>{
    const {headers}=req
    const API=headers['x-api-key']
    console.log(API)
    console.log("Short API called")
    // console.log(gen)
    sendRes(res,"ADSFG")
    return 0;
})

module.exports=router