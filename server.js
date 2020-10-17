const app = require('express')();
app.get('/',(req,res)=>{
    res.send('<h1>Hello Develop</h1>')
})
const port = process.env.PORT||3000;
app.listen(port);