import express from 'express';
import cors from 'cors';
import  twilio  from 'twilio';
const sid = 'XXXX';
const auth = 'XXXX';
const client = twilio(sid, auth);

console.log(sid);  // should log AC2cdc222179fe3bdc99176bbfwqqwq3cb2d
console.log(auth); //
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
//This is to store the OTPs
let otps = {};


app.get('/', (req, res) => {
  res.send('Hello World!');
})

//This is to receive the mobile Number
app.post('/submitOTP', (req,res)=>{
   const data=req.body.number;
   console.log(data);
   const otp = Math.floor(999 + Math.random() * 9000).toString(); //generating a random OTP
   console.log(otp);
   otps[data]=otp;

   client.messages
   .create({
    body:  `Your OTP is ${otp}`,
    to: `+91${data}`

   })
   .then(()=>{
    res.status(200).send('OTP sent');
   })
   .catch((error) => {
    console.error('Error sending OTP:', error);
    res.status(500).send('Failed to send OTP');
  });
    
    
});


app.post('/verify', (req,res)=>{
  const {mobileNumber, otp}=req.body;
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})