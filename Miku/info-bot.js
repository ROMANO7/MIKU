import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let vn = './src/Miku/Hola.mp3'
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5212411347465-5212411719888@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: fs.readFileSync('./src/Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5212411347465-5212411719888@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  

if (/^bot$/i.test(m.text)) {
    
conn.sendButton(m.chat, `ยก๐ฌ๐! ๐จ๐๐รญ ๐๐๐๐๐. ๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐ 
๐ฏ๐๐! ๐ฐ'๐ ๐๐๐๐. ๐ฐ ๐๐๐ ๐๐๐๐ ๐`, wm, [['๏ธ๐๐๐๐', `#menu`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: estiloaudio })   
}
return !0
}
export default handler
