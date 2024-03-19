const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT;
const app = express();
const { User  , authenticateUser} = require('./db/User')
app.use(cors({
    origin : ["http://localhost:3000"]
}));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('connected to db')
    app.listen(port, ()=> console.log(`server started on port ${port}`))
}).catch((err)=>{
    console.error(`Error connected to db + ${err.message}`);
})


app.post('/register', async (req,res)=>{
    const userData = req.body;
    try {
        const user = User.create(userData);
        res.status(200).json({message : 'User successfully created'});
    } catch (err) {
        res.status(400).json({message : `Error in registraton + ${err.message}`});
    }
})



app.post('/login',authenticateUser,(req,res)=>{
    if(req.user === null){
        res.status(200).json({message : 'Incorrect credentials'});
        return
    }
    res.status(200).json({message : "Logged Successfull"});
})


app.get("/employees/:name",async (req,res)=>{
    const name = req.params.name
    const users = await User.find({});
    const newUsers = users.filter((user)=> user.name.includes(name))
    res.status(200).json(newUsers)
})










