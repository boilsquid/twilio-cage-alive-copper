// To set environment variables for the Cage, head to app.evervault.com, find your Cage in the list and add them in the environment variables panel.

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// Require and initialise the Twilio SDK using your credentials taken from the Cage's environment variables
const client = require('twilio')(accountSid, authToken);

// data is the data you encrypted and passed into `evervault.run` from your server. 
// The Cage automatically decrypts the data and maintains its structure
// so you can treat event exactly as you did when you passed it into `evervault.run`.

exports.handler = async (data) => {
  // Create a message using the Twilio client using the `body` and `to` keys from the data encrypted and passed into the Cage.
  const msg = await client.messages
  .create({
     body: data.body,
     from: process.env.TWILIO_NUMBER,
     to: data.to
   });
   
   return msg;
};
