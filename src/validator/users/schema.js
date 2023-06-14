const Joi = require('joi');
 
const UserPayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullname: Joi.string().required(),
});

module.exports = { UserPayloadSchema };

// Skema tersebut dituliskan sesuai dengan logika bisnis yang ditetapkan yah. Di mana di API yang kita buat, properti username, password, dan fullname harus didefinisikan (required) dan bertipe string.