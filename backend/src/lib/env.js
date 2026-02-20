import "dotenv/config";

export const ENV = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
  CLIENT_URL: process.env.CLIENT_URL,

}
// PORT=3000
// MONGO_URI=mongodb+srv://Manasqwew12323:HbUMMHO5qDwrdrjD@cluster0.i1c1jir.mongodb.net/baatcheet_db?appName=Cluster0
// NODE_ENV=development

// JWT_SECRET=myjwtsecret

// RESEND_API_KEY=re_6x1CP3m9_ALDEArtkRDq4We2XmPZGnD91

// EMAIL_FROM = "onboarding@resend.dev"
// EMAIL_FROM_NAME = "BaatCheet Support"
// CLIENT_URL=http://localhost:5173