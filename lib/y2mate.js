let fetch = require('node-fetch') 
 let { JSDOM } = require('jsdom') 
  
 function post(url, formdata) { 
   return fetch(url, { 
     method: 'POST', 
     headers: { 
       accept: "*/*", 
       'accept-language': "en-US,en;q=0.9", 
       'content-type': "application/x-www-form-urlencoded; charset=UTF-8" 
     }, 
     body: new URLSearchParams(Object.entries(formdata)) 
   }) 
 } 
 const ytIdRegex = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/ 
  
 /** 
  * Download YouTube Video via y2mate 
  * @param {String} url YouTube Video URL 
  * @param {String} quality (avaiable: `144p`, `240p`, `360p`, `480p`, `720p`, `1080p`, `1440p`, `2160p`) 
  * @param {String} type (avaiable: `mp3`, `mp4`) 
  * @param {String} bitrate (avaiable for video: `144`, `240`, `360`, `480`, `720`, `1080`, `1440`, `2160`) 
  * (avaiable for audio: `128`) 
  * @param {String} server (avaiable: `id4`, `en60`, `en61`, `en68`) 
  */ 
 async function yt(url, quality, type, bitrate, server = 'en68') { 
  
        return {'result': yt(post('https://www.y2mate.com/mates/en68/convert', data={'type': 'youtube', '_id': search('var k__id = "(.+?)"', yt(post('https://www.y2mate.com/mates/en68/analyze/ajax', data={'url': f'https://youtu.be/{get_id(url)}', 'q_auto': 0, 'ajax': 1}).json()['result'], 'html.parser').findAll('script')[1].string)[1], 'v_id': get_id(url), 'ajax': '1', 'token': '', 'ftype': tipe, 'fquality': quality}).json()['result'], 'html.parser').a['href']}
   ////// except IndexError:
       /////////// return {'error': 'Terjadi kesalahan'}
}
 module.exports = { 
   yt, 
   ytIdRegex, 
   /** 
    * Download YouTube Video as Audio via y2mate 
    * @param {String} url YouTube Video URL 
    * @param {String} server (avaiable: `id4`, `en60`, `en61`, `en68`) 
    */ 
   yta(url, resol = '128kbps', server = 'en154') { return yt(url, resol, 'mp3', resol.endsWith('kbps') ? resol.replace(/kbps/g, '') : resol, server) }, 
   /** 
    * Download YouTube Video as Video via y2mate 
    * @param {String} url YouTube Video URL 
    * @param {String} server (avaiable: `id4`, `en60`, `en61`, `en68`) 
    */ 
   ytv(url, resol = '360p', server = 'en154') { return yt(url, resol, 'mp4', resol.endsWith('p') ? resol.replace(/p/g, '') : resol, server) }, 
   servers: ['en136', 'id4', 'en60', 'en61', 'en68'] 
 }