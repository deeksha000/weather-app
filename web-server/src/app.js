const express=require('express')
const app = express()
app.get('',(req, res)=>{
res.send('<h1>Weather</h1>')
})
app.get('/help',(req,res)=>{
    res.send({
        name: 'piku',
        age : 4
    })
})
app.get('/about',(req,res)=>{
    res.send('<h1>about page</h1>')
})
app.get("/weather",(req,res)=>{
    res.send( {
        loaction : 'Bangalore',
        forecast : "rainy"
    })
})
app.listen(3000,()=>{
    console.log(
       'server is running'
    )
})
