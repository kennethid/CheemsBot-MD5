require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const maker = require('mumaker')
const hx = require("hxz-api")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const xeonkey = require('xfarr-api')
const cheerio = require ("cheerio")
let { msgFilter } = require('./lib/antispam')
let { covid } = require('./lib/covid.js') 
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { color, bgcolor } = require('./lib/color')
const xeontod = require("tod-api")

//Database other\\
let kontolodon = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/kontol.json'));
let kontlopodon = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/kontol2.json'));
let xeonysticker = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let xeonyaudio = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let xeonyimage = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/image.json'));
let xeonyvideo = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/video.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'));
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))
xeonbugpic = fs.readFileSync('./XBug/xpic.jpeg')
const { xeonbut2 } = require('./XBug/xeonbut2')
const { xeonvirtex } = require('./XBug/xeonvirtex')
const { xeonbutton } = require('./XBug/xeonbutton')
const { xeonbrutal } = require('./XBug/xeonbrutal')
const audionye = fs.readFileSync('./y.mp3')
const { ngazap } = require('./lib/ngazap')
const { santedpc } = require('./lib/santedpc')
const { buttonvirus2 } = require('./lib/buttonvirus2')
const { virus } = require('./lib/virus')
const { buttonkal } = require('./lib/buttonkal')

//read database\\

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const isCreator = [botNumber, ...global.premium, ...global.rkyt, ...['6285842965801'], ...['6285774939323'], ...['6285732604538'], ...['6285747219408']].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

        //group\\
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const AntiNsfw2 = m.isGroup ? ntnsfw2.includes(from) : false
const WallDua = m.isGroup ? walldua.includes(from) : false
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const Autoreply = m.isGroup ? autorep.includes(from) : true
        const isBan = banUser.includes(m.sender)
        const isBanChat = m.isGroup ? banchat.includes(from) : false
autoreadsw = true
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Change ID
"thumbnail": img, // Change the Image
"itemCount": itcount, // Change the Item Count
"status": "INQUIRY", // Don't Replace
"surface": "CATALOG", // Don't Replace
"orderTitle": title, // Change the title
"message": text, // Change Message
"sellerJid": sellers, // Change the seller
"token": tokens, // Change the token
"totalAmount1000": ammount, // Change the Total Amount
"totalCurrencyCode": "IDR", // Up to you
}
}), { userJid: jid })
XeonBotInc.relayMessage(jid, order.message, { messageId: order.key.id})
}
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	// FAKE ANJ
	                    
	
	// FAKE TEXT IMG
const textImg = (teks) => {
XeonBotInc.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./XeonMedia/image/wpmobile.png')}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `916909137213 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownername}`, 
"description": `${global.botname}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.watermark}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `${global.botname}`,
thumbnail: log0, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botname}`, 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botname}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.watermark}`,
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "916909137213-1616169743@g.us",
"inviteCode": `${global.ownername}`,
"groupName": `${global.botname}`, 
"caption":`${global.watermark}`, 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${global.botname}`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.watermark}`,
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `${global.botname}`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
	
	//group target \\
const reply = (teks) => {
           XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!XeonBotInc.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
        //hitter
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await XeonBotInc.setStatus(`${XeonBotInc.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	
//auto read whatsapp status
if (autoreadsw) {
		if (from === 'status@broadcast') {
		XeonBotInc.chatRead(from)
	}
	}
//autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
await XeonBotInc.sendPresenceUpdate('composing', m.chat)
XeonBotInc.sendReadReceipt(from, m.sender, [m.key.id])}
}
  //autoread gc only
 //////// if (global.autoReadGc) {
 //////////////////////// if (m.isGroup) { XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
///}
  //auto recording all
    if (global.autoRecord) { if (m.chat) { XeonBotInc.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { XeonBotInc.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { XeonBotInc.sendPresenceUpdate('available', m.chat) }
  }

        //antispam or auto react
if (m.message && msgFilter.isFiltered(from)) {
console.log(`❌ [SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return }
        

//antivirtex by xeon

                //auto reply by xeon
				//-------------------â˜£ï¸WAR FUNCTIONSâ˜£ï¸-----------------\\
	//-------------------â˜£ï¸WAR FUNCTIONSâ˜£ï¸-----------------\\
	//-------------------â˜£ï¸WAR FUNCTIONSâ˜£ï¸-----------------\\
	const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
	
	const vien = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"orderMessage": {
"orderId": "594071395007984",
"thumbnail": thumb,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `Kenneth Bot WhatsApp${ngazap(prefix)}`,
"orderTitle": "Kenneth Bot WhatsApp${ngazap(prefix)}",
"sellerJid": "6285807264974@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR"
}}}



const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${ownername}â˜£ï¸${xeonbrutal(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}
}

const xezy = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "14169948404-1305080833@g.us" } : {}) 
},
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"externalAdReply": {
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": websitex,
"thumbnailUrl": 'https://i.ibb.co/txS3dDZ/Screenshot-2022-1030-154916.jpg', 
"thumbnail": xeonbugpic,
}}}

const bhosdike = (teks) => {
 XeonBotInc.sendMessage(m.chat, { image: xeonbugpic, caption: botname, contextInfo:{"externalAdReply": {"title": botname,"body": ownername,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: websitex,
thumbnailUrl: 'https://i.ibb.co/txS3dDZ/Screenshot-2022-1030-154916.jpg', 
thumbnail: xeonbugpic,
}
}}, { quoted:xezy})
}
 
//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
XeonBotInc.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: XeonBotInc.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        XeonBotInc.ev.emit('messages.upsert', msg)
        }
	    
	
        
       //react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                
                const timestampe = speed();
const latensie = speed() - timestampe
                const menulist = `┌─❖
│「 Hi 👋 」
└┬❖ 「 ${pushname} 」
┌┤✑  How Are You? 😄
│└────────────┈ ⳹
│
└─「 𝘽𝙊?? 𝙄𝙉𝙁𝙊 」       
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼. : ${global.owner}
│𝗛𝗼𝘀?? 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 ??𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${jumlahcmd}
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗧𝗼𝗱𝗮𝘆 : ${jumlahharian}
└┬────────────┈ ⳹
   │✑  Please Select
   │✑  The Button Below
   └─────────────┈ ⳹`
   
   //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

// short story
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                    kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}

async function bygbt(text) {
XeonBotInc.sendMessage(nmn, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}

//Sementara
if (WallDua)
if (AntiNsfw)
  switch(command) {
case 'allmenu': case 'allmenus': case 'menu': {
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!m.isGroup) return reply(mess.group)
	if (m.message && msgFilter.addFilter(from)) return
	XeonBotInc.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
var unicorn = await getBuffer(picak+'All Menu')
let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                
teks = `*Response Speed* ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\n*Runtime* : ${runtime(process.uptime())}\n\n*Menu*:\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n ┏━「 _KHUSUS OWNER_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}self 
 ┃╠ ${prefix}public 
 ┃╠ ${prefix}antitag 
 ┃╠ ${prefix}rentbot [add/del] 
 ┃╠ ${prefix}rentlist 
 ┃╠ ${prefix}ban [add/del] 
 ┃╠ ${prefix}banchat [on/off]  
 ┃╠ ${prefix}leavegc 
 ┃╠ ${prefix}setbio 
 ┃╠ ${prefix}bcgroup [text] 
 ┃╠ ${prefix}bcall [text] 
 ┃╠ ${prefix}bcimage [image] 
 ┃╠ ${prefix}bcvideo [video] 
 ┃╠ ${prefix}bcaudio [audio] 
 ┃╠ ${prefix}bcloc [text] 
 ┃╠ ${prefix}setppbot [image] 
 ┃╠ ${prefix}setexif 
 ┃╠ ${prefix}block [tag/number] 
 ┃╠ ${prefix}unblock [tag/number] 
 ┃╠ ${prefix}coowner [add/del] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _GROUP_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}welcome [on/off]
 ┃╠ ${prefix}groupsetting 
 ┃╠ ${prefix}grouplink 
 ┃╠ ${prefix}ephemeral [option] 
 ┃╠ ${prefix}setgcpp [image] 
 ┃╠ ${prefix}setname [text] 
 ┃╠ ${prefix}setdesc [text] 
 ┃╠ ${prefix}groupmode [open/close]
 ┃╠ ${prefix}resetgrouplink 
 ┃╠ ${prefix}editinfo [option] 
 ┃╠ ~${prefix}add [user]~
 ┃╠ ${prefix}kick [reply/tag] 
 ┃╠ ${prefix}hidetag / htag [text] 
 ┃╠ ${prefix}tagall [text] 
 ┃╠ ${prefix}antilinkgc [on/off] 
 ┃╠ ${prefix}antilinktg [on/off] 
 ┃╠ ${prefix}antilinktt [on/off] 
 ┃╠ ${prefix}antilinkytch [on/off] 
 ┃╠ ${prefix}antilinkytvid [on/off] 
 ┃╠ ${prefix}antilinkig [on/off] 
 ┃╠ ${prefix}antilinkfb [on/off] 
 ┃╠ ${prefix}antilinktwit [on/off] 
 ┃╠ ${prefix}antilinkall [on/off] 
 ┃╠ ${prefix}antivirus [on/off] 
 ┃╠ ${prefix}antivirdoc [on/off]
 ┃╠ ${prefix}antislayer [on/off]
 ┃╠ ${prefix}antivirlog [on/off]
 ┃╠ ${prefix}antitoxic [on/off] 
 ┃╠ ${prefix}antiwame [on/off] 
 ┃╠ ${prefix}autoreply [on/off] 
 ┃╠ ${prefix}nsfw [on/off] 
 ┃╠ ${prefix}promote [reply/tag] 
 ┃╠ ${prefix}demote [reply/tag] 
 ┃╠ ${prefix}react [reply emoji] 
 ┃╠ ${prefix}vote
 ┃╠ ${prefix}devote 
 ┃╠ ${prefix}upvote 
 ┃╠ ${prefix}checkvote 
 ┃╠ ${prefix}delvote 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _TEXT MAKER_ 」━━⭓
 ┃╔═══════✪ 
 ┃╠ ${prefix}candy [text]
 ┃╠ ${prefix}blackpinkneon [text]
 ┃╠ ${prefix}deepsea [text]
 ┃╠ ${prefix}scifi [text]
 ┃╠ ${prefix}fiction [text]
 ┃╠ ${prefix}berry [text]
 ┃╠ ${prefix}fruitjuice [text]
 ┃╠ ${prefix}biscuit [text]
 ┃╠ ${prefix}wood [text]
 ┃╠ ${prefix}chocolate [text]
 ┃╠ ${prefix}matrix [text]
 ┃╠ ${prefix}blood [text]
 ┃╠ ${prefix}halloween [text]
 ┃╠ ${prefix}wicker [text]
 ┃╠ ${prefix}darkgold [text]
 ┃╠ ${prefix}firework [text]
 ┃╠ ${prefix}skeleton [text]
 ┃╠ ${prefix}sand [text]
 ┃╠ ${prefix}glue [text]
 ┃╠ ${prefix}leaves [text]
 ┃╠ ${prefix}magma [text]
 ┃╠ ${prefix}lava [text]
 ┃╠ ${prefix}rock [text]
 ┃╠ ${prefix}bloodglas [text]
 ┃╠ ${prefix}underwater [text]
 ┃╠ ${prefix}textmaker [text]
 ┃╠ ${prefix}honey [text]
 ┃╠ ${prefix}ice [text]
 ┃╠ ${prefix}watercolor [text]
 ┃╠ ${prefix}multicolor [text]
 ┃╠ ${prefix}snow [text]
 ┃╠ ${prefix}harrypot [text]
 ┃╠ ${prefix}harrypotter [text]
 ┃╠ ${prefix}brokenglass [text]
 ┃╠ ${prefix}waterpipe [text]
 ┃╠ ${prefix}spooky [text]
 ┃╠ ${prefix}circuit [text]
 ┃╠ ${prefix}metallic [text]
 ┃╠ ${prefix}demon [text]
 ┃╠ ${prefix}sparklechristmas [text]
 ┃╠ ${prefix}christmas [text]
 ┃╠ ${prefix}3dchristmas [text]
 ┃╠ ${prefix}3dbox [text]
 ┃╠ ${prefix}waterdrop [text]
 ┃╠ ${prefix}lion2 [text]
 ┃╠ ${prefix}papercut [text]
 ┃╠ ${prefix}transformer [text]
 ┃╠ ${prefix}neondevil [text]
 ┃╠ ${prefix}3davengers [text]
 ┃╠ ${prefix}3dstone [text]
 ┃╠ ${prefix}3dstone2 [text]
 ┃╠ ${prefix}summertime [text]
 ┃╠ ${prefix}thunder [text]
 ┃╠ ${prefix}window [text]
 ┃╠ ${prefix}graffiti [text]
 ┃╠ ${prefix}graffitibike [text]
 ┃╠ ${prefix}pornhub [text]
 ┃╠ ${prefix}glitch [text]
 ┃╠ ${prefix}blackpink [text]
 ┃╠ ${prefix}glitch2 [text]
 ┃╠ ${prefix}glitch3 [text]
 ┃╠ ${prefix}3dspace [text]
 ┃╠ ${prefix}lion [text]
 ┃╠ ${prefix}3dneon [text]
 ┃╠ ${prefix}greenneon [text]
 ┃╠ ${prefix}bokeh [text]
 ┃╠ ${prefix}holographic [text]
 ┃╠ ${prefix}bear [text]
 ┃╠ ${prefix}wolf [text]
 ┃╠ ${prefix}joker [text]
 ┃╠ ${prefix}dropwater [text]
 ┃╠ ${prefix}dropwater2 [text]
 ┃╠ ${prefix}thewall [text]
 ┃╠ ${prefix}neonlight [text]
 ┃╠ ${prefix}natural [text]
 ┃╠ ${prefix}carbon [text]
 ┃╠ ${prefix}pencil [text]
 ┃╠ ${prefix}blackpink2 [text]
 ┃╠ ${prefix}neon [text]
 ┃╠ ${prefix}neonlight2 [text]
 ┃╠ ${prefix}toxic [text]
 ┃╠ ${prefix}strawberry [text]
 ┃╠ ${prefix}discovery [text]
 ┃╠ ${prefix}1917 [text]
 ┃╠ ${prefix}sci_fi [text]
 ┃╠ ${prefix}ancient [text]
 ┃╠ ${prefix}fabric [text]
 ┃╠ ${prefix}hoorror [text]
 ┃╠ ${prefix}whitebear [text]
 ┃╠ ${prefix}juice [text]
 ┃╠ ${prefix}batman [text]
 ┃╠ ${prefix}multicolor [text]
 ┃╠ ${prefix}collwall [text]
 ┃╠ ${prefix}wonderful [text]
 ┃╠ ${prefix}cool [text]
 ┃╠ ${prefix}sketch [text]
 ┃╠ ${prefix}marvel [text]
 ┃╠ ${prefix}foggy [text]
 ┃╠ ${prefix}writing [text]
 ┃╠ ${prefix}halloweenfire [text]
 ┃╠ ${prefix}halloween [text]
 ┃╠ ${prefix}watercolor [text]
 ┃╠ ${prefix}classic [text]
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _DOWNLOAD_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}instagram [url] 
 ┃╠ ${prefix}igtv [url] 
 ┃╠ ${prefix}igstory [username] 
 ┃╠ ${prefix}facebook [url]
 ┃╠ ${prefix}fbmp3 [url] 
 ┃╠ ${prefix}twitter [url] 
 ┃╠ ${prefix}twittermp3 [url] 
 ┃╠ ${prefix}tiktok [url] 
 ┃╠ ${prefix}tiktokaudio[url] 
 ┃╠ ${prefix}tiktoknowm [url] 
 ┃╠ ${prefix}mediafire [url] 
 ┃╠ ${prefix}ytmp3 [url | quality] 
 ┃╠ ${prefix}ytmp4 [url | quality] 
 ┃╠ ${prefix}getmusic [yt link] 
 ┃╠ ${prefix}getvideo [yt link] 
 ┃╠ ${prefix}gitclone [repo link] 
 ┃╠ ${prefix}soundcloud [url] 
 ┃╠ ${prefix}zippyshare [url] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _SEARCH_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}play [query] 
 ┃╠ ${prefix}song [query] 
 ┃╠ ${prefix}yts [query] 
 ┃╠ ${prefix}lyrics [query] 
 ┃╠ ${prefix}google [query] 
 ┃╠ ${prefix}playstore [query] 
 ┃╠ ${prefix}gimage [query] 
 ┃╠ ${prefix}pinterest [query] 
 ┃╠ ${prefix}image [query] 
 ┃╠ ${prefix}film [query] 
 ┃╠ ${prefix}wallpaper [query] 
 ┃╠ ${prefix}searchgc [query] 
 ┃╠ ${prefix}happymod [query] 
 ┃╠ ${prefix}servermc 
 ┃╠ ${prefix}mcpedl [query] 
 ┃╠ ${prefix}tvsearch [query] 
 ┃╠ ${prefix}wikimedia [query] 
 ┃╠ ${prefix}ytsearch [query] 
 ┃╠ ${prefix}ringtone [query] 
 ┃╠ ${prefix}webtoon [query] 
 ┃╠ ${prefix}anime [query] 
 ┃╠ ${prefix}animestory [query] 
 ┃╠ ${prefix}manga [query] 
 ┃╠ ${prefix}wattpad [query] 
 ┃╠ ${prefix}mcserver [ip|port] 
 ┃╠ ${prefix}drakor [query] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _CONVERT_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}toimage [reply stick] 
 ┃╠ ${prefix}sticker [reply img | gif] 
 ┃╠ ${prefix}take [reply img | gif | stik] 
 ┃╠ ${prefix}smeme [reply img] 
 ┃╠ ${prefix}smeme2 [reply img *text | text*]
 ┃╠ ${prefix}emoji [emoji] 
 ┃╠ ${prefix}tovideo [reply img] 
 ┃╠ ${prefix}togif [reply stick] 
 ┃╠ ${prefix}tourl [reply img] 
 ┃╠ ${prefix}tovn [reply aud] 
 ┃╠ ${prefix}tomp3 [reply vn] 
 ┃╠ ${prefix}toaudio [reply vid] 
 ┃╠ ${prefix}ebinary [reply txt] 
 ┃╠ ${prefix}dbinary [reply txt] 
 ┃╠ ${prefix}tinyurl [link] 
 ┃╠ ${prefix}styletext [text] 
 ┃╠ ${prefix}volume [reply aud] 
 ┃╠ ${prefix}tempo [reply aud] 
 ┃╠ ${prefix}bass [reply aud] 
 ┃╠ ${prefix}blown [reply aud] 
 ┃╠ ${prefix}deep [reply aud] 
 ┃╠ ${prefix}earrape [reply aud] 
 ┃╠ ${prefix}fast [reply aud] 
 ┃╠ ${prefix}fat [reply aud] 
 ┃╠ ${prefix}nightcore [reply aud] 
 ┃╠ ${prefix}reverse [reply aud] 
 ┃╠ ${prefix}robot [reply aud] 
 ┃╠ ${prefix}slow [reply aud] 
 ┃╠ ${prefix}squirrel [reply aud] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _IMG EFFECT_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}wanted [reply img]
 ┃╠ ${prefix}blur [reply img]
 ┃╠ ${prefix}framed [reply img]
 ┃╠ ${prefix}gayeffect [reply img]
 ┃╠ ${prefix}imagesketch [reply img]
 ┃╠ ${prefix}invert [reply img]
 ┃╠ ${prefix}burn [reply img]
 ┃╠ ${prefix}triggeredwebp [reply img]
 ┃╠ ${prefix}shit [reply img]
 ┃╠ ${prefix}rip [reply img]
 ┃╠ ${prefix}jail [reply img]
 ┃╠ ${prefix}beautifuleffect [reply img]
 ┃╠ ${prefix}deleteeffect [reply img]
 ┃╠ ${prefix}pixelate [reply img]
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _RANDOM IMG_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}coffee 
 ┃╠ ${prefix}woof 
 ┃╠ ${prefix}meow 
 ┃╠ ${prefix}lizard 
 ┃╠ ${prefix}wallneon 
 ┃╠ ${prefix}wallpubg 
 ┃╠ ${prefix}wallml 
 ┃╠ ${prefix}wallrandom 
 ┃╠ ${prefix}wallcode 
 ┃╠ ${prefix}animewall [query] 
 ┃╠ ${prefix}animewall2 [query] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _EMOTE_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}instagramemoji 
 ┃╠ ${prefix}facebookemoji 
 ┃╠ ${prefix}iphoneemoji 
 ┃╠ ${prefix}samsungemoji 
 ┃╠ ${prefix}joyemoji 
 ┃╠ ${prefix}skypeemoji 
 ┃╠ ${prefix}twitteremoji 
 ┃╠ ${prefix}whatsappemoji 
 ┃╠ ${prefix}microsoftemoji 
 ┃╠ ${prefix}googleemoji 
 ┃╠ ${prefix}pediaemoji 
 ┃╠ ${prefix}microsoftemoji 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _ANIME_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}naruto 
 ┃╠ ${prefix}yaoi 
 ┃╠ ${prefix}neko2 
 ┃╠ ${prefix}waifu 
 ┃╠ ${prefix}waifu2 
 ┃╠ ${prefix}awoo2 
 ┃╠ ${prefix}shinobu 
 ┃╠ ${prefix}waifu3 
 ┃╠ ${prefix}foxgirl 
 ┃╠ ${prefix}megumin2 
 ┃╠ ${prefix}loli 
 ┃╠ ${prefix}8ball 
 ┃╠ ${prefix}animenom 
 ┃╠ ${prefix}goose 
 ┃╠ ${prefix}avatar 
 ┃╠ ${prefix}tickle 
 ┃╠ ${prefix}gecg 
 ┃╠ ${prefix}feed 
 ┃╠ ${prefix}animeslap 
 ┃╠ ${prefix}animespank 
 ┃╠ ${prefix}animepat 
 ┃╠ ${prefix}animeneko 
 ┃╠ ${prefix}animekiss 
 ┃╠ ${prefix}animewlp 
 ┃╠ ${prefix}animecuddle 
 ┃╠ ${prefix}animecry 
 ┃╠ ${prefix}animekill 
 ┃╠ ${prefix}animelick 
 ┃╠ ${prefix}animebite 
 ┃╠ ${prefix}animeyeet 
 ┃╠ ${prefix}animebully 
 ┃╠ ${prefix}animebonk 
 ┃╠ ${prefix}animewink 
 ┃╠ ${prefix}animepoke 
 ┃╠ ${prefix}animesmile 
 ┃╠ ${prefix}animewave 
 ┃╠ ${prefix}animeawoo 
 ┃╠ ${prefix}animeblush 
 ┃╠ ${prefix}animesmug 
 ┃╠ ${prefix}animeglomp 
 ┃╠ ${prefix}animehappy 
 ┃╠ ${prefix}animedance 
 ┃╠ ${prefix}animecringe 
 ┃╠ ${prefix}animehighfive 
 ┃╠ ${prefix}animehandhold 
 ┃╠ ${prefix}animemegumin 
 ┃╠ ${prefix}smug2 
 ┃╠ ${prefix}couplepp 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _STICKER_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}patrick 
 ┃╠ ${prefix}emoji (fitur ini tidak tersedia)
 ┃╠ ${prefix}emojimix 
 ┃╠ ${prefix}attp [text]
 ┃╠ ${prefix}ttp [text]
 ┃╠ ${prefix}doge 
 ┃╠ ${prefix}lovesticker 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _ANIME STICKER_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}loli 
 ┃╠ ${prefix}bully 
 ┃╠ ${prefix}cuddle 
 ┃╠ ${prefix}cry 
 ┃╠ ${prefix}hug 
 ┃╠ ${prefix}awoo 
 ┃╠ ${prefix}kiss 
 ┃╠ ${prefix}lick 
 ┃╠ ${prefix}pat 
 ┃╠ ${prefix}smug 
 ┃╠ ${prefix}bonk 
 ┃╠ ${prefix}yeet 
 ┃╠ ${prefix}blush 
 ┃╠ ${prefix}smile 
 ┃╠ ${prefix}wave 
 ┃╠ ${prefix}highfive 
 ┃╠ ${prefix}handhold 
 ┃╠ ${prefix}nom 
 ┃╠ ${prefix}glomp 
 ┃╠ ${prefix}bite 
 ┃╠ ${prefix}slap 
 ┃╠ ${prefix}kill 
 ┃╠ ${prefix}happy 
 ┃╠ ${prefix}wink 
 ┃╠ ${prefix}poke 
 ┃╠ ${prefix}dance 
 ┃╠ ${prefix}cringe 
 ┃╠ ${prefix}neko 
 ┃╠ ${prefix}gura 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _NSFW_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}hentaivideo 
 ┃╠ ${prefix}yuri (error)
 ┃╠ ${prefix}masturbation (error)
 ┃╠ ${prefix}thighs (error)
 ┃╠ ${prefix}pussy (error)
 ┃╠ ${prefix}panties (error)
 ┃╠ ${prefix}orgy (error)
 ┃╠ ${prefix}ahegao (error)
 ┃╠ ${prefix}ass (error)
 ┃╠ ${prefix}bdsm (error)
 ┃╠ ${prefix}blowjob (error)
 ┃╠ ${prefix}cuckold (error)
 ┃╠ ${prefix}ero (error)
 ┃╠ ${prefix}gasm 
 ┃╠ ${prefix}cum (error)
 ┃╠ ${prefix}femdom (error)
 ┃╠ ${prefix}foot (error)
 ┃╠ ${prefix}gangbang (error)
 ┃╠ ${prefix}glasses (error)
 ┃╠ ${prefix}jahy (error)
 ┃╠ ${prefix}trap 
 ┃╠ ${prefix}blowjobgif 
 ┃╠ ${prefix}spank 
 ┃╠ ${prefix}hneko 
 ┃╠ ${prefix}nwaifu 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _FUN_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}kerangajaib [text]
 ┃╠ ${prefix}how [text] 
 ┃╠ ${prefix}when [text] 
 ┃╠ ${prefix}where [text] 
 ┃╠ ${prefix}is [text] 
 ┃╠ ${prefix}what [text] 
 ┃╠ ${prefix}can [text] 
 ┃╠ ${prefix}rate [text] 
 ┃╠ ${prefix}wangy [text] 
 ┃╠ ${prefix}beautifulcheck [tag] 
 ┃╠ ${prefix}awesomecheck [tag] 
 ┃╠ ${prefix}prettycheck [tag] 
 ┃╠ ${prefix}lesbiancheck [tag] 
 ┃╠ ${prefix}gaycheck [tag] 
 ┃╠ ${prefix}cutecheck [tag] 
 ┃╠ ${prefix}uglycheck [tag] 
 ┃╠ ${prefix}hornycheck [tag] 
 ┃╠ ${prefix}charactercheck [tag] 
 ┃╠ ${prefix}lovelycheck [tag] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _SOUND_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}sound1
 ┃╠ ||
 ┃╠ ${prefix}sound161
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _GAME_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}family100
 ┃╠ ${prefix}truth 
 ┃╠ ${prefix}dare 
 ┃╠ ${prefix}tictactoe 
 ┃╠ ${prefix}delttt 
 ┃╠ ${prefix}guess [option] 
 ┃╠ ${prefix}math [mode] 
 ┃╠ ${prefix}suitpvp [tag] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _TOOL_ 」━━⭓
 ┃╔═✪ _en = inggris_ / _in = indonesia_
 ┃╠ ~${prefix}translate en [text]~ (kedaluwarsa)
 ┃╠ ${prefix}fliptext [text] 
 ┃╠ ${prefix}toletter [number] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _DATABASE BOT_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}setcmd
 ┃╠ ${prefix}listcmd 
 ┃╠ ${prefix}delcmd 
 ┃╠ ${prefix}lockcmd 
 ┃╠ ${prefix}addmsg 
 ┃╠ ${prefix}listmsg 
 ┃╠ ${prefix}getmsg 
 ┃╠ ${prefix}delmsg
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _INDO_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}darkjoke 
 ┃╠ ${prefix}quotes 
 ┃╠ ${prefix}animequotes 
 ┃╠ ${prefix}jalantikus-meme 
 ┃╠ ${prefix}merdeka-news  
 ┃╠ ${prefix}kontan-news  
 ┃╠ ${prefix}cnbc-news  
 ┃╠ ${prefix}tribun-news  
 ┃╠ ${prefix}indozone-news  
 ┃╠ ${prefix}kompas-news  
 ┃╠ ${prefix}detik-news  
 ┃╠ ${prefix}daily-news  
 ┃╠ ${prefix}inews-news  
 ┃╠ ${prefix}okezone-news  
 ┃╠ ${prefix}sindo-news  
 ┃╠ ${prefix}tempo-news  
 ┃╠ ${prefix}antara-news  
 ┃╠ ${prefix}cnn-news  
 ┃╠ ${prefix}fajar-news  
 ┃╠ ${prefix}cinemaschedule 
 ┃╠ ${prefix}wiki 
 ┃╠ ${prefix}covidindo 
 ┃╠ ${prefix}earthquake 
 ┃╠ ${prefix}tvschedule 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _INDO HSCOPE_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}nomorhoki 
 ┃╠ ${prefix}artimimpi  
 ┃╠ ${prefix}artinama  
 ┃╠ ${prefix}ramaljodoh  
 ┃╠ ${prefix}ramaljodohbali  
 ┃╠ ${prefix}suamiistri  
 ┃╠ ${prefix}ramalcinta  
 ┃╠ ${prefix}cocoknama  
 ┃╠ ${prefix}pasangan  
 ┃╠ ${prefix}jadiannikah  
 ┃╠ ${prefix}sifatusaha  
 ┃╠ ${prefix}rezeki  
 ┃╠ ${prefix}pekerjaan  
 ┃╠ ${prefix}nasib  
 ┃╠ ${prefix}penyakit  
 ┃╠ ${prefix}tarot  
 ┃╠ ${prefix}fengshui  
 ┃╠ ${prefix}haribaik  
 ┃╠ ${prefix}harisangar  
 ┃╠ ${prefix}harisial 
 ┃╠ ${prefix}nagahari 
 ┃╠ ${prefix}arahrezeki 
 ┃╠ ${prefix}peruntungan  
 ┃╠ ${prefix}weton  
 ┃╠ ${prefix}karakter 
 ┃╠ ${prefix}keberuntungan 
 ┃╠ ${prefix}memancing 
 ┃╠ ${prefix}masasubur 
 ┃╠ ${prefix}zodiak 
 ┃╠ ${prefix}shio 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _OTHER_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}afk 
 ┃╠ ${prefix}readmore [text] 
 ┃╠ ${prefix}toviewonce 
 ┃╠ ${prefix}getpp
 ┃╠ ${prefix}chatinfo 
 ┃╠ ${prefix}alive 
 ┃╠ ${prefix}script 
 ┃╠ ${prefix}speedtest 
 ┃╠ ${prefix}ping 
 ┃╠ ${prefix}owner 
 ┃╠ ${prefix}menu 
 ┃╠ ${prefix}delete 
 ┃╠ ${prefix}chatinfo 
 ┃╠ ${prefix}quoted 
 ┃╠ ${prefix}listpc 
 ┃╠ ${prefix}listgc 
 ┃╠ ${prefix}donate 
 ┃╠ ${prefix}request 
 ┃╠ ${prefix}report [bug] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓`
 
//////////////////contoh  [{"urlButton": {"displayText": "YouTube 📍","url": `${websitex}`}}
 let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `sewabot`, buttonText: {displayText: 'Sewa Bot'}, type: 1},
 {buttonId: `rulesbot`, buttonText: {displayText: 'Rules'}, type: 1},
  {buttonId: `wallmenu`, buttonText: {displayText: 'Ganti Thumbnail Menu'}, type: 1},
 ] 
let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/allmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: teks, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
	largeThumb: true,
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
////// mediaType: 4, 
 thumbnail: pics, 
 url: `https://chat.whatsapp.com/HWS1kd27qV93bin6jlQAny`
///////sourceUrl: `${websitex}`, 
 //////// mediaUrl: `${websitex}` 
}} 
}  
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
break 
 case 'ownermenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Owner Menu') 
 anjay = ` ┏━「 _OWNER_ 」━━⭓ 
 ┃╔═══════✪         
 ┃╠ ${prefix}self 
 ┃╠ ${prefix}public 
 ┃╠ ${prefix}antitag 
 ┃╠ ${prefix}ban [add/del] 
 ┃╠ ${prefix}banchat [on/off] 
 ┃╠ ${prefix}leavegc 
 ┃╠ ${prefix}setbio 
 ┃╠ ${prefix}block [user] 
 ┃╠ ${prefix}unblock [user] 
 ┃╠ ${prefix}bcgroup [text] 
 ┃╠ ${prefix}bcall [text] 
 ┃╠ ${prefix}bcimage [image] 
 ┃╠ ${prefix}bcvideo [video] 
 ┃╠ ${prefix}bcaudio [audio] 
 ┃╠ ${prefix}bcloc [text] 
 ┃╠ ${prefix}setppbot [image] 
 ┃╠ ${prefix}setexif 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓`
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}, type: 1} 
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/ownermenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'groupmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Group Menu') 
 anjay = ` ┏━「 _GROUP_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}welcome [on/off]
 ┃╠ ${prefix}grousetting 
 ┃╠ ${prefix}grouplink 
 ┃╠ ${prefix}ephemeral [option] 
 ┃╠ ${prefix}setgcpp [image] 
 ┃╠ ${prefix}setname [text] 
 ┃╠ ${prefix}setdesc [text] 
 ┃╠ ${prefix}groupmode [open/close]
 ┃╠ ${prefix}resetgrouplink 
 ┃╠ ${prefix}editinfo [option] 
 ┃╠ ~${prefix}add [user]~ 
 ┃╠ ${prefix}kick [reply/tag] 
 ┃╠ ${prefix}hidetag [text] 
 ┃╠ ${prefix}tagall [text] 
 ┃╠ ${prefix}antilinkgc [on/off] 
 ┃╠ ${prefix}antilinktg [on/off] 
 ┃╠ ${prefix}antilinktt [on/off] 
 ┃╠ ${prefix}antilinkytch [on/off] 
 ┃╠ ${prefix}antilinkytvid [on/off] 
 ┃╠ ${prefix}antilinkig [on/off] 
 ┃╠ ${prefix}antilinkfb [on/off] 
 ┃╠ ${prefix}antilinktwit [on/off] 
 ┃╠ ${prefix}antilinkall [on/off] 
 ┃╠ ${prefix}antivirus [on/off] 
 ┃╠ ${prefix}antivirdoc [on/off]
 ┃╠ ${prefix}antislayer [on/off]
 ┃╠ ${prefix}antivirlog [on/off]
 ┃╠ ${prefix}antitoxic [on/off] 
 ┃╠ ${prefix}antiwame [on/off] 
 ┃╠ ${prefix}autoreply [on/off] 
 ┃╠ ${prefix}nsfw [on/off] 
 ┃╠ ${prefix}promote [reply/tag] 
 ┃╠ ${prefix}demote [reply/tag] 
 ┃╠ ${prefix}react [reply emoji] 
 ┃╠ ${prefix}vote 
 ┃╠ ${prefix}devote 
 ┃╠ ${prefix}upvote 
 ┃╠ ${prefix}checkvote 
 ┃╠ ${prefix}delvote 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}} //////////////////////// {buttonId: `command`, buttonText: {displayText: 'List Menu 🗂'}} 
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/groupmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'rpgmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Rpg Menu') 
 anjay = ` ┏━「 _RPG_ 」━━⭓ 
 ┃╔═══════✪         
 ┃╠ ${prefix}hunt 
 ┃╠ ${prefix}mine 
 ┃╠ ${prefix}fish 
 ┃╠ ${prefix}heal 
 ┃╠ ${prefix}blood 
 ┃╠ ${prefix}stab 
 ┃╠ ${prefix}buy 
 ┃╠ ${prefix}sell 
 ┃╠ ${prefix}profile 
 ┃╠ ${prefix}inventory 
 ┃╠ ${prefix}leaderboard 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/gamemenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'makermenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Maker Menu') 
 anjay = ` ┏━「 _TEXT MAKER_ 🖌 」━━⭓
 ┃╔═══════✪ 
 ┃╠ ${prefix}candy [text]
 ┃╠ ${prefix}blackpinkneon [text]
 ┃╠ ${prefix}deepsea [text]
 ┃╠ ${prefix}scifi [text]
 ┃╠ ${prefix}fiction [text]
 ┃╠ ${prefix}berry [text]
 ┃╠ ${prefix}fruitjuice [text]
 ┃╠ ${prefix}biscuit [text]
 ┃╠ ${prefix}wood [text]
 ┃╠ ${prefix}chocolate [text]
 ┃╠ ${prefix}matrix [text]
 ┃╠ ${prefix}blood [text]
 ┃╠ ${prefix}halloween [text]
 ┃╠ ${prefix}wicker [text]
 ┃╠ ${prefix}darkgold [text]
 ┃╠ ${prefix}firework [text]
 ┃╠ ${prefix}skeleton [text]
 ┃╠ ${prefix}sand [text]
 ┃╠ ${prefix}glue [text]
 ┃╠ ${prefix}leaves [text]
 ┃╠ ${prefix}magma [text]
 ┃╠ ${prefix}lava [text]
 ┃╠ ${prefix}rock [text]
 ┃╠ ${prefix}bloodglas [text]
 ┃╠ ${prefix}underwater [text]
 ┃╠ ${prefix}textmaker [text]
 ┃╠ ${prefix}honey [text]
 ┃╠ ${prefix}ice [text]
 ┃╠ ${prefix}watercolor [text]
 ┃╠ ${prefix}multicolor [text]
 ┃╠ ${prefix}snow [text]
 ┃╠ ${prefix}harrypot [text]
 ┃╠ ${prefix}harrypotter [text]
 ┃╠ ${prefix}brokenglass [text]
 ┃╠ ${prefix}waterpipe [text]
 ┃╠ ${prefix}spooky [text]
 ┃╠ ${prefix}circuit [text]
 ┃╠ ${prefix}metallic [text]
 ┃╠ ${prefix}demon [text]
 ┃╠ ${prefix}sparklechristmas [text]
 ┃╠ ${prefix}christmas [text]
 ┃╠ ${prefix}3dchristmas [text]
 ┃╠ ${prefix}3dbox [text]
 ┃╠ ${prefix}waterdrop [text]
 ┃╠ ${prefix}lion2 [text]
 ┃╠ ${prefix}papercut [text]
 ┃╠ ${prefix}transformer [text]
 ┃╠ ${prefix}neondevil [text]
 ┃╠ ${prefix}3davengers [text]
 ┃╠ ${prefix}3dstone [text]
 ┃╠ ${prefix}3dstone2 [text]
 ┃╠ ${prefix}summertime [text]
 ┃╠ ${prefix}thunder [text]
 ┃╠ ${prefix}window [text]
 ┃╠ ${prefix}graffiti [text]
 ┃╠ ${prefix}graffitibike [text]
 ┃╠ ${prefix}pornhub [text|text]
 ┃╠ ${prefix}glitch [text]
 ┃╠ ${prefix}blackpink [text]
 ┃╠ ${prefix}glitch2 [text]
 ┃╠ ${prefix}glitch3 [text]
 ┃╠ ${prefix}3dspace [text]
 ┃╠ ${prefix}lion [text]
 ┃╠ ${prefix}3dneon [text]
 ┃╠ ${prefix}greenneon [text]
 ┃╠ ${prefix}bokeh [text]
 ┃╠ ${prefix}holographic [text]
 ┃╠ ${prefix}bear [text]
 ┃╠ ${prefix}wolf [text]
 ┃╠ ${prefix}joker [text]
 ┃╠ ${prefix}dropwater [text]
 ┃╠ ${prefix}dropwater2 [text]
 ┃╠ ${prefix}thewall [text]
 ┃╠ ${prefix}neonlight [text]
 ┃╠ ${prefix}natural [text]
 ┃╠ ${prefix}carbon [text]
 ┃╠ ${prefix}pencil [text]
 ┃╠ ${prefix}blackpink2 [text]
 ┃╠ ${prefix}neon [text]
 ┃╠ ${prefix}neonlight2 [text]
 ┃╠ ${prefix}toxic [text]
 ┃╠ ${prefix}strawberry [text]
 ┃╠ ${prefix}discovery [text]
 ┃╠ ${prefix}1917 [text]
 ┃╠ ${prefix}sci_fi [text]
 ┃╠ ${prefix}ancient [text]
 ┃╠ ${prefix}fabric [text]
 ┃╠ ${prefix}hoorror [text]
 ┃╠ ${prefix}whitebear [text]
 ┃╠ ${prefix}juice [text]
 ┃╠ ${prefix}batman [text]
 ┃╠ ${prefix}multicolor [text]
 ┃╠ ${prefix}collwall [text]
 ┃╠ ${prefix}wonderful [text]
 ┃╠ ${prefix}cool [text]
 ┃╠ ${prefix}sketch [text]
 ┃╠ ${prefix}marvel [text]
 ┃╠ ${prefix}foggy [text]
 ┃╠ ${prefix}writing [text]
 ┃╠ ${prefix}halloweenfire [text]
 ┃╠ ${prefix}halloween [text]
 ┃╠ ${prefix}watercolor [text]
 ┃╠ ${prefix}classic [text]
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/makermenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'downloadmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Download Menu') 
 anjay = ` ┏━「 _DOWNLOAD_ 」━━⭓ 
 ┃╔═══════✪         
 ┃╠ ${prefix}instagram [url] 
 ┃╠ ${prefix}igtv [url] 
 ┃╠ ${prefix}igstory [username] 
 ┃╠ ${prefix}facebook [url] 
 ┃╠ ${prefix}fbmp3 [url] 
 ┃╠ ${prefix}twitter [url] 
 ┃╠ ${prefix}twittermp3 [url] 
 ┃╠ ${prefix}tiktok [url] 
 ┃╠ ${prefix}tiktokaudio [url] 
 ┃╠ ${prefix}tiktokmp3 [url]
 ┃╠ ${prefix}tiktokvn [url]
 ┃╠ ${prefix}mediafire [url] 
 ┃╠ ${prefix}ytmp3 [url|quality] 
 ┃╠ ${prefix}ytmp4 [url|quality] 
 ┃╠ ${prefix}getmusic [yt link] 
 ┃╠ ${prefix}getvideo [yt link] 
 ┃╠ ${prefix}gitclone [repo link] 
 ┃╠ ${prefix}soundcloud [url] 
 ┃╠ ${prefix}zippyshare [url] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/downloadmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'searchmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Search Menu') 
 anjay = ` ┏━「 _SEARCH_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}play [query] 
 ┃╠ ${prefix}song [query] 
 ┃╠ ${prefix}yts [query] 
 ┃╠ ${prefix}lyrics [query] 
 ┃╠ ${prefix}google [query] 
 ┃╠ ${prefix}playstore [query] 
 ┃╠ ${prefix}gimage [query] 
 ┃╠ ${prefix}pinterest [query] 
 ┃╠ ${prefix}image [query] 
 ┃╠ ${prefix}film [query] 
 ┃╠ ${prefix}wallpaper [query] 
 ┃╠ ${prefix}searchgc [query] 
 ┃╠ ${prefix}happymod [query] 
 ┃╠ ${prefix}servermc 
 ┃╠ ${prefix}mcpedl [query] 
 ┃╠ ${prefix}tvsearch [query] 
 ┃╠ ${prefix}wikimedia [query] 
 ┃╠ ${prefix}ytsearch [query] 
 ┃╠ ${prefix}ringtone [query] 
 ┃╠ ${prefix}webtoon [query] 
 ┃╠ ${prefix}anime [query] 
 ┃╠ ${prefix}animestory [query] 
 ┃╠ ${prefix}manga [query] 
 ┃╠ ${prefix}wattpad [query] 
 ┃╠ ${prefix}mcserver [ip|port] 
 ┃╠ ${prefix}drakor [query] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/searchmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'convertmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Convert Menu') 
 anjay = ` ┏━「 _CONVERT_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}toimage [reply stick] 
 ┃╠ ${prefix}sticker [reply img|gif] 
 ┃╠ ${prefix}take [reply img|gif|stik] 
 ┃╠ ${prefix}smeme [reply img] 
 ┃╠ ${prefix}smeme2 [reply text | text] New 🔥
 ┃╠ ${prefix}emoji [emoji] 
 ┃╠ ${prefix}tovideo [reply img] 
 ┃╠ ${prefix}togif [reply stick] 
 ┃╠ ${prefix}tourl [reply img] 
 ┃╠ ${prefix}tovn [reply aud] 
 ┃╠ ${prefix}tomp3 [reply vn] 
 ┃╠ ${prefix}toaudio [reply vid] 
 ┃╠ ${prefix}ebinary [reply txt] 
 ┃╠ ${prefix}dbinary [reply txt] 
 ┃╠ ${prefix}tinyurl [link] 
 ┃╠ ${prefix}styletext [text] 
 ┃╠ ${prefix}volume [reply aud] 
 ┃╠ ${prefix}tempo [reply aud] 
 ┃╠ ${prefix}bass [reply aud] 
 ┃╠ ${prefix}blown [reply aud] 
 ┃╠ ${prefix}deep [reply aud] 
 ┃╠ ${prefix}earrape [reply aud] 
 ┃╠ ${prefix}fast [reply aud] 
 ┃╠ ${prefix}fat [reply aud] 
 ┃╠ ${prefix}nightcore [reply aud] 
 ┃╠ ${prefix}reverse [reply aud] 
 ┃╠ ${prefix}robot [reply aud] 
 ┃╠ ${prefix}slow [reply aud] 
 ┃╠ ${prefix}squirrel [reply aud] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
{buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/convertmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'randomimagemenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Random Image Menu') 
 anjay = ` ┏━「 _RANDOM IMG_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}coffee 
 ┃╠ ${prefix}woof 
 ┃╠ ${prefix}meow 
 ┃╠ ${prefix}lizard 
 ┃╠ ${prefix}wallneon 
 ┃╠ ${prefix}wallpubg 
 ┃╠ ${prefix}wallml 
 ┃╠ ${prefix}wallrandom 
 ┃╠ ${prefix}wallcode 
 ┃╠ ${prefix}animewall [query] 
 ┃╠ ${prefix}animewall2 [query] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/randomimage.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
  
 case 'emotemenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Emote Menu') 
 anjay = ` ┏━「 _EMOTE_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}instagramemoji 
 ┃╠ ${prefix}facebookemoji 
 ┃╠ ${prefix}iphoneemoji 
 ┃╠ ${prefix}samsungemoji 
 ┃╠ ${prefix}joyemoji 
 ┃╠ ${prefix}skypeemoji 
 ┃╠ ${prefix}twitteremoji 
 ┃╠ ${prefix}whatsappemoji 
 ┃╠ ${prefix}microsoftemoji 
 ┃╠ ${prefix}googleemoji 
 ┃╠ ${prefix}pediaemoji 
 ┃╠ ${prefix}microsoftemoji 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/emotemenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'imageeffectmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Image Effect Menu') 
 anjay = ` ┏━「 _IMG EFFECT_ 」━━⭓ 
 ┃╔═════✪ 
 ┃╠ ${prefix}wanted 
 ┃╠ ${prefix}blur 
 ┃╠ ${prefix}framed 
 ┃╠ ${prefix}gayeffect 
 ┃╠ ${prefix}imagesketch 
 ┃╠ ${prefix}invert 
 ┃╠ ${prefix}burn 
 ┃╠ ${prefix}triggeredwebp 
 ┃╠ ${prefix}shit 
 ┃╠ ${prefix}rip 
 ┃╠ ${prefix}jail 
 ┃╠ ${prefix}beautifuleffect 
 ┃╠ ${prefix}deleteeffect 
 ┃╠ ${prefix}pixelate 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓`
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/imageeffect.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'animemenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Anime Menu') 
 anjay = ` ┏━「 _ANIME_ 」━━⭓ 
 ┃╔═══════✪  
 ┃╠ ${prefix}naruto 
 ┃╠ ${prefix}yaoi 
 ┃╠ ${prefix}neko2 
 ┃╠ ${prefix}waifu 
 ┃╠ ${prefix}waifu2 
 ┃╠ ${prefix}awoo2 
 ┃╠ ${prefix}shinobu 
 ┃╠ ${prefix}waifu3 
 ┃╠ ${prefix}foxgirl 
 ┃╠ ${prefix}megumin2 
 ┃╠ ${prefix}loli 
 ┃╠ ${prefix}8ball 
 ┃╠ ${prefix}animenom 
 ┃╠ ${prefix}goose 
 ┃╠ ${prefix}avatar 
 ┃╠ ${prefix}tickle 
 ┃╠ ${prefix}gecg 
 ┃╠ ${prefix}feed 
 ┃╠ ${prefix}animeslap 
 ┃╠ ${prefix}animespank 
 ┃╠ ${prefix}animepat 
 ┃╠ ${prefix}animeneko 
 ┃╠ ${prefix}animekiss 
 ┃╠ ${prefix}animewlp 
 ┃╠ ${prefix}animecuddle 
 ┃╠ ${prefix}animecry 
 ┃╠ ${prefix}animekill 
 ┃╠ ${prefix}animelick 
 ┃╠ ${prefix}animebite 
 ┃╠ ${prefix}animeyeet 
 ┃╠ ${prefix}animebully 
 ┃╠ ${prefix}animebonk 
 ┃╠ ${prefix}animewink 
 ┃╠ ${prefix}animepoke 
 ┃╠ ${prefix}animesmile 
 ┃╠ ${prefix}animewave 
 ┃╠ ${prefix}animeawoo 
 ┃╠ ${prefix}animeblush 
 ┃╠ ${prefix}animesmug 
 ┃╠ ${prefix}animeglomp 
 ┃╠ ${prefix}animehappy 
 ┃╠ ${prefix}animedance 
 ┃╠ ${prefix}animecringe 
 ┃╠ ${prefix}animehighfive 
 ┃╠ ${prefix}animehandhold 
 ┃╠ ${prefix}animemegumin 
 ┃╠ ${prefix}smug2 
 ┃╠ ${prefix}couplepp 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/animemenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'stickermenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Sticker Menu') 
 anjay = ` ┏━「 _STICKER_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}patrick 
 ┃╠ ${prefix}emoji 
 ┃╠ ${prefix}emojimix 
 ┃╠ ${prefix}attp 
 ┃╠ ${prefix}ttp 
 ┃╠ ${prefix}doge 
 ┃╠ ${prefix}lovesticker 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/stickermenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'animestickermenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Anime Sticker Menu') 
 anjay = ` ┏━「 _ANIME STICKER_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}loli 
 ┃╠ ${prefix}bully 
 ┃╠ ${prefix}cuddle 
 ┃╠ ${prefix}cry 
 ┃╠ ${prefix}hug 
 ┃╠ ${prefix}awoo 
 ┃╠ ${prefix}kiss 
 ┃╠ ${prefix}lick 
 ┃╠ ${prefix}pat 
 ┃╠ ${prefix}smug 
 ┃╠ ${prefix}bonk 
 ┃╠ ${prefix}yeet 
 ┃╠ ${prefix}blush 
 ┃╠ ${prefix}smile 
 ┃╠ ${prefix}wave 
 ┃╠ ${prefix}highfive 
 ┃╠ ${prefix}handhold 
 ┃╠ ${prefix}nom 
 ┃╠ ${prefix}glomp 
 ┃╠ ${prefix}bite 
 ┃╠ ${prefix}slap 
 ┃╠ ${prefix}kill 
 ┃╠ ${prefix}happy 
 ┃╠ ${prefix}wink 
 ┃╠ ${prefix}poke 
 ┃╠ ${prefix}dance 
 ┃╠ ${prefix}cringe 
 ┃╠ ${prefix}neko 
 ┃╠ ${prefix}gura 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/animesticker.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'nsfwmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Nsfw Menu') 
 anjay = ` ┏━「 _NSFW_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}hentaivideo 
 ┃╠ ${prefix}yuri (error)
 ┃╠ ${prefix}masturbation (error)
 ┃╠ ${prefix}thighs (error)
 ┃╠ ${prefix}pussy (error)
 ┃╠ ${prefix}panties (error)
 ┃╠ ${prefix}orgy (error)
 ┃╠ ${prefix}ahegao (error)
 ┃╠ ${prefix}ass (error)
 ┃╠ ${prefix}bdsm (error)
 ┃╠ ${prefix}blowjob (error)
 ┃╠ ${prefix}cuckold (error)
 ┃╠ ${prefix}ero (error)
 ┃╠ ${prefix}gasm 
 ┃╠ ${prefix}cum (error)
 ┃╠ ${prefix}femdom (error)
 ┃╠ ${prefix}foot (error)
 ┃╠ ${prefix}gangbang (error)
 ┃╠ ${prefix}glasses (error)
 ┃╠ ${prefix}jahy (error)
 ┃╠ ${prefix}trap 
 ┃╠ ${prefix}blowjobgif 
 ┃╠ ${prefix}spank 
 ┃╠ ${prefix}hneko 
 ┃╠ ${prefix}nwaifu 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/nsfwmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'funmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Fun Menu') 
 anjay = ` ┏━「 _FUN_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}kerangajaib [text]
 ┃╠ ${prefix}how [text]
 ┃╠ ${prefix}when [text] 
 ┃╠ ${prefix}where [text] 
 ┃╠ ${prefix}is [text] 
 ┃╠ ${prefix}what [text] 
 ┃╠ ${prefix}can [text] 
 ┃╠ ${prefix}rate [text] 
 ┃╠ ${prefix}wangy [text] 
 ┃╠ ${prefix}beautifulcheck [tag] 
 ┃╠ ${prefix}awesomecheck [tag] 
 ┃╠ ${prefix}prettycheck [tag] 
 ┃╠ ${prefix}lesbiancheck [tag] 
 ┃╠ ${prefix}gaycheck [tag] 
 ┃╠ ${prefix}cutecheck [tag] 
 ┃╠ ${prefix}uglycheck [tag] 
 ┃╠ ${prefix}hornycheck [tag] 
 ┃╠ ${prefix}charactercheck [tag] 
 ┃╠ ${prefix}lovelycheck [tag] 
 ┃╠ ${prefix}couple 
 ┃╠ ${prefix}mysoulmate 
 ┃╠ ${prefix}hot 
 ┃╠ ${prefix}sexy 
 ┃╠ ${prefix}kind 
 ┃╠ ${prefix}idiot 
 ┃╠ ${prefix}handsome 
 ┃╠ ${prefix}beautiful 
 ┃╠ ${prefix}cute 
 ┃╠ ${prefix}pretty 
 ┃╠ ${prefix}lesbian 
 ┃╠ ${prefix}noob 
 ┃╠ ${prefix}bastard 
 ┃╠ ${prefix}foolish 
 ┃╠ ${prefix}nerd 
 ┃╠ ${prefix}asshole 
 ┃╠ ${prefix}gay 
 ┃╠ ${prefix}smart 
 ┃╠ ${prefix}stubble 
 ┃╠ ${prefix}dog 
 ┃╠ ${prefix}horny 
 ┃╠ ${prefix}cunt 
 ┃╠ ${prefix}wibu 
 ┃╠ ${prefix}noobra 
 ┃╠ ${prefix}nibba 
 ┃╠ ${prefix}nibbi 
 ┃╠ ${prefix}comrade 
 ┃╠ ${prefix}mumu 
 ┃╠ ${prefix}rascal 
 ┃╠ ${prefix}scumbag 
 ┃╠ ${prefix}nuts 
 ┃╠ ${prefix}fagot 
 ┃╠ ${prefix}scoundrel 
 ┃╠ ${prefix}ditch 
 ┃╠ ${prefix}dope 
 ┃╠ ${prefix}gucci 
 ┃╠ ${prefix}lit 
 ┃╠ ${prefix}dumbass 
 ┃╠ ${prefix}crackhead 
 ┃╠ ${prefix}mf 
 ┃╠ ${prefix}motherfucker 
 ┃╠ ${prefix}sucker 
 ┃╠ ${prefix}fuckboy 
 ┃╠ ${prefix}playboy 
 ┃╠ ${prefix}fuckgirl 
 ┃╠ ${prefix}playgirl 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/funmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'soundmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Sound Menu') 
 anjay = ` ┏━「 _SOUND_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}sound1 
 ┃╠ ${prefix}sound2 
 ┃╠ ${prefix}sound3 
 ┃╠ ${prefix}sound4 
 ┃╠ ${prefix}sound5 
 ┃╠ ${prefix}sound6 
 ┃╠ ${prefix}sound7 
 ┃╠ ${prefix}sound8 
 ┃╠ ${prefix}sound9 
 ┃╠ ${prefix}sound10 
 ┃╠ ${prefix}sound11 
 ┃╠ ${prefix}sound12 
 ┃╠ ${prefix}sound13 
 ┃╠ ${prefix}sound14 
 ┃╠ ${prefix}sound15 
 ┃╠ ${prefix}sound16 
 ┃╠ ${prefix}sound17 
 ┃╠ ${prefix}sound18 
 ┃╠ ${prefix}sound19 
 ┃╠ ${prefix}sound20 
 ┃╠ ${prefix}sound21 
 ┃╠ ${prefix}sound22 
 ┃╠ ${prefix}sound23 
 ┃╠ ${prefix}sound24 
 ┃╠ ${prefix}sound25 
 ┃╠ ${prefix}sound26 
 ┃╠ ${prefix}sound27 
 ┃╠ ${prefix}sound28 
 ┃╠ ${prefix}sound29 
 ┃╠ ${prefix}sound30 
 ┃╠ ${prefix}sound31 
 ┃╠ ${prefix}sound32 
 ┃╠ ${prefix}sound33 
 ┃╠ ${prefix}sound34 
 ┃╠ ${prefix}sound35 
 ┃╠ ${prefix}sound36 
 ┃╠ ${prefix}sound37 
 ┃╠ ${prefix}sound38 
 ┃╠ ${prefix}sound39 
 ┃╠ ${prefix}sound40 
 ┃╠ ${prefix}sound41 
 ┃╠ ${prefix}sound42 
 ┃╠ ${prefix}sound43 
 ┃╠ ${prefix}sound44 
 ┃╠ ${prefix}sound45 
 ┃╠ ${prefix}sound46 
 ┃╠ ${prefix}sound47 
 ┃╠ ${prefix}sound48 
 ┃╠ ${prefix}sound49 
 ┃╠ ${prefix}sound50 
 ┃╠ ${prefix}sound51 
 ┃╠ ${prefix}sound52 
 ┃╠ ${prefix}sound53 
 ┃╠ ${prefix}sound54 
 ┃╠ ${prefix}sound55 
 ┃╠ ${prefix}sound56 
 ┃╠ ${prefix}sound57 
 ┃╠ ${prefix}sound58 
 ┃╠ ${prefix}sound59 
 ┃╠ ${prefix}sound60 
 ┃╠ ${prefix}sound61 
 ┃╠ ${prefix}sound62 
 ┃╠ ${prefix}sound63 
 ┃╠ ${prefix}sound64 
 ┃╠ ${prefix}sound65 
 ┃╠ ${prefix}sound66 
 ┃╠ ${prefix}sound67 
 ┃╠ ${prefix}sound68 
 ┃╠ ${prefix}sound69 
 ┃╠ ${prefix}sound70 
 ┃╠ ${prefix}sound71 
 ┃╠ ${prefix}sound72 
 ┃╠ ${prefix}sound73 
 ┃╠ ${prefix}sound74 
 ┃╠ ${prefix}sound75 
 ┃╠ ${prefix}sound76 
 ┃╠ ${prefix}sound77 
 ┃╠ ${prefix}sound78 
 ┃╠ ${prefix}sound79 
 ┃╠ ${prefix}sound80 
 ┃╠ ${prefix}sound81 
 ┃╠ ${prefix}sound82 
 ┃╠ ${prefix}sound83 
 ┃╠ ${prefix}sound84 
 ┃╠ ${prefix}sound85 
 ┃╠ ${prefix}sound86 
 ┃╠ ${prefix}sound87 
 ┃╠ ${prefix}sound88 
 ┃╠ ${prefix}sound89 
 ┃╠ ${prefix}sound90 
 ┃╠ ${prefix}sound91 
 ┃╠ ${prefix}sound92 
 ┃╠ ${prefix}sound93 
 ┃╠ ${prefix}sound94 
 ┃╠ ${prefix}sound95 
 ┃╠ ${prefix}sound96 
 ┃╠ ${prefix}sound97 
 ┃╠ ${prefix}sound98 
 ┃╠ ${prefix}sound99 
 ┃╠ ${prefix}sound100 
 ┃╠ ${prefix}sound101 
 ┃╠ ${prefix}sound102 
 ┃╠ ${prefix}sound103 
 ┃╠ ${prefix}sound104 
 ┃╠ ${prefix}sound105 
 ┃╠ ${prefix}sound106 
 ┃╠ ${prefix}sound107 
 ┃╠ ${prefix}sound108 
 ┃╠ ${prefix}sound109 
 ┃╠ ${prefix}sound110 
 ┃╠ ${prefix}sound111 
 ┃╠ ${prefix}sound112 
 ┃╠ ${prefix}sound113 
 ┃╠ ${prefix}sound114 
 ┃╠ ${prefix}sound115 
 ┃╠ ${prefix}sound116 
 ┃╠ ${prefix}sound117 
 ┃╠ ${prefix}sound118 
 ┃╠ ${prefix}sound119 
 ┃╠ ${prefix}sound120 
 ┃╠ ${prefix}sound121 
 ┃╠ ${prefix}sound122 
 ┃╠ ${prefix}sound123 
 ┃╠ ${prefix}sound124 
 ┃╠ ${prefix}sound125 
 ┃╠ ${prefix}sound126 
 ┃╠ ${prefix}sound127 
 ┃╠ ${prefix}sound128 
 ┃╠ ${prefix}sound129 
 ┃╠ ${prefix}sound130 
 ┃╠ ${prefix}sound131 
 ┃╠ ${prefix}sound132 
 ┃╠ ${prefix}sound133 
 ┃╠ ${prefix}sound134 
 ┃╠ ${prefix}sound135 
 ┃╠ ${prefix}sound136 
 ┃╠ ${prefix}sound137 
 ┃╠ ${prefix}sound138 
 ┃╠ ${prefix}sound139 
 ┃╠ ${prefix}sound140 
 ┃╠ ${prefix}sound141 
 ┃╠ ${prefix}sound142 
 ┃╠ ${prefix}sound143 
 ┃╠ ${prefix}sound144 
 ┃╠ ${prefix}sound145 
 ┃╠ ${prefix}sound146 
 ┃╠ ${prefix}sound147 
 ┃╠ ${prefix}sound148 
 ┃╠ ${prefix}sound149 
 ┃╠ ${prefix}sound150 
 ┃╠ ${prefix}sound151 
 ┃╠ ${prefix}sound152 
 ┃╠ ${prefix}sound153 
 ┃╠ ${prefix}sound154 
 ┃╠ ${prefix}sound155 
 ┃╠ ${prefix}sound156 
 ┃╠ ${prefix}sound157 
 ┃╠ ${prefix}sound158 
 ┃╠ ${prefix}sound159 
 ┃╠ ${prefix}sound160 
 ┃╠ ${prefix}sound161 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/soundmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'adzanmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(`https://telegra.ph/file/4e72707e3de85cca2e925.jpg`) 
 anjay = `┏━「 _ADZAN REMIX_ 🎧」━━⭓ 
┃╔══✪
┃╠> ezan remix 
┃╠> ezan remix 1
┃╠> ezan remix 2
┃╠> ezan remix 3
┃╠> ezan remix 4
┃╠> ezan remix 5
┃╠> ezan remix 6
┃╠> ezan remix 7
┃╠> ezan remix 8
┃╠> ezan remix 9
┃╠> ezan remix 10
┃╠> ezan remix 11
┃╠> ezan remix 12
┃╠> ezan remix 13
┃╠> ezan remix 14
┃╠> ezan remix 15
┃╚═════════════✪
┗━━「 *Created by Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pic = [tu,tri,fo,faif,seven,egh,nen,ten,elepen,welep,faiften]
 let pics = pic[Math.floor(Math.random() * (pic.length))]
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'gamemenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Game Menu') 
 anjay = ` ┏━「 _GAME_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}family100
 ┃╠ ${prefix}truth
 ┃╠ ${prefix}dare 
 ┃╠ ${prefix}tictactoe 
 ┃╠ ${prefix}delttt 
 ┃╠ ${prefix}guess [option] 
 ┃╠ ${prefix}math [mode] 
 ┃╠ ${prefix}suitpvp [tag] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/gamemenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'anonymousmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Anonymous Menu') 
 anjay = ` ┏━「 _ANONYMOUS_ 」━━⭓ 
 ┃╔═══✪
 ┃╠ ${prefix}anonymous 
 ┃╠ ${prefix}start 
 ┃╠ ${prefix}next 
 ┃╠ ${prefix}leave 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pic = [tu,tri,fo,faif,seven,egh,nen,ten,elepen,welep,faiften]
 let pics = pic[Math.floor(Math.random() * (pic.length))]
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'toolmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Tool Menu') 
anjay = ` ┏━「 _TOOL_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ~${prefix}translate [text]~ (kedaluwarsa)
 ┃╠ ${prefix}fliptext [text] 
 ┃╠ ${prefix}toletter [number] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
 let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/toolmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
break 
 case 'databasemenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Database Menu') 
 anjay = ` ┏━「 _DATABASE_ 」━━⭓ 
 ┃╔═══✪ 
 ┃╠ ${prefix}setcmd 
 ┃╠ ${prefix}listcmd 
 ┃╠ ${prefix}delcmd 
 ┃╠ ${prefix}lockcmd 
 ┃╠ ${prefix}addmsg 
 ┃╠ ${prefix}listmsg 
 ┃╠ ${prefix}getmsg 
 ┃╠ ${prefix}delmsg 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `tutorx`, buttonText: {displayText: 'Apa itu Database Menu?'}},{buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/databasemenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
break 
case 'tutorx': {
	  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 caption = `*「 DATABASE MENU 💡 」*\n\n• *setcmd*\nUntuk mengatur media (audio/stiker/video/foto) sebagai command/perintah [tidak permanen]\nContoh: (balas stiker/audio/video/foto dulu) lalu ketik .setcmd hentaivideo\n• *listcmd*\nUntuk melihat daftar command/perintah\n• *delcmd*\nUntuk menghapus command yg ada di media\nContoh: (kirim dan balas stiker/audio/foto/video yg ada commandnya, lalu ketik .delcmd\n• *lockcmd*\nUntuk mengunci/menandai command\nContoh: balas pesan media yg ada commandnya, lalu ketik .lockcmd\n• *addmsg*\nUntuk menyimpan pesan ke database bot [tidak permanen]\nContoh: (balas pesan teks dulu) \nlalu ketik .addmsg <nama file>\n• *listmsg*\nMelihat daftar pesan yang disimpan\n• *getmsg*\nUntuk mengakses/membuka file yang disimpan di database bot\nContoh: misal nama filenya 'jasjus', tinggal ketik .getmsg jasjus\n• *delmsg*\nUntuk menghapus file yang disimpan di database bot\nContoh: .delmsg <nama file>`
  let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 XeonBotInc.sendButtonText(m.chat, buttons, caption, `${pushname}`)
	}
break
 case 'indomenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Indo Menu') 
 anjay = ` ┏━「 _INDO_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}darkjoke 
 ┃╠ ${prefix}quotes 
 ┃╠ ${prefix}animequotes 
 ┃╠ ${prefix}jalantikus-meme 
 ┃╠ ${prefix}merdeka-news  
 ┃╠ ${prefix}kontan-news  
 ┃╠ ${prefix}cnbc-news  
 ┃╠ ${prefix}tribun-news  
 ┃╠ ${prefix}indozone-news  
 ┃╠ ${prefix}kompas-news  
 ┃╠ ${prefix}detik-news  
 ┃╠ ${prefix}daily-news  
 ┃╠ ${prefix}inews-news  
 ┃╠ ${prefix}okezone-news  
 ┃╠ ${prefix}sindo-news  
 ┃╠ ${prefix}tempo-news  
 ┃╠ ${prefix}antara-news  
 ┃╠ ${prefix}cnn-news  
 ┃╠ ${prefix}fajar-news  
 ┃╠ ${prefix}cinemaschedule 
 ┃╠ ${prefix}wiki 
 ┃╠ ${prefix}covidindo 
 ┃╠ ${prefix}earthquake 
 ┃╠ ${prefix}tvschedule 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓`
 let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/indomenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
break 
 case 'indohoroscopemenu': {
                if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group) 
 var unicorn = await getBuffer(picak+'Indo Horoscope Menu') 
anjay = ` ┏━「 _INDO HOROSCOPE_ 」━━⭓ 
 ┃╔═✪      
 ┃╠ ${prefix}nomorhoki 
 ┃╠ ${prefix}artimimpi  
 ┃╠ ${prefix}artinama  
 ┃╠ ${prefix}ramaljodoh  
 ┃╠ ${prefix}ramaljodohbali  
 ┃╠ ${prefix}suamiistri  
 ┃╠ ${prefix}ramalcinta  
 ┃╠ ${prefix}cocoknama  
 ┃╠ ${prefix}pasangan  
 ┃╠ ${prefix}jadiannikah  
 ┃╠ ${prefix}sifatusaha  
 ┃╠ ${prefix}rezeki  
 ┃╠ ${prefix}pekerjaan  
 ┃╠ ${prefix}nasib  
 ┃╠ ${prefix}penyakit  
 ┃╠ ${prefix}tarot  
 ┃╠ ${prefix}fengshui  
 ┃╠ ${prefix}haribaik  
 ┃╠ ${prefix}harisangar  
 ┃╠ ${prefix}harisial 
 ┃╠ ${prefix}nagahari 
 ┃╠ ${prefix}arahrezeki 
 ┃╠ ${prefix}peruntungan  
 ┃╠ ${prefix}weton  
 ┃╠ ${prefix}karakter 
 ┃╠ ${prefix}keberuntungan 
 ┃╠ ${prefix}memancing 
 ┃╠ ${prefix}masasubur 
 ┃╠ ${prefix}zodiak 
 ┃╠ ${prefix}shio 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓`

 let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/horoscopemenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'othermenu': 
                if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group) 

 var unicorn = await getBuffer(picak+'Other Menu') 
 anjay = ` ┏━「 _OTHER_ 」━━⭓ 
 ┃╔═══════✪      
 ┃╠ ${prefix}afk 
 ┃╠ ${prefix}readmore [text] 
 ┃╠ ${prefix}toviewonce 
 ┃╠ ${prefix}getpp
 ┃╠ ${prefix}chatinfo 
 ┃╠ ${prefix}alive 
 ┃╠ ${prefix}script 
 ┃╠ ${prefix}speedtest 
 ┃╠ ${prefix}ping 
 ┃╠ ${prefix}owner 
 ┃╠ ${prefix}menu 
 ┃╠ ${prefix}delete 
 ┃╠ ${prefix}chatinfo 
 ┃╠ ${prefix}quoted 
 ┃╠ ${prefix}listpc 
 ┃╠ ${prefix}listgc 
 ┃╠ ${prefix}donate 
 ┃╠ ${prefix}request 
 ┃╠ ${prefix}report [bug] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓`
                     let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'), surface: 200, message: `${pushname}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
 let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/othermenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs, 
 /////////////// jpegThumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic2.jpg'), 
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
///// fileLength: 666, 
//// pageCount: 666,
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`,
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: websitex, 
  mediaUrl: websitex 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 
         }


if (!isAdmins && !isCreator)
if (WallDua)
if (!AntiNsfw)
  switch(command) {
case 'allmenu': case 'allmenus': case 'menu': {
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!m.isGroup) return reply(mess.group)
	if (m.message && msgFilter.addFilter(from)) return
	XeonBotInc.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
var unicorn = await getBuffer(picak+'All Menu')
let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                
teks = `*Response Speed* ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\n*Runtime* : ${runtime(process.uptime())}\n\n*Menu*:\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n ┏━「 _KHUSUS OWNER_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}self 
 ┃╠ ${prefix}public 
 ┃╠ ${prefix}antitag 
 ┃╠ ${prefix}rentbot [add/del] 
 ┃╠ ${prefix}rentlist 
 ┃╠ ${prefix}ban [add/del] 
 ┃╠ ${prefix}banchat [on/off]  
 ┃╠ ${prefix}leavegc 
 ┃╠ ${prefix}setbio 
 ┃╠ ${prefix}bcgroup [text] 
 ┃╠ ${prefix}bcall [text] 
 ┃╠ ${prefix}bcimage [image] 
 ┃╠ ${prefix}bcvideo [video] 
 ┃╠ ${prefix}bcaudio [audio] 
 ┃╠ ${prefix}bcloc [text] 
 ┃╠ ${prefix}setppbot [image] 
 ┃╠ ${prefix}setexif 
 ┃╠ ${prefix}block [tag/number] 
 ┃╠ ${prefix}unblock [tag/number] 
 ┃╠ ${prefix}coowner [add/del] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _GROUP_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}welcome [on/off]
 ┃╠ ${prefix}groupsetting 
 ┃╠ ${prefix}grouplink 
 ┃╠ ${prefix}ephemeral [option] 
 ┃╠ ${prefix}setgcpp [image] 
 ┃╠ ${prefix}setname [text] 
 ┃╠ ${prefix}setdesc [text] 
 ┃╠ ${prefix}groupmode [open/close]
 ┃╠ ${prefix}resetgrouplink 
 ┃╠ ${prefix}editinfo [option] 
 ┃╠ ~${prefix}add [user]~
 ┃╠ ${prefix}kick [reply/tag] 
 ┃╠ ${prefix}hidetag / htag [text] 
 ┃╠ ${prefix}tagall [text] 
 ┃╠ ${prefix}antilinkgc [on/off] 
 ┃╠ ${prefix}antilinktg [on/off] 
 ┃╠ ${prefix}antilinktt [on/off] 
 ┃╠ ${prefix}antilinkytch [on/off] 
 ┃╠ ${prefix}antilinkytvid [on/off] 
 ┃╠ ${prefix}antilinkig [on/off] 
 ┃╠ ${prefix}antilinkfb [on/off] 
 ┃╠ ${prefix}antilinktwit [on/off] 
 ┃╠ ${prefix}antilinkall [on/off] 
 ┃╠ ${prefix}antivirus [on/off] 
 ┃╠ ${prefix}antivirdoc [on/off]
 ┃╠ ${prefix}antislayer [on/off]
 ┃╠ ${prefix}antivirlog [on/off]
 ┃╠ ${prefix}antitoxic [on/off] 
 ┃╠ ${prefix}antiwame [on/off] 
 ┃╠ ${prefix}autoreply [on/off] 
 ┃╠ ${prefix}nsfw [on/off] 
 ┃╠ ${prefix}promote [reply/tag] 
 ┃╠ ${prefix}demote [reply/tag] 
 ┃╠ ${prefix}react [reply emoji] 
 ┃╠ ${prefix}vote
 ┃╠ ${prefix}devote 
 ┃╠ ${prefix}upvote 
 ┃╠ ${prefix}checkvote 
 ┃╠ ${prefix}delvote 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _TEXT MAKER_ 」━━⭓
 ┃╔═══════✪ 
 ┃╠ ${prefix}candy [text]
 ┃╠ ${prefix}blackpinkneon [text]
 ┃╠ ${prefix}deepsea [text]
 ┃╠ ${prefix}scifi [text]
 ┃╠ ${prefix}fiction [text]
 ┃╠ ${prefix}berry [text]
 ┃╠ ${prefix}fruitjuice [text]
 ┃╠ ${prefix}biscuit [text]
 ┃╠ ${prefix}wood [text]
 ┃╠ ${prefix}chocolate [text]
 ┃╠ ${prefix}matrix [text]
 ┃╠ ${prefix}blood [text]
 ┃╠ ${prefix}halloween [text]
 ┃╠ ${prefix}wicker [text]
 ┃╠ ${prefix}darkgold [text]
 ┃╠ ${prefix}firework [text]
 ┃╠ ${prefix}skeleton [text]
 ┃╠ ${prefix}sand [text]
 ┃╠ ${prefix}glue [text]
 ┃╠ ${prefix}leaves [text]
 ┃╠ ${prefix}magma [text]
 ┃╠ ${prefix}lava [text]
 ┃╠ ${prefix}rock [text]
 ┃╠ ${prefix}bloodglas [text]
 ┃╠ ${prefix}underwater [text]
 ┃╠ ${prefix}textmaker [text]
 ┃╠ ${prefix}honey [text]
 ┃╠ ${prefix}ice [text]
 ┃╠ ${prefix}watercolor [text]
 ┃╠ ${prefix}multicolor [text]
 ┃╠ ${prefix}snow [text]
 ┃╠ ${prefix}harrypot [text]
 ┃╠ ${prefix}harrypotter [text]
 ┃╠ ${prefix}brokenglass [text]
 ┃╠ ${prefix}waterpipe [text]
 ┃╠ ${prefix}spooky [text]
 ┃╠ ${prefix}circuit [text]
 ┃╠ ${prefix}metallic [text]
 ┃╠ ${prefix}demon [text]
 ┃╠ ${prefix}sparklechristmas [text]
 ┃╠ ${prefix}christmas [text]
 ┃╠ ${prefix}3dchristmas [text]
 ┃╠ ${prefix}3dbox [text]
 ┃╠ ${prefix}waterdrop [text]
 ┃╠ ${prefix}lion2 [text]
 ┃╠ ${prefix}papercut [text]
 ┃╠ ${prefix}transformer [text]
 ┃╠ ${prefix}neondevil [text]
 ┃╠ ${prefix}3davengers [text]
 ┃╠ ${prefix}3dstone [text]
 ┃╠ ${prefix}3dstone2 [text]
 ┃╠ ${prefix}summertime [text]
 ┃╠ ${prefix}thunder [text]
 ┃╠ ${prefix}window [text]
 ┃╠ ${prefix}graffiti [text]
 ┃╠ ${prefix}graffitibike [text]
 ┃╠ ${prefix}pornhub [text]
 ┃╠ ${prefix}glitch [text]
 ┃╠ ${prefix}blackpink [text]
 ┃╠ ${prefix}glitch2 [text]
 ┃╠ ${prefix}glitch3 [text]
 ┃╠ ${prefix}3dspace [text]
 ┃╠ ${prefix}lion [text]
 ┃╠ ${prefix}3dneon [text]
 ┃╠ ${prefix}greenneon [text]
 ┃╠ ${prefix}bokeh [text]
 ┃╠ ${prefix}holographic [text]
 ┃╠ ${prefix}bear [text]
 ┃╠ ${prefix}wolf [text]
 ┃╠ ${prefix}joker [text]
 ┃╠ ${prefix}dropwater [text]
 ┃╠ ${prefix}dropwater2 [text]
 ┃╠ ${prefix}thewall [text]
 ┃╠ ${prefix}neonlight [text]
 ┃╠ ${prefix}natural [text]
 ┃╠ ${prefix}carbon [text]
 ┃╠ ${prefix}pencil [text]
 ┃╠ ${prefix}blackpink2 [text]
 ┃╠ ${prefix}neon [text]
 ┃╠ ${prefix}neonlight2 [text]
 ┃╠ ${prefix}toxic [text]
 ┃╠ ${prefix}strawberry [text]
 ┃╠ ${prefix}discovery [text]
 ┃╠ ${prefix}1917 [text]
 ┃╠ ${prefix}sci_fi [text]
 ┃╠ ${prefix}ancient [text]
 ┃╠ ${prefix}fabric [text]
 ┃╠ ${prefix}hoorror [text]
 ┃╠ ${prefix}whitebear [text]
 ┃╠ ${prefix}juice [text]
 ┃╠ ${prefix}batman [text]
 ┃╠ ${prefix}multicolor [text]
 ┃╠ ${prefix}collwall [text]
 ┃╠ ${prefix}wonderful [text]
 ┃╠ ${prefix}cool [text]
 ┃╠ ${prefix}sketch [text]
 ┃╠ ${prefix}marvel [text]
 ┃╠ ${prefix}foggy [text]
 ┃╠ ${prefix}writing [text]
 ┃╠ ${prefix}halloweenfire [text]
 ┃╠ ${prefix}halloween [text]
 ┃╠ ${prefix}watercolor [text]
 ┃╠ ${prefix}classic [text]
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _DOWNLOAD_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}instagram [url] 
 ┃╠ ${prefix}igtv [url] 
 ┃╠ ${prefix}igstory [username] 
 ┃╠ ${prefix}facebook [url]
 ┃╠ ${prefix}fbmp3 [url] 
 ┃╠ ${prefix}twitter [url] 
 ┃╠ ${prefix}twittermp3 [url] 
 ┃╠ ${prefix}tiktok [url] 
 ┃╠ ${prefix}tiktokaudio[url] 
 ┃╠ ${prefix}tiktoknowm [url] 
 ┃╠ ${prefix}mediafire [url] 
 ┃╠ ${prefix}ytmp3 [url | quality] 
 ┃╠ ${prefix}ytmp4 [url | quality] 
 ┃╠ ${prefix}getmusic [yt link] 
 ┃╠ ${prefix}getvideo [yt link] 
 ┃╠ ${prefix}gitclone [repo link] 
 ┃╠ ${prefix}soundcloud [url] 
 ┃╠ ${prefix}zippyshare [url] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _SEARCH_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}play [query] 
 ┃╠ ${prefix}song [query] 
 ┃╠ ${prefix}yts [query] 
 ┃╠ ${prefix}lyrics [query] 
 ┃╠ ${prefix}google [query] 
 ┃╠ ${prefix}playstore [query] 
 ┃╠ ${prefix}gimage [query] 
 ┃╠ ${prefix}pinterest [query] 
 ┃╠ ${prefix}image [query] 
 ┃╠ ${prefix}film [query] 
 ┃╠ ${prefix}wallpaper [query] 
 ┃╠ ${prefix}searchgc [query] 
 ┃╠ ${prefix}happymod [query] 
 ┃╠ ${prefix}servermc 
 ┃╠ ${prefix}mcpedl [query] 
 ┃╠ ${prefix}tvsearch [query] 
 ┃╠ ${prefix}wikimedia [query] 
 ┃╠ ${prefix}ytsearch [query] 
 ┃╠ ${prefix}ringtone [query] 
 ┃╠ ${prefix}webtoon [query] 
 ┃╠ ${prefix}anime [query] 
 ┃╠ ${prefix}animestory [query] 
 ┃╠ ${prefix}manga [query] 
 ┃╠ ${prefix}wattpad [query] 
 ┃╠ ${prefix}mcserver [ip|port] 
 ┃╠ ${prefix}drakor [query] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _CONVERT_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}toimage [reply stick] 
 ┃╠ ${prefix}sticker [reply img | gif] 
 ┃╠ ${prefix}take [reply img | gif | stik] 
 ┃╠ ${prefix}smeme [reply img] 
 ┃╠ ${prefix}smeme2 [reply img *text | text*]
 ┃╠ ${prefix}emoji [emoji] 
 ┃╠ ${prefix}tovideo [reply img] 
 ┃╠ ${prefix}togif [reply stick] 
 ┃╠ ${prefix}tourl [reply img] 
 ┃╠ ${prefix}tovn [reply aud] 
 ┃╠ ${prefix}tomp3 [reply vn] 
 ┃╠ ${prefix}toaudio [reply vid] 
 ┃╠ ${prefix}ebinary [reply txt] 
 ┃╠ ${prefix}dbinary [reply txt] 
 ┃╠ ${prefix}tinyurl [link] 
 ┃╠ ${prefix}styletext [text] 
 ┃╠ ${prefix}volume [reply aud] 
 ┃╠ ${prefix}tempo [reply aud] 
 ┃╠ ${prefix}bass [reply aud] 
 ┃╠ ${prefix}blown [reply aud] 
 ┃╠ ${prefix}deep [reply aud] 
 ┃╠ ${prefix}earrape [reply aud] 
 ┃╠ ${prefix}fast [reply aud] 
 ┃╠ ${prefix}fat [reply aud] 
 ┃╠ ${prefix}nightcore [reply aud] 
 ┃╠ ${prefix}reverse [reply aud] 
 ┃╠ ${prefix}robot [reply aud] 
 ┃╠ ${prefix}slow [reply aud] 
 ┃╠ ${prefix}squirrel [reply aud] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _IMG EFFECT_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}wanted [reply img]
 ┃╠ ${prefix}blur [reply img]
 ┃╠ ${prefix}framed [reply img]
 ┃╠ ${prefix}gayeffect [reply img]
 ┃╠ ${prefix}imagesketch [reply img]
 ┃╠ ${prefix}invert [reply img]
 ┃╠ ${prefix}burn [reply img]
 ┃╠ ${prefix}triggeredwebp [reply img]
 ┃╠ ${prefix}shit [reply img]
 ┃╠ ${prefix}rip [reply img]
 ┃╠ ${prefix}jail [reply img]
 ┃╠ ${prefix}beautifuleffect [reply img]
 ┃╠ ${prefix}deleteeffect [reply img]
 ┃╠ ${prefix}pixelate [reply img]
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _RANDOM IMG_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}coffee 
 ┃╠ ${prefix}woof 
 ┃╠ ${prefix}meow 
 ┃╠ ${prefix}lizard 
 ┃╠ ${prefix}wallneon 
 ┃╠ ${prefix}wallpubg 
 ┃╠ ${prefix}wallml 
 ┃╠ ${prefix}wallrandom 
 ┃╠ ${prefix}wallcode 
 ┃╠ ${prefix}animewall [query] 
 ┃╠ ${prefix}animewall2 [query] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _EMOTE_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}instagramemoji 
 ┃╠ ${prefix}facebookemoji 
 ┃╠ ${prefix}iphoneemoji 
 ┃╠ ${prefix}samsungemoji 
 ┃╠ ${prefix}joyemoji 
 ┃╠ ${prefix}skypeemoji 
 ┃╠ ${prefix}twitteremoji 
 ┃╠ ${prefix}whatsappemoji 
 ┃╠ ${prefix}microsoftemoji 
 ┃╠ ${prefix}googleemoji 
 ┃╠ ${prefix}pediaemoji 
 ┃╠ ${prefix}microsoftemoji 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _ANIME_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}naruto 
 ┃╠ ${prefix}yaoi 
 ┃╠ ${prefix}neko2 
 ┃╠ ${prefix}waifu 
 ┃╠ ${prefix}waifu2 
 ┃╠ ${prefix}awoo2 
 ┃╠ ${prefix}shinobu 
 ┃╠ ${prefix}waifu3 
 ┃╠ ${prefix}foxgirl 
 ┃╠ ${prefix}megumin2 
 ┃╠ ${prefix}loli 
 ┃╠ ${prefix}8ball 
 ┃╠ ${prefix}animenom 
 ┃╠ ${prefix}goose 
 ┃╠ ${prefix}avatar 
 ┃╠ ${prefix}tickle 
 ┃╠ ${prefix}gecg 
 ┃╠ ${prefix}feed 
 ┃╠ ${prefix}animeslap 
 ┃╠ ${prefix}animespank 
 ┃╠ ${prefix}animepat 
 ┃╠ ${prefix}animeneko 
 ┃╠ ${prefix}animekiss 
 ┃╠ ${prefix}animewlp 
 ┃╠ ${prefix}animecuddle 
 ┃╠ ${prefix}animecry 
 ┃╠ ${prefix}animekill 
 ┃╠ ${prefix}animelick 
 ┃╠ ${prefix}animebite 
 ┃╠ ${prefix}animeyeet 
 ┃╠ ${prefix}animebully 
 ┃╠ ${prefix}animebonk 
 ┃╠ ${prefix}animewink 
 ┃╠ ${prefix}animepoke 
 ┃╠ ${prefix}animesmile 
 ┃╠ ${prefix}animewave 
 ┃╠ ${prefix}animeawoo 
 ┃╠ ${prefix}animeblush 
 ┃╠ ${prefix}animesmug 
 ┃╠ ${prefix}animeglomp 
 ┃╠ ${prefix}animehappy 
 ┃╠ ${prefix}animedance 
 ┃╠ ${prefix}animecringe 
 ┃╠ ${prefix}animehighfive 
 ┃╠ ${prefix}animehandhold 
 ┃╠ ${prefix}animemegumin 
 ┃╠ ${prefix}smug2 
 ┃╠ ${prefix}couplepp 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _STICKER_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}patrick 
 ┃╠ ${prefix}emoji (fitur ini tidak tersedia)
 ┃╠ ${prefix}emojimix 
 ┃╠ ${prefix}attp [text]
 ┃╠ ${prefix}ttp [text]
 ┃╠ ${prefix}doge 
 ┃╠ ${prefix}lovesticker 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _ANIME STICKER_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}loli 
 ┃╠ ${prefix}bully 
 ┃╠ ${prefix}cuddle 
 ┃╠ ${prefix}cry 
 ┃╠ ${prefix}hug 
 ┃╠ ${prefix}awoo 
 ┃╠ ${prefix}kiss 
 ┃╠ ${prefix}lick 
 ┃╠ ${prefix}pat 
 ┃╠ ${prefix}smug 
 ┃╠ ${prefix}bonk 
 ┃╠ ${prefix}yeet 
 ┃╠ ${prefix}blush 
 ┃╠ ${prefix}smile 
 ┃╠ ${prefix}wave 
 ┃╠ ${prefix}highfive 
 ┃╠ ${prefix}handhold 
 ┃╠ ${prefix}nom 
 ┃╠ ${prefix}glomp 
 ┃╠ ${prefix}bite 
 ┃╠ ${prefix}slap 
 ┃╠ ${prefix}kill 
 ┃╠ ${prefix}happy 
 ┃╠ ${prefix}wink 
 ┃╠ ${prefix}poke 
 ┃╠ ${prefix}dance 
 ┃╠ ${prefix}cringe 
 ┃╠ ${prefix}neko 
 ┃╠ ${prefix}gura 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _NSFW_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}hentaivideo 
 ┃╠ ${prefix}yuri (error)
 ┃╠ ${prefix}masturbation (error)
 ┃╠ ${prefix}thighs (error)
 ┃╠ ${prefix}pussy (error)
 ┃╠ ${prefix}panties (error)
 ┃╠ ${prefix}orgy (error)
 ┃╠ ${prefix}ahegao (error)
 ┃╠ ${prefix}ass (error)
 ┃╠ ${prefix}bdsm (error)
 ┃╠ ${prefix}blowjob (error)
 ┃╠ ${prefix}cuckold (error)
 ┃╠ ${prefix}ero (error)
 ┃╠ ${prefix}gasm 
 ┃╠ ${prefix}cum (error)
 ┃╠ ${prefix}femdom (error)
 ┃╠ ${prefix}foot (error)
 ┃╠ ${prefix}gangbang (error)
 ┃╠ ${prefix}glasses (error)
 ┃╠ ${prefix}jahy (error)
 ┃╠ ${prefix}trap 
 ┃╠ ${prefix}blowjobgif 
 ┃╠ ${prefix}spank 
 ┃╠ ${prefix}hneko 
 ┃╠ ${prefix}nwaifu 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _FUN_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}kerangajaib [text]
 ┃╠ ${prefix}how [text] 
 ┃╠ ${prefix}when [text] 
 ┃╠ ${prefix}where [text] 
 ┃╠ ${prefix}is [text] 
 ┃╠ ${prefix}what [text] 
 ┃╠ ${prefix}can [text] 
 ┃╠ ${prefix}rate [text] 
 ┃╠ ${prefix}wangy [text] 
 ┃╠ ${prefix}beautifulcheck [tag] 
 ┃╠ ${prefix}awesomecheck [tag] 
 ┃╠ ${prefix}prettycheck [tag] 
 ┃╠ ${prefix}lesbiancheck [tag] 
 ┃╠ ${prefix}gaycheck [tag] 
 ┃╠ ${prefix}cutecheck [tag] 
 ┃╠ ${prefix}uglycheck [tag] 
 ┃╠ ${prefix}hornycheck [tag] 
 ┃╠ ${prefix}charactercheck [tag] 
 ┃╠ ${prefix}lovelycheck [tag] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _SOUND_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}sound1
 ┃╠ ||
 ┃╠ ${prefix}sound161
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _GAME_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}family100
 ┃╠ ${prefix}truth 
 ┃╠ ${prefix}dare 
 ┃╠ ${prefix}tictactoe 
 ┃╠ ${prefix}delttt 
 ┃╠ ${prefix}guess [option] 
 ┃╠ ${prefix}math [mode] 
 ┃╠ ${prefix}suitpvp [tag] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _TOOL_ 」━━⭓
 ┃╔═✪ _en = inggris_ / _in = indonesia_
 ┃╠ ~${prefix}translate en [text]~ (kedaluwarsa)
 ┃╠ ${prefix}fliptext [text] 
 ┃╠ ${prefix}toletter [number] 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _DATABASE BOT_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}setcmd
 ┃╠ ${prefix}listcmd 
 ┃╠ ${prefix}delcmd 
 ┃╠ ${prefix}lockcmd 
 ┃╠ ${prefix}addmsg 
 ┃╠ ${prefix}listmsg 
 ┃╠ ${prefix}getmsg 
 ┃╠ ${prefix}delmsg
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _INDO_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}darkjoke 
 ┃╠ ${prefix}quotes 
 ┃╠ ${prefix}animequotes 
 ┃╠ ${prefix}jalantikus-meme 
 ┃╠ ${prefix}merdeka-news  
 ┃╠ ${prefix}kontan-news  
 ┃╠ ${prefix}cnbc-news  
 ┃╠ ${prefix}tribun-news  
 ┃╠ ${prefix}indozone-news  
 ┃╠ ${prefix}kompas-news  
 ┃╠ ${prefix}detik-news  
 ┃╠ ${prefix}daily-news  
 ┃╠ ${prefix}inews-news  
 ┃╠ ${prefix}okezone-news  
 ┃╠ ${prefix}sindo-news  
 ┃╠ ${prefix}tempo-news  
 ┃╠ ${prefix}antara-news  
 ┃╠ ${prefix}cnn-news  
 ┃╠ ${prefix}fajar-news  
 ┃╠ ${prefix}cinemaschedule 
 ┃╠ ${prefix}wiki 
 ┃╠ ${prefix}covidindo 
 ┃╠ ${prefix}earthquake 
 ┃╠ ${prefix}tvschedule 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _INDO HSCOPE_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}nomorhoki 
 ┃╠ ${prefix}artimimpi  
 ┃╠ ${prefix}artinama  
 ┃╠ ${prefix}ramaljodoh  
 ┃╠ ${prefix}ramaljodohbali  
 ┃╠ ${prefix}suamiistri  
 ┃╠ ${prefix}ramalcinta  
 ┃╠ ${prefix}cocoknama  
 ┃╠ ${prefix}pasangan  
 ┃╠ ${prefix}jadiannikah  
 ┃╠ ${prefix}sifatusaha  
 ┃╠ ${prefix}rezeki  
 ┃╠ ${prefix}pekerjaan  
 ┃╠ ${prefix}nasib  
 ┃╠ ${prefix}penyakit  
 ┃╠ ${prefix}tarot  
 ┃╠ ${prefix}fengshui  
 ┃╠ ${prefix}haribaik  
 ┃╠ ${prefix}harisangar  
 ┃╠ ${prefix}harisial 
 ┃╠ ${prefix}nagahari 
 ┃╠ ${prefix}arahrezeki 
 ┃╠ ${prefix}peruntungan  
 ┃╠ ${prefix}weton  
 ┃╠ ${prefix}karakter 
 ┃╠ ${prefix}keberuntungan 
 ┃╠ ${prefix}memancing 
 ┃╠ ${prefix}masasubur 
 ┃╠ ${prefix}zodiak 
 ┃╠ ${prefix}shio 
 ┃╚═════════════✪
 ┗━━━━━━━━━━━━━━━━━━━⭓
 ┏━「 _OTHER_ 」━━⭓
 ┃╔═══════✪
 ┃╠ ${prefix}afk 
 ┃╠ ${prefix}readmore [text] 
 ┃╠ ${prefix}toviewonce 
 ┃╠ ${prefix}getpp
 ┃╠ ${prefix}chatinfo 
 ┃╠ ${prefix}alive 
 ┃╠ ${prefix}script 
 ┃╠ ${prefix}speedtest 
 ┃╠ ${prefix}ping 
 ┃╠ ${prefix}owner 
 ┃╠ ${prefix}menu 
 ┃╠ ${prefix}delete 
 ┃╠ ${prefix}chatinfo 
 ┃╠ ${prefix}quoted 
 ┃╠ ${prefix}listpc 
 ┃╠ ${prefix}listgc 
 ┃╠ ${prefix}donate 
 ┃╠ ${prefix}request 
 ┃╠ ${prefix}report [bug] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓`
 
//////////////////contoh  [{"urlButton": {"displayText": "YouTube 📍","url": `${websitex}`}}
 let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `sewabot`, buttonText: {displayText: 'Sewa Bot'}, type: 1},
 {buttonId: `rulesbot`, buttonText: {displayText: 'Rules'}, type: 1},
  {buttonId: `wallmenu`, buttonText: {displayText: 'Ganti Thumbnail Menu'}, type: 1},
 ] 
let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/allmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: teks, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
	largeThumb: true,
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
////// mediaType: 4, 
 thumbnail: pics, 
 url: `https://chat.whatsapp.com/HWS1kd27qV93bin6jlQAny`
///////sourceUrl: `${websitex}`, 
 //////// mediaUrl: `${websitex}` 
}} 
}  
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
break 
 case 'ownermenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Owner Menu') 
 anjay = ` ┏━「 _OWNER_ 」━━⭓ 
 ┃╔═══════✪         
 ┃╠ ${prefix}self 
 ┃╠ ${prefix}public 
 ┃╠ ${prefix}antitag 
 ┃╠ ${prefix}ban [add/del] 
 ┃╠ ${prefix}banchat [on/off] 
 ┃╠ ${prefix}leavegc 
 ┃╠ ${prefix}setbio 
 ┃╠ ${prefix}block [user] 
 ┃╠ ${prefix}unblock [user] 
 ┃╠ ${prefix}bcgroup [text] 
 ┃╠ ${prefix}bcall [text] 
 ┃╠ ${prefix}bcimage [image] 
 ┃╠ ${prefix}bcvideo [video] 
 ┃╠ ${prefix}bcaudio [audio] 
 ┃╠ ${prefix}bcloc [text] 
 ┃╠ ${prefix}setppbot [image] 
 ┃╠ ${prefix}setexif 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓`
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}, type: 1} 
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/ownermenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'groupmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Group Menu') 
 anjay = ` ┏━「 _GROUP_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}welcome [on/off]
 ┃╠ ${prefix}grousetting 
 ┃╠ ${prefix}grouplink 
 ┃╠ ${prefix}ephemeral [option] 
 ┃╠ ${prefix}setgcpp [image] 
 ┃╠ ${prefix}setname [text] 
 ┃╠ ${prefix}setdesc [text] 
 ┃╠ ${prefix}groupmode [open/close]
 ┃╠ ${prefix}resetgrouplink 
 ┃╠ ${prefix}editinfo [option] 
 ┃╠ ~${prefix}add [user]~ 
 ┃╠ ${prefix}kick [reply/tag] 
 ┃╠ ${prefix}hidetag [text] 
 ┃╠ ${prefix}tagall [text] 
 ┃╠ ${prefix}antilinkgc [on/off] 
 ┃╠ ${prefix}antilinktg [on/off] 
 ┃╠ ${prefix}antilinktt [on/off] 
 ┃╠ ${prefix}antilinkytch [on/off] 
 ┃╠ ${prefix}antilinkytvid [on/off] 
 ┃╠ ${prefix}antilinkig [on/off] 
 ┃╠ ${prefix}antilinkfb [on/off] 
 ┃╠ ${prefix}antilinktwit [on/off] 
 ┃╠ ${prefix}antilinkall [on/off] 
 ┃╠ ${prefix}antivirus [on/off] 
 ┃╠ ${prefix}antivirdoc [on/off]
 ┃╠ ${prefix}antislayer [on/off]
 ┃╠ ${prefix}antivirlog [on/off]
 ┃╠ ${prefix}antitoxic [on/off] 
 ┃╠ ${prefix}antiwame [on/off] 
 ┃╠ ${prefix}autoreply [on/off] 
 ┃╠ ${prefix}nsfw [on/off] 
 ┃╠ ${prefix}promote [reply/tag] 
 ┃╠ ${prefix}demote [reply/tag] 
 ┃╠ ${prefix}react [reply emoji] 
 ┃╠ ${prefix}vote 
 ┃╠ ${prefix}devote 
 ┃╠ ${prefix}upvote 
 ┃╠ ${prefix}checkvote 
 ┃╠ ${prefix}delvote 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}} //////////////////////// {buttonId: `command`, buttonText: {displayText: 'List Menu 🗂'}} 
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/groupmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'rpgmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Rpg Menu') 
 anjay = ` ┏━「 _RPG_ 」━━⭓ 
 ┃╔═══════✪         
 ┃╠ ${prefix}hunt 
 ┃╠ ${prefix}mine 
 ┃╠ ${prefix}fish 
 ┃╠ ${prefix}heal 
 ┃╠ ${prefix}blood 
 ┃╠ ${prefix}stab 
 ┃╠ ${prefix}buy 
 ┃╠ ${prefix}sell 
 ┃╠ ${prefix}profile 
 ┃╠ ${prefix}inventory 
 ┃╠ ${prefix}leaderboard 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/gamemenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'makermenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Maker Menu') 
 anjay = ` ┏━「 _TEXT MAKER_ 🖌 」━━⭓
 ┃╔═══════✪ 
 ┃╠ ${prefix}candy [text]
 ┃╠ ${prefix}blackpinkneon [text]
 ┃╠ ${prefix}deepsea [text]
 ┃╠ ${prefix}scifi [text]
 ┃╠ ${prefix}fiction [text]
 ┃╠ ${prefix}berry [text]
 ┃╠ ${prefix}fruitjuice [text]
 ┃╠ ${prefix}biscuit [text]
 ┃╠ ${prefix}wood [text]
 ┃╠ ${prefix}chocolate [text]
 ┃╠ ${prefix}matrix [text]
 ┃╠ ${prefix}blood [text]
 ┃╠ ${prefix}halloween [text]
 ┃╠ ${prefix}wicker [text]
 ┃╠ ${prefix}darkgold [text]
 ┃╠ ${prefix}firework [text]
 ┃╠ ${prefix}skeleton [text]
 ┃╠ ${prefix}sand [text]
 ┃╠ ${prefix}glue [text]
 ┃╠ ${prefix}leaves [text]
 ┃╠ ${prefix}magma [text]
 ┃╠ ${prefix}lava [text]
 ┃╠ ${prefix}rock [text]
 ┃╠ ${prefix}bloodglas [text]
 ┃╠ ${prefix}underwater [text]
 ┃╠ ${prefix}textmaker [text]
 ┃╠ ${prefix}honey [text]
 ┃╠ ${prefix}ice [text]
 ┃╠ ${prefix}watercolor [text]
 ┃╠ ${prefix}multicolor [text]
 ┃╠ ${prefix}snow [text]
 ┃╠ ${prefix}harrypot [text]
 ┃╠ ${prefix}harrypotter [text]
 ┃╠ ${prefix}brokenglass [text]
 ┃╠ ${prefix}waterpipe [text]
 ┃╠ ${prefix}spooky [text]
 ┃╠ ${prefix}circuit [text]
 ┃╠ ${prefix}metallic [text]
 ┃╠ ${prefix}demon [text]
 ┃╠ ${prefix}sparklechristmas [text]
 ┃╠ ${prefix}christmas [text]
 ┃╠ ${prefix}3dchristmas [text]
 ┃╠ ${prefix}3dbox [text]
 ┃╠ ${prefix}waterdrop [text]
 ┃╠ ${prefix}lion2 [text]
 ┃╠ ${prefix}papercut [text]
 ┃╠ ${prefix}transformer [text]
 ┃╠ ${prefix}neondevil [text]
 ┃╠ ${prefix}3davengers [text]
 ┃╠ ${prefix}3dstone [text]
 ┃╠ ${prefix}3dstone2 [text]
 ┃╠ ${prefix}summertime [text]
 ┃╠ ${prefix}thunder [text]
 ┃╠ ${prefix}window [text]
 ┃╠ ${prefix}graffiti [text]
 ┃╠ ${prefix}graffitibike [text]
 ┃╠ ${prefix}pornhub [text|text]
 ┃╠ ${prefix}glitch [text]
 ┃╠ ${prefix}blackpink [text]
 ┃╠ ${prefix}glitch2 [text]
 ┃╠ ${prefix}glitch3 [text]
 ┃╠ ${prefix}3dspace [text]
 ┃╠ ${prefix}lion [text]
 ┃╠ ${prefix}3dneon [text]
 ┃╠ ${prefix}greenneon [text]
 ┃╠ ${prefix}bokeh [text]
 ┃╠ ${prefix}holographic [text]
 ┃╠ ${prefix}bear [text]
 ┃╠ ${prefix}wolf [text]
 ┃╠ ${prefix}joker [text]
 ┃╠ ${prefix}dropwater [text]
 ┃╠ ${prefix}dropwater2 [text]
 ┃╠ ${prefix}thewall [text]
 ┃╠ ${prefix}neonlight [text]
 ┃╠ ${prefix}natural [text]
 ┃╠ ${prefix}carbon [text]
 ┃╠ ${prefix}pencil [text]
 ┃╠ ${prefix}blackpink2 [text]
 ┃╠ ${prefix}neon [text]
 ┃╠ ${prefix}neonlight2 [text]
 ┃╠ ${prefix}toxic [text]
 ┃╠ ${prefix}strawberry [text]
 ┃╠ ${prefix}discovery [text]
 ┃╠ ${prefix}1917 [text]
 ┃╠ ${prefix}sci_fi [text]
 ┃╠ ${prefix}ancient [text]
 ┃╠ ${prefix}fabric [text]
 ┃╠ ${prefix}hoorror [text]
 ┃╠ ${prefix}whitebear [text]
 ┃╠ ${prefix}juice [text]
 ┃╠ ${prefix}batman [text]
 ┃╠ ${prefix}multicolor [text]
 ┃╠ ${prefix}collwall [text]
 ┃╠ ${prefix}wonderful [text]
 ┃╠ ${prefix}cool [text]
 ┃╠ ${prefix}sketch [text]
 ┃╠ ${prefix}marvel [text]
 ┃╠ ${prefix}foggy [text]
 ┃╠ ${prefix}writing [text]
 ┃╠ ${prefix}halloweenfire [text]
 ┃╠ ${prefix}halloween [text]
 ┃╠ ${prefix}watercolor [text]
 ┃╠ ${prefix}classic [text]
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/makermenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'downloadmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Download Menu') 
 anjay = ` ┏━「 _DOWNLOAD_ 」━━⭓ 
 ┃╔═══════✪         
 ┃╠ ${prefix}instagram [url] 
 ┃╠ ${prefix}igtv [url] 
 ┃╠ ${prefix}igstory [username] 
 ┃╠ ${prefix}facebook [url] 
 ┃╠ ${prefix}fbmp3 [url] 
 ┃╠ ${prefix}twitter [url] 
 ┃╠ ${prefix}twittermp3 [url] 
 ┃╠ ${prefix}tiktok [url] 
 ┃╠ ${prefix}tiktokaudio [url] 
 ┃╠ ${prefix}tiktokmp3 [url]
 ┃╠ ${prefix}tiktokvn [url]
 ┃╠ ${prefix}mediafire [url] 
 ┃╠ ${prefix}ytmp3 [url|quality] 
 ┃╠ ${prefix}ytmp4 [url|quality] 
 ┃╠ ${prefix}getmusic [yt link] 
 ┃╠ ${prefix}getvideo [yt link] 
 ┃╠ ${prefix}gitclone [repo link] 
 ┃╠ ${prefix}soundcloud [url] 
 ┃╠ ${prefix}zippyshare [url] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/downloadmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'searchmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Search Menu') 
 anjay = ` ┏━「 _SEARCH_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}play [query] 
 ┃╠ ${prefix}song [query] 
 ┃╠ ${prefix}yts [query] 
 ┃╠ ${prefix}lyrics [query] 
 ┃╠ ${prefix}google [query] 
 ┃╠ ${prefix}playstore [query] 
 ┃╠ ${prefix}gimage [query] 
 ┃╠ ${prefix}pinterest [query] 
 ┃╠ ${prefix}image [query] 
 ┃╠ ${prefix}film [query] 
 ┃╠ ${prefix}wallpaper [query] 
 ┃╠ ${prefix}searchgc [query] 
 ┃╠ ${prefix}happymod [query] 
 ┃╠ ${prefix}servermc 
 ┃╠ ${prefix}mcpedl [query] 
 ┃╠ ${prefix}tvsearch [query] 
 ┃╠ ${prefix}wikimedia [query] 
 ┃╠ ${prefix}ytsearch [query] 
 ┃╠ ${prefix}ringtone [query] 
 ┃╠ ${prefix}webtoon [query] 
 ┃╠ ${prefix}anime [query] 
 ┃╠ ${prefix}animestory [query] 
 ┃╠ ${prefix}manga [query] 
 ┃╠ ${prefix}wattpad [query] 
 ┃╠ ${prefix}mcserver [ip|port] 
 ┃╠ ${prefix}drakor [query] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/searchmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'convertmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Convert Menu') 
 anjay = ` ┏━「 _CONVERT_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}toimage [reply stick] 
 ┃╠ ${prefix}sticker [reply img|gif] 
 ┃╠ ${prefix}take [reply img|gif|stik] 
 ┃╠ ${prefix}smeme [reply img] 
 ┃╠ ${prefix}smeme2 [reply text | text] New 🔥
 ┃╠ ${prefix}emoji [emoji] 
 ┃╠ ${prefix}tovideo [reply img] 
 ┃╠ ${prefix}togif [reply stick] 
 ┃╠ ${prefix}tourl [reply img] 
 ┃╠ ${prefix}tovn [reply aud] 
 ┃╠ ${prefix}tomp3 [reply vn] 
 ┃╠ ${prefix}toaudio [reply vid] 
 ┃╠ ${prefix}ebinary [reply txt] 
 ┃╠ ${prefix}dbinary [reply txt] 
 ┃╠ ${prefix}tinyurl [link] 
 ┃╠ ${prefix}styletext [text] 
 ┃╠ ${prefix}volume [reply aud] 
 ┃╠ ${prefix}tempo [reply aud] 
 ┃╠ ${prefix}bass [reply aud] 
 ┃╠ ${prefix}blown [reply aud] 
 ┃╠ ${prefix}deep [reply aud] 
 ┃╠ ${prefix}earrape [reply aud] 
 ┃╠ ${prefix}fast [reply aud] 
 ┃╠ ${prefix}fat [reply aud] 
 ┃╠ ${prefix}nightcore [reply aud] 
 ┃╠ ${prefix}reverse [reply aud] 
 ┃╠ ${prefix}robot [reply aud] 
 ┃╠ ${prefix}slow [reply aud] 
 ┃╠ ${prefix}squirrel [reply aud] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
{buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/convertmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'randomimagemenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Random Image Menu') 
 anjay = ` ┏━「 _RANDOM IMG_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}coffee 
 ┃╠ ${prefix}woof 
 ┃╠ ${prefix}meow 
 ┃╠ ${prefix}lizard 
 ┃╠ ${prefix}wallneon 
 ┃╠ ${prefix}wallpubg 
 ┃╠ ${prefix}wallml 
 ┃╠ ${prefix}wallrandom 
 ┃╠ ${prefix}wallcode 
 ┃╠ ${prefix}animewall [query] 
 ┃╠ ${prefix}animewall2 [query] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/randomimage.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
  
 case 'emotemenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Emote Menu') 
 anjay = ` ┏━「 _EMOTE_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}instagramemoji 
 ┃╠ ${prefix}facebookemoji 
 ┃╠ ${prefix}iphoneemoji 
 ┃╠ ${prefix}samsungemoji 
 ┃╠ ${prefix}joyemoji 
 ┃╠ ${prefix}skypeemoji 
 ┃╠ ${prefix}twitteremoji 
 ┃╠ ${prefix}whatsappemoji 
 ┃╠ ${prefix}microsoftemoji 
 ┃╠ ${prefix}googleemoji 
 ┃╠ ${prefix}pediaemoji 
 ┃╠ ${prefix}microsoftemoji 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/emotemenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'imageeffectmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Image Effect Menu') 
 anjay = ` ┏━「 _IMG EFFECT_ 」━━⭓ 
 ┃╔═════✪ 
 ┃╠ ${prefix}wanted 
 ┃╠ ${prefix}blur 
 ┃╠ ${prefix}framed 
 ┃╠ ${prefix}gayeffect 
 ┃╠ ${prefix}imagesketch 
 ┃╠ ${prefix}invert 
 ┃╠ ${prefix}burn 
 ┃╠ ${prefix}triggeredwebp 
 ┃╠ ${prefix}shit 
 ┃╠ ${prefix}rip 
 ┃╠ ${prefix}jail 
 ┃╠ ${prefix}beautifuleffect 
 ┃╠ ${prefix}deleteeffect 
 ┃╠ ${prefix}pixelate 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓`
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/imageeffect.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'animemenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Anime Menu') 
 anjay = ` ┏━「 _ANIME_ 」━━⭓ 
 ┃╔═══════✪  
 ┃╠ ${prefix}naruto 
 ┃╠ ${prefix}yaoi 
 ┃╠ ${prefix}neko2 
 ┃╠ ${prefix}waifu 
 ┃╠ ${prefix}waifu2 
 ┃╠ ${prefix}awoo2 
 ┃╠ ${prefix}shinobu 
 ┃╠ ${prefix}waifu3 
 ┃╠ ${prefix}foxgirl 
 ┃╠ ${prefix}megumin2 
 ┃╠ ${prefix}loli 
 ┃╠ ${prefix}8ball 
 ┃╠ ${prefix}animenom 
 ┃╠ ${prefix}goose 
 ┃╠ ${prefix}avatar 
 ┃╠ ${prefix}tickle 
 ┃╠ ${prefix}gecg 
 ┃╠ ${prefix}feed 
 ┃╠ ${prefix}animeslap 
 ┃╠ ${prefix}animespank 
 ┃╠ ${prefix}animepat 
 ┃╠ ${prefix}animeneko 
 ┃╠ ${prefix}animekiss 
 ┃╠ ${prefix}animewlp 
 ┃╠ ${prefix}animecuddle 
 ┃╠ ${prefix}animecry 
 ┃╠ ${prefix}animekill 
 ┃╠ ${prefix}animelick 
 ┃╠ ${prefix}animebite 
 ┃╠ ${prefix}animeyeet 
 ┃╠ ${prefix}animebully 
 ┃╠ ${prefix}animebonk 
 ┃╠ ${prefix}animewink 
 ┃╠ ${prefix}animepoke 
 ┃╠ ${prefix}animesmile 
 ┃╠ ${prefix}animewave 
 ┃╠ ${prefix}animeawoo 
 ┃╠ ${prefix}animeblush 
 ┃╠ ${prefix}animesmug 
 ┃╠ ${prefix}animeglomp 
 ┃╠ ${prefix}animehappy 
 ┃╠ ${prefix}animedance 
 ┃╠ ${prefix}animecringe 
 ┃╠ ${prefix}animehighfive 
 ┃╠ ${prefix}animehandhold 
 ┃╠ ${prefix}animemegumin 
 ┃╠ ${prefix}smug2 
 ┃╠ ${prefix}couplepp 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/animemenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'stickermenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Sticker Menu') 
 anjay = ` ┏━「 _STICKER_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}patrick 
 ┃╠ ${prefix}emoji 
 ┃╠ ${prefix}emojimix 
 ┃╠ ${prefix}attp 
 ┃╠ ${prefix}ttp 
 ┃╠ ${prefix}doge 
 ┃╠ ${prefix}lovesticker 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/stickermenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'animestickermenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Anime Sticker Menu') 
 anjay = ` ┏━「 _ANIME STICKER_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}loli 
 ┃╠ ${prefix}bully 
 ┃╠ ${prefix}cuddle 
 ┃╠ ${prefix}cry 
 ┃╠ ${prefix}hug 
 ┃╠ ${prefix}awoo 
 ┃╠ ${prefix}kiss 
 ┃╠ ${prefix}lick 
 ┃╠ ${prefix}pat 
 ┃╠ ${prefix}smug 
 ┃╠ ${prefix}bonk 
 ┃╠ ${prefix}yeet 
 ┃╠ ${prefix}blush 
 ┃╠ ${prefix}smile 
 ┃╠ ${prefix}wave 
 ┃╠ ${prefix}highfive 
 ┃╠ ${prefix}handhold 
 ┃╠ ${prefix}nom 
 ┃╠ ${prefix}glomp 
 ┃╠ ${prefix}bite 
 ┃╠ ${prefix}slap 
 ┃╠ ${prefix}kill 
 ┃╠ ${prefix}happy 
 ┃╠ ${prefix}wink 
 ┃╠ ${prefix}poke 
 ┃╠ ${prefix}dance 
 ┃╠ ${prefix}cringe 
 ┃╠ ${prefix}neko 
 ┃╠ ${prefix}gura 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/animesticker.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'nsfwmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Nsfw Menu') 
 anjay = ` ┏━「 _NSFW_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}hentaivideo 
 ┃╠ ${prefix}yuri (error)
 ┃╠ ${prefix}masturbation (error)
 ┃╠ ${prefix}thighs (error)
 ┃╠ ${prefix}pussy (error)
 ┃╠ ${prefix}panties (error)
 ┃╠ ${prefix}orgy (error)
 ┃╠ ${prefix}ahegao (error)
 ┃╠ ${prefix}ass (error)
 ┃╠ ${prefix}bdsm (error)
 ┃╠ ${prefix}blowjob (error)
 ┃╠ ${prefix}cuckold (error)
 ┃╠ ${prefix}ero (error)
 ┃╠ ${prefix}gasm 
 ┃╠ ${prefix}cum (error)
 ┃╠ ${prefix}femdom (error)
 ┃╠ ${prefix}foot (error)
 ┃╠ ${prefix}gangbang (error)
 ┃╠ ${prefix}glasses (error)
 ┃╠ ${prefix}jahy (error)
 ┃╠ ${prefix}trap 
 ┃╠ ${prefix}blowjobgif 
 ┃╠ ${prefix}spank 
 ┃╠ ${prefix}hneko 
 ┃╠ ${prefix}nwaifu 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/nsfwmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'funmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Fun Menu') 
 anjay = ` ┏━「 _FUN_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}kerangajaib [text]
 ┃╠ ${prefix}how [text]
 ┃╠ ${prefix}when [text] 
 ┃╠ ${prefix}where [text] 
 ┃╠ ${prefix}is [text] 
 ┃╠ ${prefix}what [text] 
 ┃╠ ${prefix}can [text] 
 ┃╠ ${prefix}rate [text] 
 ┃╠ ${prefix}wangy [text] 
 ┃╠ ${prefix}beautifulcheck [tag] 
 ┃╠ ${prefix}awesomecheck [tag] 
 ┃╠ ${prefix}prettycheck [tag] 
 ┃╠ ${prefix}lesbiancheck [tag] 
 ┃╠ ${prefix}gaycheck [tag] 
 ┃╠ ${prefix}cutecheck [tag] 
 ┃╠ ${prefix}uglycheck [tag] 
 ┃╠ ${prefix}hornycheck [tag] 
 ┃╠ ${prefix}charactercheck [tag] 
 ┃╠ ${prefix}lovelycheck [tag] 
 ┃╠ ${prefix}couple 
 ┃╠ ${prefix}mysoulmate 
 ┃╠ ${prefix}hot 
 ┃╠ ${prefix}sexy 
 ┃╠ ${prefix}kind 
 ┃╠ ${prefix}idiot 
 ┃╠ ${prefix}handsome 
 ┃╠ ${prefix}beautiful 
 ┃╠ ${prefix}cute 
 ┃╠ ${prefix}pretty 
 ┃╠ ${prefix}lesbian 
 ┃╠ ${prefix}noob 
 ┃╠ ${prefix}bastard 
 ┃╠ ${prefix}foolish 
 ┃╠ ${prefix}nerd 
 ┃╠ ${prefix}asshole 
 ┃╠ ${prefix}gay 
 ┃╠ ${prefix}smart 
 ┃╠ ${prefix}stubble 
 ┃╠ ${prefix}dog 
 ┃╠ ${prefix}horny 
 ┃╠ ${prefix}cunt 
 ┃╠ ${prefix}wibu 
 ┃╠ ${prefix}noobra 
 ┃╠ ${prefix}nibba 
 ┃╠ ${prefix}nibbi 
 ┃╠ ${prefix}comrade 
 ┃╠ ${prefix}mumu 
 ┃╠ ${prefix}rascal 
 ┃╠ ${prefix}scumbag 
 ┃╠ ${prefix}nuts 
 ┃╠ ${prefix}fagot 
 ┃╠ ${prefix}scoundrel 
 ┃╠ ${prefix}ditch 
 ┃╠ ${prefix}dope 
 ┃╠ ${prefix}gucci 
 ┃╠ ${prefix}lit 
 ┃╠ ${prefix}dumbass 
 ┃╠ ${prefix}crackhead 
 ┃╠ ${prefix}mf 
 ┃╠ ${prefix}motherfucker 
 ┃╠ ${prefix}sucker 
 ┃╠ ${prefix}fuckboy 
 ┃╠ ${prefix}playboy 
 ┃╠ ${prefix}fuckgirl 
 ┃╠ ${prefix}playgirl 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/funmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'soundmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Sound Menu') 
 anjay = ` ┏━「 _SOUND_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}sound1 
 ┃╠ ${prefix}sound2 
 ┃╠ ${prefix}sound3 
 ┃╠ ${prefix}sound4 
 ┃╠ ${prefix}sound5 
 ┃╠ ${prefix}sound6 
 ┃╠ ${prefix}sound7 
 ┃╠ ${prefix}sound8 
 ┃╠ ${prefix}sound9 
 ┃╠ ${prefix}sound10 
 ┃╠ ${prefix}sound11 
 ┃╠ ${prefix}sound12 
 ┃╠ ${prefix}sound13 
 ┃╠ ${prefix}sound14 
 ┃╠ ${prefix}sound15 
 ┃╠ ${prefix}sound16 
 ┃╠ ${prefix}sound17 
 ┃╠ ${prefix}sound18 
 ┃╠ ${prefix}sound19 
 ┃╠ ${prefix}sound20 
 ┃╠ ${prefix}sound21 
 ┃╠ ${prefix}sound22 
 ┃╠ ${prefix}sound23 
 ┃╠ ${prefix}sound24 
 ┃╠ ${prefix}sound25 
 ┃╠ ${prefix}sound26 
 ┃╠ ${prefix}sound27 
 ┃╠ ${prefix}sound28 
 ┃╠ ${prefix}sound29 
 ┃╠ ${prefix}sound30 
 ┃╠ ${prefix}sound31 
 ┃╠ ${prefix}sound32 
 ┃╠ ${prefix}sound33 
 ┃╠ ${prefix}sound34 
 ┃╠ ${prefix}sound35 
 ┃╠ ${prefix}sound36 
 ┃╠ ${prefix}sound37 
 ┃╠ ${prefix}sound38 
 ┃╠ ${prefix}sound39 
 ┃╠ ${prefix}sound40 
 ┃╠ ${prefix}sound41 
 ┃╠ ${prefix}sound42 
 ┃╠ ${prefix}sound43 
 ┃╠ ${prefix}sound44 
 ┃╠ ${prefix}sound45 
 ┃╠ ${prefix}sound46 
 ┃╠ ${prefix}sound47 
 ┃╠ ${prefix}sound48 
 ┃╠ ${prefix}sound49 
 ┃╠ ${prefix}sound50 
 ┃╠ ${prefix}sound51 
 ┃╠ ${prefix}sound52 
 ┃╠ ${prefix}sound53 
 ┃╠ ${prefix}sound54 
 ┃╠ ${prefix}sound55 
 ┃╠ ${prefix}sound56 
 ┃╠ ${prefix}sound57 
 ┃╠ ${prefix}sound58 
 ┃╠ ${prefix}sound59 
 ┃╠ ${prefix}sound60 
 ┃╠ ${prefix}sound61 
 ┃╠ ${prefix}sound62 
 ┃╠ ${prefix}sound63 
 ┃╠ ${prefix}sound64 
 ┃╠ ${prefix}sound65 
 ┃╠ ${prefix}sound66 
 ┃╠ ${prefix}sound67 
 ┃╠ ${prefix}sound68 
 ┃╠ ${prefix}sound69 
 ┃╠ ${prefix}sound70 
 ┃╠ ${prefix}sound71 
 ┃╠ ${prefix}sound72 
 ┃╠ ${prefix}sound73 
 ┃╠ ${prefix}sound74 
 ┃╠ ${prefix}sound75 
 ┃╠ ${prefix}sound76 
 ┃╠ ${prefix}sound77 
 ┃╠ ${prefix}sound78 
 ┃╠ ${prefix}sound79 
 ┃╠ ${prefix}sound80 
 ┃╠ ${prefix}sound81 
 ┃╠ ${prefix}sound82 
 ┃╠ ${prefix}sound83 
 ┃╠ ${prefix}sound84 
 ┃╠ ${prefix}sound85 
 ┃╠ ${prefix}sound86 
 ┃╠ ${prefix}sound87 
 ┃╠ ${prefix}sound88 
 ┃╠ ${prefix}sound89 
 ┃╠ ${prefix}sound90 
 ┃╠ ${prefix}sound91 
 ┃╠ ${prefix}sound92 
 ┃╠ ${prefix}sound93 
 ┃╠ ${prefix}sound94 
 ┃╠ ${prefix}sound95 
 ┃╠ ${prefix}sound96 
 ┃╠ ${prefix}sound97 
 ┃╠ ${prefix}sound98 
 ┃╠ ${prefix}sound99 
 ┃╠ ${prefix}sound100 
 ┃╠ ${prefix}sound101 
 ┃╠ ${prefix}sound102 
 ┃╠ ${prefix}sound103 
 ┃╠ ${prefix}sound104 
 ┃╠ ${prefix}sound105 
 ┃╠ ${prefix}sound106 
 ┃╠ ${prefix}sound107 
 ┃╠ ${prefix}sound108 
 ┃╠ ${prefix}sound109 
 ┃╠ ${prefix}sound110 
 ┃╠ ${prefix}sound111 
 ┃╠ ${prefix}sound112 
 ┃╠ ${prefix}sound113 
 ┃╠ ${prefix}sound114 
 ┃╠ ${prefix}sound115 
 ┃╠ ${prefix}sound116 
 ┃╠ ${prefix}sound117 
 ┃╠ ${prefix}sound118 
 ┃╠ ${prefix}sound119 
 ┃╠ ${prefix}sound120 
 ┃╠ ${prefix}sound121 
 ┃╠ ${prefix}sound122 
 ┃╠ ${prefix}sound123 
 ┃╠ ${prefix}sound124 
 ┃╠ ${prefix}sound125 
 ┃╠ ${prefix}sound126 
 ┃╠ ${prefix}sound127 
 ┃╠ ${prefix}sound128 
 ┃╠ ${prefix}sound129 
 ┃╠ ${prefix}sound130 
 ┃╠ ${prefix}sound131 
 ┃╠ ${prefix}sound132 
 ┃╠ ${prefix}sound133 
 ┃╠ ${prefix}sound134 
 ┃╠ ${prefix}sound135 
 ┃╠ ${prefix}sound136 
 ┃╠ ${prefix}sound137 
 ┃╠ ${prefix}sound138 
 ┃╠ ${prefix}sound139 
 ┃╠ ${prefix}sound140 
 ┃╠ ${prefix}sound141 
 ┃╠ ${prefix}sound142 
 ┃╠ ${prefix}sound143 
 ┃╠ ${prefix}sound144 
 ┃╠ ${prefix}sound145 
 ┃╠ ${prefix}sound146 
 ┃╠ ${prefix}sound147 
 ┃╠ ${prefix}sound148 
 ┃╠ ${prefix}sound149 
 ┃╠ ${prefix}sound150 
 ┃╠ ${prefix}sound151 
 ┃╠ ${prefix}sound152 
 ┃╠ ${prefix}sound153 
 ┃╠ ${prefix}sound154 
 ┃╠ ${prefix}sound155 
 ┃╠ ${prefix}sound156 
 ┃╠ ${prefix}sound157 
 ┃╠ ${prefix}sound158 
 ┃╠ ${prefix}sound159 
 ┃╠ ${prefix}sound160 
 ┃╠ ${prefix}sound161 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/soundmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'adzanmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(`https://telegra.ph/file/4e72707e3de85cca2e925.jpg`) 
 anjay = `┏━「 _ADZAN REMIX_ 🎧」━━⭓ 
┃╔══✪
┃╠> ezan remix 
┃╠> ezan remix 1
┃╠> ezan remix 2
┃╠> ezan remix 3
┃╠> ezan remix 4
┃╠> ezan remix 5
┃╠> ezan remix 6
┃╠> ezan remix 7
┃╠> ezan remix 8
┃╠> ezan remix 9
┃╠> ezan remix 10
┃╠> ezan remix 11
┃╠> ezan remix 12
┃╠> ezan remix 13
┃╠> ezan remix 14
┃╠> ezan remix 15
┃╚═════════════✪
┗━━「 *Created by Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pic = [tu,tri,fo,faif,seven,egh,nen,ten,elepen,welep,faiften]
 let pics = pic[Math.floor(Math.random() * (pic.length))]
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'gamemenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Game Menu') 
 anjay = ` ┏━「 _GAME_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}family100
 ┃╠ ${prefix}truth
 ┃╠ ${prefix}dare 
 ┃╠ ${prefix}tictactoe 
 ┃╠ ${prefix}delttt 
 ┃╠ ${prefix}guess [option] 
 ┃╠ ${prefix}math [mode] 
 ┃╠ ${prefix}suitpvp [tag] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/gamemenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'anonymousmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Anonymous Menu') 
 anjay = ` ┏━「 _ANONYMOUS_ 」━━⭓ 
 ┃╔═══✪
 ┃╠ ${prefix}anonymous 
 ┃╠ ${prefix}start 
 ┃╠ ${prefix}next 
 ┃╠ ${prefix}leave 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pic = [tu,tri,fo,faif,seven,egh,nen,ten,elepen,welep,faiften]
 let pics = pic[Math.floor(Math.random() * (pic.length))]
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'toolmenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Tool Menu') 
anjay = ` ┏━「 _TOOL_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ~${prefix}translate [text]~ (kedaluwarsa)
 ┃╠ ${prefix}fliptext [text] 
 ┃╠ ${prefix}toletter [number] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
 let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/toolmenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
break 
 case 'databasemenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Database Menu') 
 anjay = ` ┏━「 _DATABASE_ 」━━⭓ 
 ┃╔═══✪ 
 ┃╠ ${prefix}setcmd 
 ┃╠ ${prefix}listcmd 
 ┃╠ ${prefix}delcmd 
 ┃╠ ${prefix}lockcmd 
 ┃╠ ${prefix}addmsg 
 ┃╠ ${prefix}listmsg 
 ┃╠ ${prefix}getmsg 
 ┃╠ ${prefix}delmsg 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓` 
let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `tutorx`, buttonText: {displayText: 'Apa itu Database Menu?'}},{buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/databasemenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
break 
case 'tutorx': {
	  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 caption = `*「 DATABASE MENU 💡 」*\n\n• *setcmd*\nUntuk mengatur media (audio/stiker/video/foto) sebagai command/perintah [tidak permanen]\nContoh: (balas stiker/audio/video/foto dulu) lalu ketik .setcmd hentaivideo\n• *listcmd*\nUntuk melihat daftar command/perintah\n• *delcmd*\nUntuk menghapus command yg ada di media\nContoh: (kirim dan balas stiker/audio/foto/video yg ada commandnya, lalu ketik .delcmd\n• *lockcmd*\nUntuk mengunci/menandai command\nContoh: balas pesan media yg ada commandnya, lalu ketik .lockcmd\n• *addmsg*\nUntuk menyimpan pesan ke database bot [tidak permanen]\nContoh: (balas pesan teks dulu) \nlalu ketik .addmsg <nama file>\n• *listmsg*\nMelihat daftar pesan yang disimpan\n• *getmsg*\nUntuk mengakses/membuka file yang disimpan di database bot\nContoh: misal nama filenya 'jasjus', tinggal ketik .getmsg jasjus\n• *delmsg*\nUntuk menghapus file yang disimpan di database bot\nContoh: .delmsg <nama file>`
  let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 XeonBotInc.sendButtonText(m.chat, buttons, caption, `${pushname}`)
	}
break
 case 'indomenu': {
                  if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group)
 var unicorn = await getBuffer(picak+'Indo Menu') 
 anjay = ` ┏━「 _INDO_ 」━━⭓ 
 ┃╔═══════✪
 ┃╠ ${prefix}darkjoke 
 ┃╠ ${prefix}quotes 
 ┃╠ ${prefix}animequotes 
 ┃╠ ${prefix}jalantikus-meme 
 ┃╠ ${prefix}merdeka-news  
 ┃╠ ${prefix}kontan-news  
 ┃╠ ${prefix}cnbc-news  
 ┃╠ ${prefix}tribun-news  
 ┃╠ ${prefix}indozone-news  
 ┃╠ ${prefix}kompas-news  
 ┃╠ ${prefix}detik-news  
 ┃╠ ${prefix}daily-news  
 ┃╠ ${prefix}inews-news  
 ┃╠ ${prefix}okezone-news  
 ┃╠ ${prefix}sindo-news  
 ┃╠ ${prefix}tempo-news  
 ┃╠ ${prefix}antara-news  
 ┃╠ ${prefix}cnn-news  
 ┃╠ ${prefix}fajar-news  
 ┃╠ ${prefix}cinemaschedule 
 ┃╠ ${prefix}wiki 
 ┃╠ ${prefix}covidindo 
 ┃╠ ${prefix}earthquake 
 ┃╠ ${prefix}tvschedule 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓`
 let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/indomenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
break 
 case 'indohoroscopemenu': {
                if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group) 
 var unicorn = await getBuffer(picak+'Indo Horoscope Menu') 
anjay = ` ┏━「 _INDO HOROSCOPE_ 」━━⭓ 
 ┃╔═✪      
 ┃╠ ${prefix}nomorhoki 
 ┃╠ ${prefix}artimimpi  
 ┃╠ ${prefix}artinama  
 ┃╠ ${prefix}ramaljodoh  
 ┃╠ ${prefix}ramaljodohbali  
 ┃╠ ${prefix}suamiistri  
 ┃╠ ${prefix}ramalcinta  
 ┃╠ ${prefix}cocoknama  
 ┃╠ ${prefix}pasangan  
 ┃╠ ${prefix}jadiannikah  
 ┃╠ ${prefix}sifatusaha  
 ┃╠ ${prefix}rezeki  
 ┃╠ ${prefix}pekerjaan  
 ┃╠ ${prefix}nasib  
 ┃╠ ${prefix}penyakit  
 ┃╠ ${prefix}tarot  
 ┃╠ ${prefix}fengshui  
 ┃╠ ${prefix}haribaik  
 ┃╠ ${prefix}harisangar  
 ┃╠ ${prefix}harisial 
 ┃╠ ${prefix}nagahari 
 ┃╠ ${prefix}arahrezeki 
 ┃╠ ${prefix}peruntungan  
 ┃╠ ${prefix}weton  
 ┃╠ ${prefix}karakter 
 ┃╠ ${prefix}keberuntungan 
 ┃╠ ${prefix}memancing 
 ┃╠ ${prefix}masasubur 
 ┃╠ ${prefix}zodiak 
 ┃╠ ${prefix}shio 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓`

 let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/horoscopemenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs,
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`, 
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: `${websitex}`, 
  mediaUrl: `${websitex}` 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 }
 break 
 case 'othermenu': 
                if (isBan) return reply(mess.ban) 
         if (isBanChat) return reply(mess.banChat) 
 if (!m.isGroup) return reply(mess.group) 

 var unicorn = await getBuffer(picak+'Other Menu') 
 anjay = ` ┏━「 _OTHER_ 」━━⭓ 
 ┃╔═══════✪      
 ┃╠ ${prefix}afk 
 ┃╠ ${prefix}readmore [text] 
 ┃╠ ${prefix}toviewonce 
 ┃╠ ${prefix}getpp
 ┃╠ ${prefix}chatinfo 
 ┃╠ ${prefix}alive 
 ┃╠ ${prefix}script 
 ┃╠ ${prefix}speedtest 
 ┃╠ ${prefix}ping 
 ┃╠ ${prefix}owner 
 ┃╠ ${prefix}menu 
 ┃╠ ${prefix}delete 
 ┃╠ ${prefix}chatinfo 
 ┃╠ ${prefix}quoted 
 ┃╠ ${prefix}listpc 
 ┃╠ ${prefix}listgc 
 ┃╠ ${prefix}donate 
 ┃╠ ${prefix}request 
 ┃╠ ${prefix}report [bug] 
 ┃╚═════════════✪
 ┗━「 *Created By Kenneth Morris* 」━⭓`
                     let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'), surface: 200, message: `${pushname}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
 let documents = [doc1,doc2,doc3] 
 let docs = pickRandom(documents)
 let buttons = [ 
 {buttonId: `command`, buttonText: {displayText: 'List Menu'}}, {buttonId: `allmenu`, buttonText: {displayText: 'All Menu'}}
 ] 
 let pics = fs.readFileSync('./XeonMedia/theme/thumbnail/skin 2/othermenu.jpg')
 let buttonMessage = { 
  document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), 
 mimetype: docs, 
 /////////////// jpegThumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic2.jpg'), 
 mentions: [m.sender], 
 fileName: `Hi, ${pushname} 👋`, 
///// fileLength: 666, 
//// pageCount: 666,
 caption: anjay, 
 footer: `${botname}`, 
 buttons: buttons, 
 headerType: 4,
contextInfo: { externalAdReply: { 
title: `Jasjus ID 🔰`, 
 body: `Thunder`,
mediaType: 4, 
 thumbnail: pics, 
sourceUrl: websitex, 
  mediaUrl: websitex 
}} 
} 
 XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fdocs})
 
         }
        

    }catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
