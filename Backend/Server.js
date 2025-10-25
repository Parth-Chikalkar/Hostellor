const express = require('express');
const env = require('dotenv');
const cors = require('cors')
const app = express();
const userRoutes = require('./Routes/userRoutes')
const connectDB = require('./Helpers/DBConnect');
env.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}));
connectDB();
const port = process.env.PORT; 

app.use('/api/users', userRoutes);

app.listen(port,()=>{
    console.log(`Running on ${port}`)
})