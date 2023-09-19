const express = require('express')
const cors = require('cors')
const app = express()
const {PrismaClient} = require('@prisma/client')
const axios = require('axios')
const router = require('./routes/Items')
const prisma = new PrismaClient()
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Home route')

})

const fetchdata = async()=>{
    const cryptos =await axios.get("https://api.wazirx.com/api/v2/tickers")
    let count = 0;
    for (const key in cryptos.data ){
        if(count<10){          
            await prisma.cryptos.create({data:{
                name : cryptos.data[key].name,
                last:cryptos.data[key].last,
                buy:cryptos.data[key].buy,
                Sell: cryptos.data[key].sell,
                Volume: cryptos.data[key].volume,
                base_unit: cryptos.data[key].base_unit
        
            }})

        }
       
        // console.log(typeof(cryptos.data[key].last))
        count++;
    }
    

}

app.get('/', (req,res)=>{
    res.send("Home route")
})
app.use('/api', router)
app.listen(3000,()=>{
    try{
        // fetchdata()
        console.log("Srver is listening on port 3000")
    } catch(err){
        console.log(err)
    }
    
})