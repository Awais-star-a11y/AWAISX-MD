{
  "name": "awais-md",
  "version": "5.0.0",
  "description": "Awais-Md, a Multi Device Whatsapp Bot to Enhance Whatsapp Communication Experience",
  "main": "./index.js",
  "type": "commonjs",
  "--engines": {
      "node": ">=20.0.0"
   },
  "scripts": {
    "start": "pm2 start index.js --deep-monitoring --attach --name awaismd",
    "stop": "pm2 stop awaismd",
    "restart": "pm2 restart awaismd"
  },
  "keywords": ["Awais-md", "whatsapp-bot", "Awais-api"],
  "author": "Awais md",
  "license": "MIT",
  "dependencies": {
    "@adiwajshing/keyed-db": "^0.2.4",
    "cheerio": "^1.0.0-rc.12",
    "dotenv": "^16.3.1",
    "pino": "^7.0.5",
    "pm2": "^5.4.0",
    "util": "^0.12.4",
    "express": "^4.19.2",
    "axios": "^1.2.5",
    "ffmpeg": "0.0.4",
    "file_size_url": "1.0.4",
    "file-type": "^19.0.0",
    "form-data": "^4.0.1",
    "fs": "^0.0.1-security",
    "fs-extra": "^11.1.0",
    "gifted-baileys": "1.5.1",
    "gifted-dls": "latest",
    "gifted-downs": "^1.0.0",
    "moment-timezone": "^0.5.45",
    "mongoose": "^8.8.2",
    "os": "^0.1.2",
    "path": "latest",
    "pm2": "^5.4.0",
    "node-fetch": "^3.3.2",
    "megajs": "^1.3.3",
    "qrcode-terminal": "^0.12.0",
    "util": "^0.12.5",
    "yt-search":"^2.11.0"
      },
   "repository": {
      "type": "git",
      "url": "git+https://github.com/Awais-star-a11y/AWAISX-MD"
   },
   "bugs": {
      "url": "https://github.com/Awais-star-a11y/AWAISX-MD/issues"
   },
   "homepage": "https://github.com/Awais-star-a11y/AWAISX-MD.git#readme"
}