const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const app = express();
const url = process.env.URL
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
}))
mongoose.Promise = global.Promise

mongoose.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log(`Success! connected to db`);
    
})
.catch((err) => {
    console.log(err);
    process.exit()
})

require('./routes/users.routes')(app)

app.listen(3001,()=> `running on port 3001`)


