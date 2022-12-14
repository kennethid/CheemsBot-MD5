//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//image njim
global.wan = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.tu = fs.readFileSync('./XeonMedia/theme/cheemspic2.jpg')
global.tri = fs.readFileSync('./XeonMedia/theme/cheemspic3.jpg')
global.fo = fs.readFileSync('./XeonMedia/theme/cheemspic4.jpg')
global.faif = fs.readFileSync('./XeonMedia/theme/cheemspic5.jpg')
global.sik = fs.readFileSync('./XeonMedia/theme/cheemspic6.jpg')
global.seven = fs.readFileSync('./XeonMedia/theme/cheemspic7.jpg')
global.egh = fs.readFileSync('./XeonMedia/theme/cheemspic8.jpg')
global.nen = fs.readFileSync('./XeonMedia/theme/cheemspic9.jpg')
global.ten = fs.readFileSync('./XeonMedia/theme/cheemspic10.jpg')
global.elepen = fs.readFileSync('./XeonMedia/theme/cheemspic11.jpg')
global.welep = fs.readFileSync('./XeonMedia/theme/cheemspic12.jpg')
global.terten = fs.readFileSync('./XeonMedia/theme/cheemspic13.jpg')
global.foten = fs.readFileSync('./XeonMedia/theme/cheemspic14.jpg')
global.faiften = fs.readFileSync('./XeonMedia/theme/cheemspic15.jpg')
global.sikten = fs.readFileSync('./XeonMedia/theme/cheemspic16.jpg')

//owmner v card
global.vcardowner = ['447404876730'] //ur owner number
global.ownername = "Kenneth Lai" //ur owner name
global.ytname = "YT: JASJOES" //ur yt chanel name
global.socialm = "GitHub: kennethlai666" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.owner = ['447404876730']
global.ownertag = '6287785750311' //ur tag number
global.botname = 'Owner: *Kenneth ID*' //ur bot name
global.linkz = "https://chat.whatsapp.com/J1S3g1fbWSS9r01UNSBLst" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/ydBAmKT7f4s" //ur website to be displayed
global.botscript = 'https://github.com/kennethlai666/CheemsBot-MD4' //script link
global.reactmoji = "😘" //ur menu react emoji
global.themeemoji = "🪀" //ur theme emoji
global.packname = "Sara(H) • Viloid" //ur sticker watermark packname
global.author = "Kenneth Morris" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/thumbnail/kennethid.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/thumbnail/kennethid.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/thumbnail/kennethid.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/thumbnail/kennethid.jpg") //ur thumb pic

//damtabase
global.premium = ["6285773496010","6289503445265","6281585033934","62895622638061","6282245135176","6285773148403"] //ur premium numbers
global.vip = [{"id":"6285747219408@s.whatsapp.net","limit":"17 Desember 2022"}]//ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntnsfw2 = []
global.ntvirtex = []
global.rkyt = ['6285747219408']
global.wlcm = []
global.wlcmout = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []
global.walldua = []

//omther
global.fgclink = { 
            "key": { 
                "fromMe": true, 
                "participant": "0@s.whatsapp.net", 
                "remoteJid": "0@s.whatsapp.net" 
            }, 
            "message": { 
                "groupInviteMessage": { 
                    "groupJid": "6285736178354-1625305606@g.us", 
                    "inviteCode": "null", 
                    "groupName": "Kawan Elaina",  
                    "caption": "njir",  
                    'jpegThumbnail': fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') 
                } 
            } 
        }
                global.adReply = { 
                         contextInfo: { 
                                 forwardingScore: 9999, 
                                 isForwarded: false, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false 
                                 externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v 
                     showAdAttribution: true, 
                                         title: global.ucapan, 
                                         body: "Click To Donate", 
                                         mediaUrl: "anjing", 
                                         description: 'Elaina-MultiDevice', 
                                         previewType: "PHOTO", 
                                         thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'), 
                                         sourceUrl: "https://github.com/ImYanXiao",                                         
                                 } 
                         } 
                 }
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
	serper: 'Server down, try again later',
	premi: '_Fitur Berbayar_\n\nOwner: wa.me/6285842965801',
    cmmnd:  '_perlu mengaktifkan *.allcmd* untuk menggunakan fitur ini_',
    success: 'Done ✓',
    admin: 'Fitur Ini Khusus Untuk Admin!',
    botAdmin: 'Bot Harus Jadi Admin Dulu!',
    owner: 'Fitur Ini Khusus Untuk Owner/Premium!',
    group: 'Fitur ini khusus grup!\n\nSewa Bot Mulai Dari 5K - 10K Perbulan\n_*Contact Owner*_:\nhttp://wa.me/6285842965801/?text=Aku+mau+sewa+bot',
    private: 'Fitur Digunakan Khusus Chat Pribadi!',
    bot: 'Fitur Ini Khusus Untuk Bot!',
    wait: 'Sedang diproses...',
    linkm: 'Mana Linknya?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'Kamu Telah Dibanned Oleh Owner, Jika Ingin di Unbanned, chat owner.',
    nsfw: 'Fitur Nsfw Belum Diaktifkan, Silahkan Hubungi Admin Untuk Mengaktifkan',
    banChat: 'Bot Telah Dibanned Dari Grup, Silahkan Hubungi Owner Untuk Unban!',
    menu: `  ┏━「 _KHUSUS OWNER_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #self  
  ┃╠ #public  
  ┃╠ #antitag  
  ┃╠ #rentbot [add/del]  
  ┃╠ #rentlist  
  ┃╠ #ban [add/del]  
  ┃╠ #banchat [on/off]   
  ┃╠ #leavegc  
  ┃╠ #setexif  
  ┃╠ #block [tag/number]  
  ┃╠ #unblock [tag/number]  
  ┃╠ #coowner [add/del]  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _TEXT MAKER_ 」━━⭓ 
  ┃╔═══════✪  
  ┃╠ #candy [text] 
  ┃╠ #blackpinkneon [text] 
  ┃╠ #deepsea [text] 
  ┃╠ #scifi [text] 
  ┃╠ #fiction [text] 
  ┃╠ #berry [text] 
  ┃╠ #fruitjuice [text] 
  ┃╠ #biscuit [text] 
  ┃╠ #wood [text] 
  ┃╠ #chocolate [text] 
  ┃╠ #matrix [text] 
  ┃╠ #blood [text] 
  ┃╠ #halloween [text] 
  ┃╠ #wicker [text] 
  ┃╠ #darkgold [text] 
  ┃╠ #firework [text] 
  ┃╠ #skeleton [text] 
  ┃╠ #sand [text] 
  ┃╠ #glue [text] 
  ┃╠ #leaves [text] 
  ┃╠ #magma [text] 
  ┃╠ #lava [text] 
  ┃╠ #rock [text] 
  ┃╠ #bloodglas [text] 
  ┃╠ #underwater [text] 
  ┃╠ #textmaker [text] 
  ┃╠ #honey [text] 
  ┃╠ #ice [text] 
  ┃╠ #watercolor [text] 
  ┃╠ #multicolor [text] 
  ┃╠ #snow [text] 
  ┃╠ #harrypot [text] 
  ┃╠ #harrypotter [text] 
  ┃╠ #brokenglass [text] 
  ┃╠ #waterpipe [text] 
  ┃╠ #spooky [text] 
  ┃╠ #circuit [text] 
  ┃╠ #metallic [text] 
  ┃╠ #demon [text] 
  ┃╠ #sparklechristmas [text] 
  ┃╠ #christmas [text] 
  ┃╠ #3dchristmas [text] 
  ┃╠ #3dbox [text] 
  ┃╠ #waterdrop [text] 
  ┃╠ #lion2 [text] 
  ┃╠ #papercut [text] 
  ┃╠ #transformer [text] 
  ┃╠ #neondevil [text] 
  ┃╠ #3davengers [text] 
  ┃╠ #3dstone [text] 
  ┃╠ #3dstone2 [text] 
  ┃╠ #summertime [text] 
  ┃╠ #thunder [text] 
  ┃╠ #window [text] 
  ┃╠ #graffiti [text] 
  ┃╠ #graffitibike [text] 
  ┃╠ #pornhub [text] 
  ┃╠ #glitch [text] 
  ┃╠ #blackpink [text] 
  ┃╠ #glitch2 [text] 
  ┃╠ #glitch3 [text] 
  ┃╠ #3dspace [text] 
  ┃╠ #lion [text] 
  ┃╠ #3dneon [text] 
  ┃╠ #greenneon [text] 
  ┃╠ #bokeh [text] 
  ┃╠ #holographic [text] 
  ┃╠ #bear [text] 
  ┃╠ #wolf [text] 
  ┃╠ #joker [text] 
  ┃╠ #dropwater [text] 
  ┃╠ #dropwater2 [text] 
  ┃╠ #thewall [text] 
  ┃╠ #neonlight [text] 
  ┃╠ #natural [text] 
  ┃╠ #carbon [text] 
  ┃╠ #pencil [text] 
  ┃╠ #blackpink2 [text] 
  ┃╠ #neon [text] 
  ┃╠ #neonlight2 [text] 
  ┃╠ #toxic [text] 
  ┃╠ #strawberry [text] 
  ┃╠ #discovery [text] 
  ┃╠ #1917 [text] 
  ┃╠ #sci_fi [text] 
  ┃╠ #ancient [text] 
  ┃╠ #fabric [text] 
  ┃╠ #hoorror [text] 
  ┃╠ #whitebear [text] 
  ┃╠ #juice [text] 
  ┃╠ #batman [text] 
  ┃╠ #multicolor [text] 
  ┃╠ #collwall [text] 
  ┃╠ #wonderful [text] 
  ┃╠ #cool [text] 
  ┃╠ #sketch [text] 
  ┃╠ #marvel [text] 
  ┃╠ #foggy [text] 
  ┃╠ #writing [text] 
  ┃╠ #halloweenfire [text] 
  ┃╠ #halloween [text] 
  ┃╠ #watercolor [text] 
  ┃╠ #classic [text] 
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _DOWNLOAD_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #instagram [url]  
  ┃╠ #igtv [url]  
  ┃╠ #igstory [username]  
  ┃╠ #facebook [url] 
  ┃╠ #fbmp3 [url]  
  ┃╠ #twitter [url]  
  ┃╠ #twittermp3 [url]  
  ┃╠ #tiktok [url]  
  ┃╠ #tiktokaudio[url]  
  ┃╠ #tiktoknowm [url]  
  ┃╠ #mediafire [url]  
  ┃╠ #ytmp3 [url | quality]  
  ┃╠ #ytmp4 [url | quality]  
  ┃╠ #getmusic [yt link]  
  ┃╠ #getvideo [yt link]  
  ┃╠ #gitclone [repo link]  
  ┃╠ #soundcloud [url]  
  ┃╠ #zippyshare [url]  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _SEARCH_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #play [query]  
  ┃╠ #song [query]  
  ┃╠ #yts [query]  
  ┃╠ #lyrics [query]  
  ┃╠ #google [query]  
  ┃╠ #playstore [query]  
  ┃╠ #gimage [query]  
  ┃╠ #pinterest [query]  
  ┃╠ #image [query]  
  ┃╠ #film [query]  
  ┃╠ #wallpaper [query]  
  ┃╠ #searchgc [query]  
  ┃╠ #happymod [query]  
  ┃╠ #servermc  
  ┃╠ #mcpedl [query]  
  ┃╠ #tvsearch [query]  
  ┃╠ #wikimedia [query]  
  ┃╠ #ytsearch [query]  
  ┃╠ #ringtone [query]  
  ┃╠ #webtoon [query]  
  ┃╠ #anime [query]  
  ┃╠ #animestory [query]  
  ┃╠ #manga [query]  
  ┃╠ #wattpad [query]  
  ┃╠ #mcserver [ip|port]  
  ┃╠ #drakor [query]  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _CONVERT_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #toimage [reply stick]  
  ┃╠ #sticker [reply img | gif]  
  ┃╠ #take [reply img | gif | stik]  
  ┃╠ #smeme [reply img]  
  ┃╠ #smeme2 [reply img *text | text*] 
  ┃╠ #emoji [emoji]  
  ┃╠ #tovideo [reply img]  
  ┃╠ #togif [reply stick]  
  ┃╠ #tourl [reply img]  
  ┃╠ #tovn [reply aud]  
  ┃╠ #tomp3 [reply vn]  
  ┃╠ #toaudio [reply vid]  
  ┃╠ #ebinary [reply txt]  
  ┃╠ #dbinary [reply txt]  
  ┃╠ #tinyurl [link]  
  ┃╠ #styletext [text]  
  ┃╠ #volume [reply aud]  
  ┃╠ #tempo [reply aud]  
  ┃╠ #bass [reply aud]  
  ┃╠ #blown [reply aud]  
  ┃╠ #deep [reply aud]  
  ┃╠ #earrape [reply aud]  
  ┃╠ #fast [reply aud]  
  ┃╠ #fat [reply aud]  
  ┃╠ #nightcore [reply aud]  
  ┃╠ #reverse [reply aud]  
  ┃╠ #robot [reply aud]  
  ┃╠ #slow [reply aud]  
  ┃╠ #squirrel [reply aud]  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _IMG EFFECT_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #wanted [reply img] 
  ┃╠ #blur [reply img] 
  ┃╠ #framed [reply img] 
  ┃╠ #gayeffect [reply img] 
  ┃╠ #imagesketch [reply img] 
  ┃╠ #invert [reply img] 
  ┃╠ #burn [reply img] 
  ┃╠ #triggeredwebp [reply img] 
  ┃╠ #shit [reply img] 
  ┃╠ #rip [reply img] 
  ┃╠ #jail [reply img] 
  ┃╠ #beautifuleffect [reply img] 
  ┃╠ #deleteeffect [reply img] 
  ┃╠ #pixelate [reply img] 
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _RANDOM IMG_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #coffee  
  ┃╠ #woof  
  ┃╠ #meow  
  ┃╠ #lizard  
  ┃╠ #wallneon  
  ┃╠ #wallpubg  
  ┃╠ #wallml  
  ┃╠ #wallrandom  
  ┃╠ #wallcode  
  ┃╠ #animewall [query]  
  ┃╠ #animewall2 [query]  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _EMOTE_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #instagramemoji  
  ┃╠ #facebookemoji  
  ┃╠ #iphoneemoji  
  ┃╠ #samsungemoji  
  ┃╠ #joyemoji  
  ┃╠ #skypeemoji  
  ┃╠ #twitteremoji  
  ┃╠ #whatsappemoji  
  ┃╠ #microsoftemoji  
  ┃╠ #googleemoji  
  ┃╠ #pediaemoji  
  ┃╠ #microsoftemoji  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _ANIME_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #naruto  
  ┃╠ #yaoi  
  ┃╠ #neko2  
  ┃╠ #waifu  
  ┃╠ #waifu2  
  ┃╠ #awoo2  
  ┃╠ #shinobu  
  ┃╠ #waifu3  
  ┃╠ #foxgirl  
  ┃╠ #megumin2  
  ┃╠ #loli  
  ┃╠ #8ball  
  ┃╠ #animenom  
  ┃╠ #goose  
  ┃╠ #avatar  
  ┃╠ #tickle  
  ┃╠ #gecg  
  ┃╠ #feed  
  ┃╠ #animeslap  
  ┃╠ #animespank  
  ┃╠ #animepat  
  ┃╠ #animeneko  
  ┃╠ #animekiss  
  ┃╠ #animewlp  
  ┃╠ #animecuddle  
  ┃╠ #animecry  
  ┃╠ #animekill  
  ┃╠ #animelick  
  ┃╠ #animebite  
  ┃╠ #animeyeet  
  ┃╠ #animebully  
  ┃╠ #animebonk  
  ┃╠ #animewink  
  ┃╠ #animepoke  
  ┃╠ #animesmile  
  ┃╠ #animewave  
  ┃╠ #animeawoo  
  ┃╠ #animeblush  
  ┃╠ #animesmug  
  ┃╠ #animeglomp  
  ┃╠ #animehappy  
  ┃╠ #animedance  
  ┃╠ #animecringe  
  ┃╠ #animehighfive  
  ┃╠ #animehandhold  
  ┃╠ #animemegumin  
  ┃╠ #smug2  
  ┃╠ #couplepp  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _STICKER_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #patrick  
  ┃╠ #emoji (fitur ini tidak tersedia) 
  ┃╠ #emojimix  
  ┃╠ #attp [text] 
  ┃╠ #ttp [text] 
  ┃╠ #doge  
  ┃╠ #lovesticker  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _ANIME STICKER_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #loli  
  ┃╠ #bully  
  ┃╠ #cuddle  
  ┃╠ #cry  
  ┃╠ #hug  
  ┃╠ #awoo  
  ┃╠ #kiss  
  ┃╠ #lick  
  ┃╠ #pat  
  ┃╠ #smug  
  ┃╠ #bonk  
  ┃╠ #yeet  
  ┃╠ #blush  
  ┃╠ #smile  
  ┃╠ #wave  
  ┃╠ #highfive  
  ┃╠ #handhold  
  ┃╠ #nom  
  ┃╠ #glomp  
  ┃╠ #bite  
  ┃╠ #slap  
  ┃╠ #kill  
  ┃╠ #happy  
  ┃╠ #wink  
  ┃╠ #poke  
  ┃╠ #dance  
  ┃╠ #cringe  
  ┃╠ #neko  
  ┃╠ #gura  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _NSFW_ 」━━⭓  
  ┃╔═══════✪ 
  ┃╠ #hentaivideo  
  ┃╠ #yuri (error) 
  ┃╠ #masturbation (error) 
  ┃╠ #thighs (error) 
  ┃╠ #pussy (error) 
  ┃╠ #panties (error) 
  ┃╠ #orgy (error) 
  ┃╠ #ahegao (error) 
  ┃╠ #ass (error) 
  ┃╠ #bdsm (error) 
  ┃╠ #blowjob (error) 
  ┃╠ #cuckold (error) 
  ┃╠ #ero (error) 
  ┃╠ #gasm  
  ┃╠ #cum (error) 
  ┃╠ #femdom (error) 
  ┃╠ #foot (error) 
  ┃╠ #gangbang (error) 
  ┃╠ #glasses (error) 
  ┃╠ #jahy (error) 
  ┃╠ #trap  
  ┃╠ #blowjobgif  
  ┃╠ #spank  
  ┃╠ #hneko  
  ┃╠ #nwaifu  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _FUN_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #kerangajaib [text] 
  ┃╠ #how [text]  
  ┃╠ #when [text]  
  ┃╠ #where [text]  
  ┃╠ #is [text]  
  ┃╠ #what [text]  
  ┃╠ #can [text]  
  ┃╠ #rate [text]  
  ┃╠ #wangy [text]  
  ┃╠ #beautifulcheck [tag]  
  ┃╠ #awesomecheck [tag]  
  ┃╠ #prettycheck [tag]  
  ┃╠ #lesbiancheck [tag]  
  ┃╠ #gaycheck [tag]  
  ┃╠ #cutecheck [tag]  
  ┃╠ #uglycheck [tag]  
  ┃╠ #hornycheck [tag]  
  ┃╠ #charactercheck [tag]  
  ┃╠ #lovelycheck [tag]  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _SOUND_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #sound1 
  ┃╠ || 
  ┃╠ #sound161 
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _GAME_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #family100 
  ┃╠ #truth  
  ┃╠ #dare  
  ┃╠ #tictactoe  
  ┃╠ #delttt  
  ┃╠ #guess [option]  
  ┃╠ #math [mode]  
  ┃╠ #suitpvp [tag]  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _TOOL_ 」━━⭓ 
  ┃╔═✪ _en = inggris_ / _in = indonesia_ 
  ┃╠ ~#translate en [text]~ (kedaluwarsa) 
  ┃╠ #fliptext [text]  
  ┃╠ #toletter [number]  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _DATABASE BOT_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #setcmd 
  ┃╠ #listcmd  
  ┃╠ #delcmd  
  ┃╠ #lockcmd  
  ┃╠ #addmsg  
  ┃╠ #listmsg  
  ┃╠ #getmsg  
  ┃╠ #delmsg 
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _INDO_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #darkjoke  
  ┃╠ #quotes  
  ┃╠ #animequotes  
  ┃╠ #jalantikus-meme  
  ┃╠ #merdeka-news   
  ┃╠ #kontan-news   
  ┃╠ #cnbc-news   
  ┃╠ #tribun-news   
  ┃╠ #indozone-news   
  ┃╠ #kompas-news   
  ┃╠ #detik-news   
  ┃╠ #daily-news   
  ┃╠ #inews-news   
  ┃╠ #okezone-news   
  ┃╠ #sindo-news   
  ┃╠ #tempo-news   
  ┃╠ #antara-news   
  ┃╠ #cnn-news   
  ┃╠ #fajar-news   
  ┃╠ #cinemaschedule  
  ┃╠ #wiki  
  ┃╠ #covidindo  
  ┃╠ #earthquake  
  ┃╠ #tvschedule  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _INDO HSCOPE_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #nomorhoki  
  ┃╠ #artimimpi   
  ┃╠ #artinama   
  ┃╠ #ramaljodoh   
  ┃╠ #ramaljodohbali   
  ┃╠ #suamiistri   
  ┃╠ #ramalcinta   
  ┃╠ #cocoknama   
  ┃╠ #pasangan   
  ┃╠ #jadiannikah   
  ┃╠ #sifatusaha   
  ┃╠ #rezeki   
  ┃╠ #pekerjaan   
  ┃╠ #nasib   
  ┃╠ #penyakit   
  ┃╠ #tarot   
  ┃╠ #fengshui   
  ┃╠ #haribaik   
  ┃╠ #harisangar   
  ┃╠ #harisial  
  ┃╠ #nagahari  
  ┃╠ #arahrezeki  
  ┃╠ #peruntungan   
  ┃╠ #weton   
  ┃╠ #karakter  
  ┃╠ #keberuntungan  
  ┃╠ #memancing  
  ┃╠ #masasubur  
  ┃╠ #zodiak  
  ┃╠ #shio  
  ┃╚═════════════✪ 
  ┗━━━━━━━━━━━━━━━━━━━⭓ 
  ┏━「 _OTHER_ 」━━⭓ 
  ┃╔═══════✪ 
  ┃╠ #afk  
  ┃╠ #readmore [text]  
  ┃╠ #toviewonce  
  ┃╠ #getpp 
  ┃╠ #chatinfo  
  ┃╠ #alive  
  ┃╠ #script  
  ┃╠ #speedtest  
  ┃╠ #ping  
  ┃╠ #owner  
  ┃╠ #menu  
  ┃╠ #delete  
  ┃╠ #chatinfo  
  ┃╠ #quoted  
  ┃╠ #listpc  
  ┃╠ #listgc  
  ┃╠ #donate  
  ┃╠ #request  
  ┃╠ #report [bug]  
  ┃╚═════════════✪ 
  ┗━「 *Created By Kenneth Morris* 」━⭓`
}
    global.limitawal = {
    premium: "Infinity",
    free: 8,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})