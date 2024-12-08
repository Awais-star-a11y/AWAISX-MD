// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs');

if (fs.existsSync('config.env')) require('dotenv').config({ path: '/.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

global.caption = "*©𝟐𝟎𝟐𝟒 𝐀𝐖𝐀𝐈𝐒 𝐌𝐃 𝐕5*"; // Input Yours custom...(Maintain font for Flow)
global.api = "null"; // DO NOT Change this.... Change and Regret Later...
global.mongodb = "null"; // DO NOT Change this.... Change and Regret Later...
global.pluginsdb = "null"; // DO NOT Change this.... Change and Regret Later...
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTOLIKE_STATUS: process.env.AUTOLIKE_STATUS || "true",
AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || "💜", //Input Yours custom...
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by Awais-Md!", // // Input Yours custom...
MODE: process.env.MODE || "public",
OWNER_NUMBER: process.env.OWNER_NUMBER || "", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀𝐖𝐀𝐈𝐒 𝐌𝐃", // Input Yours custom...(Maintain font for Flow)
PREFIX: process.env.PREFIX || ".",
ANTIDELETE: process.env.ANTIDELETE || "false",
ANTICALL: process.env.ANTICALL || "false",
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Activated by Awais-Md. 📵 No Calls Allowed Dude!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐀𝐖𝐀𝐈𝐒 𝐌𝐃", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://endpoint.web.id/server/file/8Cmyffly1bMBLr.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
WELCOME: process.env.WELCOME || "true",
GOODBYE: process.env.GOODBYE || "true",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "true",
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Pakistan/Multan", // Enter yours else leave blank if not sure
};

global.myName = "Awais-md"; // DO NOT Change this.... Change and Regret Later...
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴡᴀɪs ᴍᴅ*"; // Input Yours custom...(Maintain font for Flow)

let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];require(file); })
// That's All...