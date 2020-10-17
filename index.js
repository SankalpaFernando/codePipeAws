const app = require('express')();

app.get('/',(req,res)=>{
    res.json({success:true}).end()
})

app.listen(3000);