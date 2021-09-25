const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');


Asena.addCommand({pattern: 'git', fromMe: false, desc: "*Shows bot info*" }, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/tq8stlb.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*•━╼⤏Ꭺ𝙽𝚄-Ꮇ𝚆𝙾𝙻⤎╾━•*
 
        *ɢɪᴛʜᴜʙ ʟɪɴᴋ        https://github.com/rievilsir/Rosemowl_*`})
 
 
       *ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ        _http://Wa.me/+919539178064_*
  
  
      *ɢɪᴛʜᴜʙ ᴘʀᴏғɪʟᴇ ʟɪɴᴋ _https:https:rievilsir/Rosemowl_*`}) 

}));
