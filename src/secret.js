
require('dotenv').config()

const serverPort = process.env.SERVER_PORT || 3002;
const mongodbURL = process.env.MONGODB_ATLAS_URL;
const secretJsonToken = process.env.JWT_TOKEN;
const smtpUserName = process.env.SMTP_USERNAME || '';
const smtpPassword = process.env.SMTP_PASSWORD || '';
const clientUrl = process.env.CLIENT_URL || '';

module.exports = { 
    serverPort , 
    mongodbURL,
    secretJsonToken,
    smtpUserName,
    smtpPassword,
    clientUrl,
};

