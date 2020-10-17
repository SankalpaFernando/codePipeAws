const app = require('express')();
require('dotenv').config()
const {Sequelize} = require('sequelize')
const {DATABASE,DATABASE_USERNAME,DATABASE_PASSWORD,DATABASE_HOST,PORT} = process.env;
const sequelize = new Sequelize(DATABASE, DATABASE_USERNAME, DATABASE_PASSWORD, {
    host: DATABASE_HOST,
    dialect:'mysql' 
  });

  


app.get('/',async(req,res)=>{
    let message;
    try {
        await sequelize.authenticate();
        const [results, metadata] = await sequelize.query("SELECT*FROM EMPLOYEE");
        console.log("results", metadata)
        message="Connection Established"
      
      } catch (error) {
        console.log("error", error)
        message="Connection Refused"
      }
    res.send(`<h1>${message}</h1>`)
})
const port = PORT||3000;
app.listen(port);