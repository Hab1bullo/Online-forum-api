import jwt from "jsonwebtoken"
import { config } from 'dotenv';
config();


// console.log(process.env)

export const accessTokenGenerator = (data) => {
  const accesToken = jwt.sign(data, process.env.ACCESS_SECRETKEY, { expiresIn: '1d' });
  return accesToken;
}

export const refreshTokenGenerator = (data) => {
  const accesToken = jwt.sign(data, process.env.REFRESH_SECRETKEY, { expiresIn: '30d' });
  return accesToken
}

export const tokenVerify = (token) => {
  const decoded = jwt.verify(token, process.env.ACCESS_SECRETKEY)
  return decoded
}

export const tokenVerifyRefresh = (token) => {
  const decoded = jwt.verify(token, process.env.REFRESH_SECRETKEY)
  return decoded
}


