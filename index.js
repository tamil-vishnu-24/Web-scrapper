const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express() ;

const url1 = "https://vit.ac.in/all-events"

const url2 = "https://vit.ac.in/all-past-events"



app.get("/upcomingevents" , function(req , res)
{
    axios(url1)
        .then(response =>{
            const page = response.data 
            const pageload = cheerio.load(page)
            const upcomingevents = [] 

            pageload('.NWS-list' , page).each(function()
            {
                const eventname = pageload(this).find('img').attr('title')
                upcomingevents.push({
                    eventname
                })
            })
            console.log(upcomingevents)
        })
        .catch(err => console.log(err))


        
})
app.get("/pastevents" , function(req , res)
{
    axios(url2)
        .then(response =>{
            const page = response.data 
            const pageload = cheerio.load(page)
            const upcomingevents = [] 

            pageload('.NWS-list' , page).each(function()
            {
                const eventname = pageload(this).find('img').attr('title')
                upcomingevents.push({
                    eventname
                })
            })
            console.log(upcomingevents)
        })
        .catch(err => console.log(err))


        
})



app.listen(3005 , function() {
    console.log("Server is running in port 3005");
})