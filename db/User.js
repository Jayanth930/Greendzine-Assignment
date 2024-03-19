const mongoose = require('mongoose');

const correctFormat = (value)=>{
    let splitter = ""
    if(value.includes('-')){ splitter = '-'}
    else{splitter = '/'}
    const parts = value.split(splitter);
    const [date,month,year] = parts;
    if(year.length != 4 || isNaN(parseInt(value))) return false;
    if(parseInt(month) <1 || parseInt(month) > 12) return false;
    if(parseInt(date) < 1 || parseInt(date) > 31) return false;
    return true;
    
}

const authenticateUser = async (req,res,next)=>{
    const {email ,  password} = req.body;
    try {
        const user = await User.findOne({email , password});
        req.user = user
        next();
    } catch (err) {
        console.error(`Error in Authenticating user ${err.message}`)
    }
    
}

const userSchema = new mongoose.Schema({
    name : {
        type : String ,
        lowercase : true
    } , 
    password : {
        type : String
    },
    email : {
        type : String ,
        required : true ,
        minLen : 4 ,
        unique : true ,
        lowercase : true
    },
    dob : {
        type : String ,
        validate : {
            validator : correctFormat ,
            message : (props)=> console.log(`${props.value} not in the format of YYYY-MM-DD`)
        }
    } ,
    role : {
        type : String
    }
})

const User =  mongoose.model("User",userSchema) 

module.exports = {User,authenticateUser}