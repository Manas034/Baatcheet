import jwt from "jsonwebtoken";

export const generateToken = (userId,res) => {
  //Token for the User
  const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn: "7d",});
  
  res.cookie("jwt", token, {
    maxAge: 7*24*60*60*1000, //MS
    httpOnly: true,//prevent XSS attacks: cross-site scripting
    sameSite: "strict",//CSRF attacks
    secure: process.env.NODE_ENV === "development" ? false : true,
  });

  return token;
};

//http://localhost
//http://dsmakmk.com-> secure true