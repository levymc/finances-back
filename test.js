const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.NEXT_ATLAS_URI;

console.log(uri)