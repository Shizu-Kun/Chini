const chalk = require('chalk')
const fs = require('fs')
global.allmenu = (prefix) => {
return `– *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*

┌
│◦ *.ᴛᴏᴛᴀɢ*
│◦ *.ʜɪᴅᴇᴛᴀɢ*
│◦ *.ᴛᴀɢᴀʟʟ*
│◦ *.ʟɪɴᴋɢᴄ*
│◦ *.ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ*
│◦ *.ꜱᴇɴᴅʟɪɴᴋɢᴄ*
│◦ *.ᴘʀᴏᴍᴏᴛᴇ*
│◦ *.ᴅᴇᴍᴏᴛᴇ*
│◦ *.ᴋɪᴄᴋ*
│◦ *.ᴀᴅᴅ*
│◦ *.ᴘᴜꜱʜᴋᴏɴᴛᴀᴋ*
│◦ *.ᴄᴇᴋɪᴅɢᴄ*
│◦ *.ɢᴇᴛɪᴅɢᴄ*
│◦ *.ᴊᴏɪɴ*
└

– *D o w n l o a d e r*

┌
│◦ *.ʏᴛᴍᴘ3*
│◦ *.ʏᴛᴍᴘ4*
│◦ *.ᴛᴛ*
│◦ *.play*
│◦ *.instagram*
│◦ *.spotifydl*
└

– *ꜱʀᴛᴏʀᴇ ᴍᴇɴᴜ*

┌
│◦ *.ʙᴀᴛᴀʟ*
│◦ *.ᴘʀᴏꜱᴇꜱ*
│◦ *.ᴅᴏɴᴇ*
└`
} 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})