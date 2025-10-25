const jwt = require('jsonwebtoken')
const createToken = (prn,email)=>{
   const jwtToken = jwt.sign({prn,email},process.env.JWT_SECRET_KEY);
   return jwtToken;
}

module.exports = createToken;