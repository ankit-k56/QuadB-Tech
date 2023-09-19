const express = require('express')
const axios = require('axios')
const router = express.Router()
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
router.get('/cryptos',async (req,res)=>{
    try{
        const data = await prisma.cryptos.findMany()
        res.status(200).json({data})
    } catch(err){
        res.status(400).send("Some error occured")
    }
    
})
module.exports = router