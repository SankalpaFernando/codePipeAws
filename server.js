const app = require('express')();

app.get('/',(req,res)=>{
    res.json({success:true}).end()
})
const port = process.env.PORT||3000;
app.listen(port);