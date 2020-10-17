const app = require('express')();

app.get('/',(req,res)=>{
    res.send('Hello There...')
})
const port = process.env.PORT||3000;
app.listen(port);