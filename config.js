//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "243858487794";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU4yOVc2VFRmeWRPZURUU05pb1Y2N2c3dXQwWG55VzYwYWdiOExEdmlsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianN4L1RkZW1USVNzWkZna0tlT1Q0OFhKMkNzQmh3TlMydXd2bTBGYU5rTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQjVQTjVEd1ZHSzkwT05nRnRtbU9MV2UvdXhmZWZkZ2EwdGFZaVZ6Wm04PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKbFpyWnUweHMxSGtGT3huOGZWcnpvcDNzaENaUi9PZGZzZUhDakI1NXlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlMTDlDWGY3bHBHVjdIVDVBdzBTbEtlQWtTTk9MSllVNFpzV0Jsd1lmbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZpRktNdEorcmF3YmJKZXk4a1pGOXBGbjNCckRGSUw0eTl5bC8vMTBQVWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ08xTWNub21jeXpCVmVTbm1JK2NmRCtDNHJqVmxxK3pYTVR4T05Qb2xWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnZ5U1kwWnU0QkRiT0I1OFVaRTJNV3ZXSWtLbDltSUNmTVo1R0hvOUJHST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxGaVBFTlJuVjFvVzhLVU14ekZXTktGZTBTQXp4TVFTMWoyUnVqV3Q5dCtTUlBCRkowV1pCb3ZlRHlnS2pVMXQ0MEVlVGlMeUJUMVd6UVJYRk5xNGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6ImU3WFNNdUFxOHMrUjZuaU9oT3ljNmtidmtuM0VpVFhyMlNnNTZFWTkzSTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjQzODU4NDg3Nzk0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhGMTc3QUVGMUY1NkNGNjA4Q0MyQkI2QkVFNDk3OEQ4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU0MDk2Mzd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imd1WVV3cWZZU2lPeXp5T2tGVlYxYUEiLCJwaG9uZUlkIjoiMGFlZmY4Y2EtY2NmMC00ZWU5LTk2OGUtNTAwODhhY2E2YzFiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imlxelp4NzNMTm1PSG1DOW52TEpCdmVtRFVmRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0U0RvTmp6eVhCdnJ0Q29BaU1lcjg3eGVpams9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRjdIRzRZTUEiLCJtZSI6eyJpZCI6IjI0Mzg1ODQ4Nzc5NDoyOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJha2FnaGkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00rQnBZTUVFTkwvd0xzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNrQU9OcTJVNjkxdUYyeW5TblM0WGwrdC9pVHc5dzlKRTdIdzhsa2VneTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlExS1FZZWF2ZWdsUkhMdEYwbnQzYUdoNEtaMHFHNGlROFBONHpHc3Iwb2ZOYUhjTFJ6K0RycUZZdU15c0pEelI1bUlYdDJLV1huRlY1bDRrdno3UUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEeWhYMVQzdkZXRWphY3E1MjFPZjEvMVpBVWZUV1QrR3dxZENzS29wMTBBZlliWUxXQUlGSzVUNXZyc0JqT0RGWnZZRjBlcVM4VWl5Z0NvT1dwK3VoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0Mzg1ODQ4Nzc5NDoyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiSkFEamF0bE92ZGJoZHNwMHAwdUY1ZnJmNGs4UGNQU1JPeDhQSlpIb010In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NDA5NjMxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVLSyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
