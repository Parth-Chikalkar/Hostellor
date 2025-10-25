const userModel = require('../Models/Hostelmodel.js')
const bcrypt = require('bcrypt')
const tok = require('../Helpers/Token.js')

const createUser = async (req,res)=>{
try {
    const { prn , address , name , password , hostelNo , roomNo , gaurdianNo ,phNo } = req.body;
    const isExist = await userModel.findOne({prn});
  
    if(isExist){
        return res.status(200).json({message :"User Already Exists !" , succes : false})
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await userModel.create({
       prn , address , name , password : hashedPassword , hostelNo ,roomNo , gaurdianNo ,phNo
    })
    const token = tok(prn);
    return res.status(200).json({message : `User ${name} succesfully created !` , user , token , succes : true});

} catch (error) {
     return res.status(500).json({message : "Some Error Happened , Try Again !",succes : false})
   
}
}

const loginUser = async (req,res)=>{
    try {
        const {prn , password} = req.body;
        const isExist = await userModel.findOne({prn});
        if(!isExist){
          return res.status(200).json({message : "Invalid Credentials",succes : false});
        } 
        const pass = await bcrypt.compare(password, isExist.password);
        if(!pass){
            return res.status(200).json({message : "Invalid Credentials"}); 
        }
          const token = tok(prn);
    return res.status(200).json({message : `Logged in as ${isExist.name} ` , isExist , token , succes : true});
        
    } catch (error) {
        return res.status(500).json({message : "Some Error Happened , Try Again !",succes : false});
    }
}

const getroomies =  async (req,res)=>{
try {
    const {no,room} = req.query;
    const users = await userModel.find( {hostelNo:no , roomNo:room});
    return res.status(200).json({succes : true , roomies:users})
} catch (error) {
    return res.status(500).json({succes :false , message :"Error From Server !"});
}
}

module.exports = {createUser, loginUser , getroomies};
