const express=require('express');
const app=express();
const path = require('path');
app.use(
    express.urlencoded({
      extended: true
    })
  )
 

  app.use(express.json())
  app.use('/', express.static(path.join(__dirname, 'public')))




  app.get('/index',(req,res)=>{
    res.send("the page is working")
})

app.listen(3000)
