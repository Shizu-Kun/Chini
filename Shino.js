process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const mark = `0@s.whatsapp.net`
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const yts = require("yt-search")
const LINODE_API_TOKEN = global.apilinode;
const API_TOKEN = global.apitokendo;
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
//==================================================//
const thumb = fs.readFileSync ('./Shinobot/image/mamak.jpg')
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const pengguna = JSON.parse(fs.readFileSync('./Shinobot/dbnye/wihh.json'))
const prem = require("./lib/premium");
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const xeonverifieduser = JSON.parse(fs.readFileSync('./Shinobot/dbnye/wihh.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const banned = JSON.parse(fs.readFileSync('./Shinobot/dbnye/banned.json'))
//==================================================//
module.exports = Shino = async (Shino, m, chatUpdate, store) => {
const { sender, isGroup } = m
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//WM By Rulzz, Titenono lek ko hapus le😹
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
//=================================================//

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

const pushname = m.pushName || "No Name"

    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
//=================================================//
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const botNumber = await Shino.decodeJid(Shino.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await Shino.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const Jpm = m.isGroup ? ntilink.includes(from) : false 
const isBan = banned.includes(m.sender)
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''



// FUNCTION WAKTU
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
let d = new Date
const calender = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var stime = Styles(`Good Night`)
 }
 if(time2 < "19:00:00"){
var stime = Styles(`Good Evening`)
 }
 if(time2 < "18:00:00"){
var stime = Styles(`Good Evening`)
 }
 if(time2 < "15:00:00"){
var stime = Styles(`Good Afternoon`)
 }
 if(time2 < "11:00:00"){
var stime = Styles(`Good Morning`)
 }
 if(time2 < "05:00:00"){
var stime = Styles(`Good Morning`)
 }
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const qtod = m.quoted? "true":"false"
const bii = JSON.parse(fs.readFileSync('./Shinobot/dbnye/wihh.json').toString())
const isSeler = [botNumber, ...bii].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
//=================================================//
const sendMessageModify = (jid, teks = '', quoted = '', opts = {}) => {return Shino.sendMessage(jid, {text: teks, contextInfo: {mentionedJid: ments(teks), externalAdReply: {showAdAttribution: opts.ads, title: opts.title ?? packname, body: opts.body, mediaType: 1, previewType: 'PHOTO', thumbnailUrl: opts.thumbUrl, thumbnail: opts.thumbnail, sourceUrl: opts.url, renderLargerThumbnail: opts.largeThumb }}}, {quoted: quoted})}

// REGISTER BOT
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
const isRegistered = checkRegisteredUser(m.sender)

// FUNCTION MONO SPACE FONT
function monospace(string) {
return '```' + string + '```'
}

// FUNCTION
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

const reply = async(teks) => {Shino.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:fcall})}

Shino.autoshalat = Shino.autoshalat ? Shino.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Shino.user.id : m.sender
	let id = m.chat 
    if(id in Shino.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Makassar dan sekitarnya._`
    Shino.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete Shino.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }

const totalFitur = () =>{
            var mytext = fs.readFileSync("./Shino.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
      

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Shino.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: fcall })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Shino.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: fcall })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

async function igdl2(url) {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }
//==================================================//
if (!Shino.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
Shino.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            }
           

     
// Anti Link

if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await Shino.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return Shino.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return Shino.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return Shino.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await Shino.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
Shino.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Shino.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: Shino.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Shino.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Shino.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
//==================================================//
try {
ppuser = await Shino.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
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
} catch (err) {
console.log(err)
} 

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (autobio) {
        let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await Shino.updateProfileStatus(`I am ${botname} | Aktif Selama ${uptime} ⏳ | Mode : ${Shino.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
        }
if (autoread) {
Shino.readMessages([m.key])
        }
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

function pickMoji(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

async function falseR () {
Shino.sendReact(m.chat, '❌', m.key)
}

async function loading () {
var ZenDev = [
`${pickMoji(['🙄','🤯','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','♻️','〽️','⚠️'])}`,
`${pickMoji(['😨','😅','😂','😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😳','💭','🗯','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`,
`${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','💣','😔','👀','👎','🥶','💯','💤','💨','🔥','👍','❓️','⏳️','💥','🤙'])}`,
]
let { key } = await Shino.sendReact(m.chat, `${pickMoji(['😨','😅','😂','😳','😎','🥵','😱','🐦','🙄','🐤','🗿','💬','🤨','🥴','😐','👆','😔','👀','👎','🥶','💯','🔥','👍','❓️','⏳️','💥','🤙'])}`, m.key)//Pengalih isu

for (let i = 0; i < ZenDev.length; i++) {
await sleep(65)
await Shino.sendReact(m.chat, ZenDev[i], m.key)
//PESAN LEPAS
}
}

// FUNCTION HENTAI SEARCH
async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get("https://hentai.tv/?s=" + search).then(async ({ data }) => {
      let $ = cheerio.load(data)
      let result = {}
      let res = []
      result.coder = 'rem-comp'
      result.result = res
      result.warning = "It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp"

      $('div.flex > div.crsl-slde').each(function (a, b) {
        let _thumbnail = $(b).find('img').attr('src')
        let _title = $(b).find('a').text().trim()
        let _views = $(b).find('p').text().trim()
        let _url = $(b).find('a').attr('href')
        let hasil = { thumbnail: _thumbnail, title: _title, views: _views, url: _url }
        res.push(hasil)
      })

      resolve(result)
    }).catch(err => {
      console.log(err)
    })
  })
}

// FUNCTION PORNHUB
async function searchVideo(query) {
  const url = `https://www.pornhub.com/video/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const videoList = [];

  $('li[data-video-segment]').each((index, element) => {
    const $element = $(element);
    
    const link = $element.find('.title a').attr('href').trim();
    const title = $element.find('.title a').text().trim();
    const uploader = $element.find('.videoUploaderBlock a').text().trim();
    const views = $element.find('.views').text().trim();
    const duration = $element.find('.duration').text().trim();
    
    const videoData = {
      link: "https://www.pornhub.com" + link,
      title: title,
      uploader: uploader,
      views: views,
      duration: duration
    };
    
    videoList.push(videoData);
  });
  
  return videoList;
}

async function searchGif(query) {
  const url = `http://www.pornhub.com/gifs/search?search=${query}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const gifs = $('ul.gifs.gifLink li');

    return gifs.map((i, gif) => {
      const data = $(gif).find('a');

      return {
        title: data.find('span').text(),
        url: 'http://dl.phncdn.com#id#.gif'.replace('#id#', data.attr('href')),
        webm: data.find('video').attr('data-webm'),
      };
    }).get();
}

// FUNCTION DOWNLOAD HENTAI SFM
async function hentaivid() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const hasil2 = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil2.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(hasil2)
})
})
}


// GAME TEBAK bendera 
if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan: ${monospace(soal)}\nJawaban: ${jawaban}\n`);
//users[sender].balance += hadiah
clearTimeout(waktu);
delete tebakbendera[from];
}
}

// GAME TEBAK KATA 
if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\n`);
//users[sender].balance += hadiah
clearTimeout(waktu);
delete tebakkata[from];
}
}

// GAME SUSUN KATA
if ((from in susunkata)) {
let { soal, jawaban, waktu } = susunkata[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\n`);
 //users[sender].balance += hadiah
clearTimeout(waktu);
delete susunkata[from];
}
}

// FUNCTION BY 
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
//==================================================//
switch(command) {
case 'daftar':
if (isRegistered) return reply('Kamu sudah terdaftar')
if (!q.includes('.')) return reply('*Format salah! Gunakan Dengan*\n\n *Contoh :* .daftar Shino.19')
const namaUser = q.substring(0, q.indexOf('.') - 0)
const umurUser = q.substring(q.lastIndexOf('.') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return reply('Umur harus berupa angka!!')
if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
if (umurUser > 40) return reply(`your age is too old maximum 40 years`)
if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
let mzd = `*DAFTAR BERHASIL*\n\n⎋ Nama : ${namaUser}\n⎋ Umur : ${umurUser}\n⎋ Nomor : @${m.sender.split("@")[0]}\n⎋ Premium : ${isPrem}\n⎋ register : ${calender}`
let veri = m.sender
if (!m.isGroup) {
addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
Shino.sendMessage(from, {image: ppnyauser, caption: mzd, fileLength: 9999778866, contextInfo: {
externalAdReply: {
showAdAttribution: true, 
mediaType: 1, 
previewType: 'PHOTO',
renderLargerThumbnail: false, 
title: `${namaUser} Terdaftar ✅`, 
body: `powered by winn`, 
description: 'no text',
mediaType: 1,
thumbnail: ppnyauser,
sourceUrl: `${global.saluran}`,
}}
})
} else {
addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
Shino.sendMessage(from, {image: ppnyauser, caption: mzd, fileLength: 9999778866, contextInfo: {
externalAdReply: {
showAdAttribution: true, 
mediaType: 1, 
previewType: 'PHOTO',
renderLargerThumbnail: false, 
title: `${namaUser} Terdaftar ✅`, 
body: `powered by winn`, 
description: 'no text',
mediaType: 1,
thumbnail: ppnyauser,
sourceUrl: `${global.saluran}`,
}}
})
}
break
case 'menu': {
if (!isRegistered) return reply(mess.regis)
let text = `ʜɪ, ɪ'ᴍ *${botname},* ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴅᴇꜱɪɢɴᴇᴅ ᴛᴏ ʜᴇʟᴘ ʏᴏᴜ ᴡɪᴛʜ ᴛʜᴇ ꜰᴇᴀᴛᴜʀᴇꜱ ɪ ʜᴀᴠᴇ

⚝ *I N F O - B O T* ⚝
  
  ≡ *NamaBot* : ${botname}
  ≡ *Nama* : ${pushname}
  ≡ *Runtime* : ${runtime(process.uptime())}
  ≡ *Totalfeature* : ${totalFitur()}`
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: text
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: "ᴋʟɪᴄᴋ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ꜱᴇɴꜱᴇɪ"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./assets/menu.png')}, { upload: Shino.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"ᴋʟɪᴋ ᴅɪꜱɪɴɪ ꜱᴇɴꜱᴇ",
"sections":[{"title":"shino List Feature",
"highlight_label": "Favorite Request",
"rows":[{"header":"",
"title":"menu-all",
"description":"For See all Feature",
"id":"${prefix}allmenu"},
{"header":"",
"title":"menu-owner",
"description":"For See owner Feature",
"id":"${prefix}ownermenu"},
{"header":"",
"title":"menu-funn",
"description":"For See funn Feature",
"id":"${prefix}funmenu"},
{"header":"",
"title":"menu-group",
"description":"For See group Feature",
"id":"${prefix}groupmenu"},
{"header":"",
"title":"menu-download",
"description":"For See downloadmenu Feature",
"id":"${prefix}downloadmenu"},
{"header":"",
"title":"menu-search",
"description":"For See search Feature",
"id":"${prefix}searchmenu"},
{"header":"",
"title":"menu-aanime",
"description":"For See anime Feature",
"id":"${prefix}animemenu"},
{"header":"",
"title":"menu-nfsw",
"description":"For See nfsw Feature",
"id":"${prefix}nfswmenu"},
{"header":"",
"title":"menu-game",
"description":"For See game Feature",
"id":"${prefix}gamemenu"},
{"header":"",
"title":"menu-tools",
"description":"For See tools Feature",
"id":"${prefix}toolsmenu"},
{"header":"",
"title":"menu-sticker",
"description":"For See sticker Feature",
"id":"${prefix}stickermenu"},
{"header":"",
"title":"menu-srore",
"description":"For See Store Feature",
"id":"${prefix}storemenu"}]
}]
}`
         },
             
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '12031853846998@newsletter',
                  newsletterName: '🌊𝐒𝐡𝐢𝐧𝐨𝐁𝐨𝐭𝐌𝐃',
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await Shino.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } 
break
case "allmenu": {
if (!isRegistered) return reply(mess.regis)
menuu = `
– *search ᴍᴇɴᴜ*

┌
│◦ *.play*
│◦ *.pinterest*
│◦ *.couple*
│◦ *.spotify*
│◦ *.whatanime*
│◦ *.ytsearch*
│◦ *.getmusic*
│◦ *.getvideo*
│◦ *.spotify*
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

– *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*

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
│◦ *.getpp*
│◦ *.infogc*
│◦ *.gcname*
│◦ *.setppgc*
│◦ *.setdesc*
│◦ *.grup close*
│◦ *.grup open*
│◦ *.ᴘᴜꜱʜᴋᴏɴᴛᴀᴋ*
│◦ *.ᴄᴇᴋɪᴅɢᴄ*
│◦ *.ɢᴇᴛɪᴅɢᴄ*
│◦ *.ᴊᴏɪɴ*
└

– *anime ᴍᴇɴᴜ*

┌
│◦ *.otakudesdetails*
│◦ *.otaksearch*
│◦ *.kcrandom*
│◦ *.whatanime*
│◦ *.kitsune*
│◦ *.husbando*
└

– *fun Menu*

┌ ◦ *.tolol*
│ ◦ *.cekkhodam*
│ ◦ *.goblog*
│ ◦ *.idiot*
│ ◦ *.gay*
│ ◦ *.jomok*
│ ◦ *.bajingan*
│ ◦ *.munafik*
│ ◦ *.kontol*
│ ◦ *.yatim*
│ ◦ *.poke*
│ ◦ *.pembokep*
│ ◦ *.wibu*
│ ◦ *.stress*
│ ◦ *.miskin*
│ ◦ *.cantik*
│ ◦ *.manis*
│ ◦ *.babi*
│ ◦ *.ganteng*
│ ◦ *.cina*
│ ◦ *.atheis*
│ ◦ *.pengentot*
│ ◦ *.fembokef*
│ ◦ *.cabul*
│ ◦ *.sange*
│ ◦ *.fuckboy*
└ ◦ *.pengocok*

– *sticker ᴍᴇɴᴜ*

┌
│◦ *.sticker*
│◦ *.stickergif*
│◦ *.qc*
│◦ *.toimage*
└

– *tools ᴍᴇɴᴜ*

┌
│◦ *.tovn*
│◦ *.toaudio*
│◦ *.toimage*
│◦ *.hdr*
│◦ *.tomp3*
└

– *OWNER MENU*

┌
│◦ *.addowner*
│◦ *.delowner*
│◦ *.addprem*
│◦ *.delprem*
│◦ *.backup*
│◦ *.getcase*
│◦ *.addcase*
│◦ *.listcase*
│◦ *.autobio*
│◦ *.setbotbio*
│◦ *.getbio*
│◦ *.biochange*
│◦ *.autoread*
│◦ *.public*
│◦ *.self*
│◦ *.upsw*
│◦ *.getsw*
│◦ *.listsw*
│◦ *.listprem*
│◦ *.bcimg*
│◦ *.bcgroup*
│◦ *.listgc*
└

– *game ᴍᴇɴᴜ*

┌
│◦ *.tebakbendera*
│◦ *.tebakkata*
│◦ *.susunkata*
└

– *OTHER MENU*

┌
│◦ *.ai*
│◦ *.addcase*
│◦ *.delcase*
│◦ *.listcase*
│◦ *.getcase*
│◦ *.totalfitur*
│◦ *.public*
│◦ *.self*
│◦ *.restart*
│◦ *.runtime*
│◦ *.addprem*
│◦ *.delprem*
│◦ *.listprem*
│◦ *.upsw*
│◦ *.getsw*
│◦ *.listsw*
│◦ *.bcgc*
│◦ *.bcimg*
│◦ *.sticker*
│◦ *.payment*
│◦ *.qc*
│◦ *.hdr*
│◦ *.autoread*
│◦ *.autobio*
│◦ *.pushkontak2*
│◦ *.listgc*
│◦ *.tourl*
└

– *asupan ᴍᴇɴᴜ*

┌
│◦ *.bokep*
│◦ *.hentaivid*
│◦ *.hentaivid2*
│◦ *.pornhubvid*
└

– *NFSW MENU*

┌
│◦ *.hneko*
│◦ *.hentaivid*
│◦ *.pornhubvid*
│◦ *.nwaifu*
│◦ *.loli*
│◦ *.gasm*
│◦ *.cosplay*
│◦ *.bokep*
│◦ *.randomdouyin*
│◦ *.hentaisearch*
│◦ *.gasm*
│◦ *.cosplay*
└

– *ꜱʀᴛᴏʀᴇ ᴍᴇɴᴜ*

┌
│◦ *.ʙᴀᴛᴀʟ*
│◦ *.ᴘʀᴏꜱᴇꜱ*
│◦ *.ᴅᴏɴᴇ*
└`
await reply(Styles(menuu));
}
break
case "funmenu": {
menuu = `– *FUNN MENU*

┌ ◦ *.tolol*
│ ◦ *.cekkhodam*
│ ◦ *.goblog*
│ ◦ *.idiot*
│ ◦ *.gay*
│ ◦ *.jomok*
│ ◦ *.bajingan*
│ ◦ *.munafik*
│ ◦ *.kontol*
│ ◦ *.yatim*
│ ◦ *.poke*
│ ◦ *.pembokep*
│ ◦ *.wibu*
│ ◦ *.stress*
│ ◦ *.miskin*
│ ◦ *.cantik*
│ ◦ *.manis*
│ ◦ *.babi*
│ ◦ *.ganteng*
│ ◦ *.cina*
│ ◦ *.atheis*
│ ◦ *.pengentot*
│ ◦ *.fembokef*
│ ◦ *.cabul*
│ ◦ *.sange*
│ ◦ *.fuckboy*
└ ◦ *.pengocok*`
await reply(Styles(menuu));
}
break
case "searchmenu": {
menuu = `– *search ᴍᴇɴᴜ*

┌
│◦ *.play*
│◦ *.pinterest*
│◦ *.couple*
│◦ *.spotify*
│◦ *.whatanime*
│◦ *.ytsearch*
│◦ *.getmusic*
│◦ *.getvideo*
│◦ *.spotify*
└`
await reply(Styles(menuu));
}
break
case "ownermenu": {
menuu = `– *OWNER MENU*

┌
│◦ *.addowner*
│◦ *.delowner*
│◦ *.addprem*
│◦ *.delprem*
│◦ *.backup*
│◦ *.getcase*
│◦ *.addcase*
│◦ *.listcase*
│◦ *.autobio*
│◦ *.setbotbio*
│◦ *.getbio*
│◦ *.biochange*
│◦ *.autoread*
│◦ *.public*
│◦ *.self*
│◦ *.upsw*
│◦ *.getsw*
│◦ *.listsw*
│◦ *.listprem*
│◦ *.bcimg*
│◦ *.bcgroup*
│◦ *.listgc*
└`
await reply(Styles(menuu));
}
break
case "gamemenu": {
menuu = `– *game ᴍᴇɴᴜ*

┌
│◦ *.tebakbendera*
│◦ *.tebakkata*
│◦ *.susunkata*
└`
await reply(Styles(menuu));
}
break

case "asupanmenu": {
menuu = `– *asupan ᴍᴇɴᴜ*

┌
│◦ *.bokep*
│◦ *.hentaivid*
│◦ *.hentaivid2*
│◦ *.pornhubvid*
└`
await reply(Styles(menuu));
}
break
case "nfswmenu": {
menuu = `– *NFSW MENU*

┌
│◦ *.hneko*
│◦ *.hentaivid*
│◦ *.pornhubvid*
│◦ *.nwaifu*
│◦ *.loli*
│◦ *.gasm*
│◦ *.cosplay*
│◦ *.bokep*
│◦ *.randomdouyin*
│◦ *.hentaisearch*
│◦ *.gasm*
│◦ *.cosplay*
└
`
await reply(Styles(menuu));
}
break
case "othermenu": {
menuu = `OTHER MENU
┌
│◦ *.ai*
│◦ *.addcase*
│◦ *.delcase*
│◦ *.listcase*
│◦ *.getcase*
│◦ *.totalfitur*
│◦ *.public*
│◦ *.self*
│◦ *.restart*
│◦ *.runtime*
│◦ *.addprem*
│◦ *.delprem*
│◦ *.listprem*
│◦ *.upsw*
│◦ *.getsw*
│◦ *.listsw*
│◦ *.bcgc*
│◦ *.bcimg*
│◦ *.sticker*
│◦ *.payment*
│◦ *.qc*
│◦ *.hdr*
│◦ *.autoread*
│◦ *.autobio*
│◦ *.pushkontak2*
│◦ *.listgc*
│◦ *.tourl*
└`
await reply(Styles(menuu));
}
break

case "downloadmenu": {
menuu = `– *DOWNLOAD MENU*

┌
│◦ *.ʏᴛᴍᴘ3*
│◦ *.ʏᴛᴍᴘ4*
│◦ *.ᴛᴛ*
│◦ *.play*
│◦ *.instagram*
│◦ *.spotifydl*
└`
await reply(Styles(menuu));
}
break
case "groupmenu": {
menuu = `– *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*

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
│◦ *.getpp*
│◦ *.infogc*
│◦ *.gcname*
│◦ *.setppgc*
│◦ *.setdesc*
│◦ *.grup close*
│◦ *.grup open*
│◦ *.ᴘᴜꜱʜᴋᴏɴᴛᴀᴋ*
│◦ *.ᴄᴇᴋɪᴅɢᴄ*
│◦ *.ɢᴇᴛɪᴅɢᴄ*
│◦ *.ᴊᴏɪɴ*
└`
await reply(Styles(menuu));
}
break

case "animemenu": {
menuu = `– *anime ᴍᴇɴᴜ*

┌
│◦ *.otakudesdetails*
│◦ *.otaksearch*
│◦ *.kcrandom*
│◦ *.whatanime*
│◦ *.kitsune*
│◦ *.husbando*
└`
await reply(Styles(menuu));
}
break

case "storemenu": {
menuu = `– *Srtore menu*

┌
│◦ *.batal*
│◦ *.proses*
│◦ *.done*
└`
await reply(Styles(menuu));
}
break

case "stickermenu": {
menuu = `– *sticker ᴍᴇɴᴜ*

┌
│◦ *.sticker*
│◦ *.stickergif*
│◦ *.qc*
│◦ *.toimage*
└`
await reply(Styles(menuu));
}
break
case "toolsmenu": {
menuu = `– *tools ᴍᴇɴᴜ*

┌
│◦ *.tovn*
│◦ *.toaudio*
│◦ *.toimage*
│◦ *.hdr*
│◦ *.tomp3*
└`
await reply(Styles(menuu));
}
break
//=============== F E A T U R E ======================//
//GAME MENU

case 'tebakbendera':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakbendera) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
//hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 600)
}
break

case 'tebakkata':
//if(!isGroup) return onlyGroup()
if (!global.game) return reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`)
if (from in tebakkata) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
//hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 600)
}
break

case 'susunkata':
//if(!isGroup) return onlyGroup()
if (!global.game) return m.reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in susunkata) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
//hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[from]) m.reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 600)
}
break



//ANIME MENU
case 'otakudesdetails': case 'detailsanime': case 'animedetail': {
async function otakudesDetails(link) {
    try {
        const zaenishi = await axios.get(link);
        const $ = cheerio.load(zaenishi.data);
        const hasil = [];

        const judul = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Judul')).parent().text().trim().split(': ')[1];
        const skor = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Skor')).parent().text().trim().split(': ')[1];
        const produser = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Produser')).parent().text().trim().split(': ')[1];
        const tipe = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Tipe')).parent().text().trim().split(': ')[1];
        const status = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Status')).parent().text().trim().split(': ')[1];
        const studio = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Studio')).parent().text().trim().split(': ')[1];
        const rilis = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Tanggal Rilis')).parent().text().trim().split(': ')[1];
        const episode = $('div.infozingle span b').filter((index, element) => $(element).text().includes('Total Episode')).parent().text().trim().split(': ')[1];
        let sinopsis = '';
        $('.sinopc p').each((index, element) => {
            sinopsis += $(element).text().trim() + '\n';
        });
        const genreArray = [];
        $('div.infozingle span b').filter((index, element) => $(element).text().includes('Genre')).siblings('a').each((index, element) => {
            genreArray.push($(element).text().trim());
        });
        const genre = genreArray.join(', ');

        hasil.push({
            judul: judul,
            skor: skor,
            produser: produser,
            tipe: tipe,
            status: status,
            studio: studio,
            rilis: rilis,
            episode: episode,
            genre: genre,
            sinopsis: sinopsis.trim()
        });

        return hasil;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

if (!text) return reply(`Ikuti contoh penggunaan ini: .${command} https://otakudesu.cloud....`)
let response = await otakudesDetails(text)
if (response.length === 0) return reply(`Gagal Mendapatkan Respon Api.`)
reply(`*📰 Anime Details OtakudesuDetails*
Judul: ${response[0].judul}
Skor: ${response[0].skor}
Produser: ${response[0].produser}
Tipe: ${response[0].tipe}
Status: ${response[0].status}
Studio: ${response[0].studio}
Rilis: ${response[0].rilis}
Episode: ${response[0].episode}
Genre: ${response[0].genre}

*📖 Sinopsis:*\n\n${response[0].sinopsis}`)
}
break//detail anime
case 'whatanime': {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || '';
 if (/image/.test(mime)) {
 Shino.sendMessage(m.chat, {
 react: {
 text: '🕒',
 key: m.key,
 }
 });
const media2 = await Shino.downloadAndSaveMediaMessage(q)
const { TelegraPh } = require('./lib/uploader')
const anu = await TelegraPh(media2)
 try {
 let api = `https://api.trace.moe/search?anilistInfo&url=${anu}`;
 let { data } = await axios.get(api);
 let anime = data.result[0].anilist;
 let episode = data.result[0].episode;
 let similarity = data.result[0].similarity;
 let at = new Date(data.result[0].from * 1000).toISOString().substr(11, 12) + ' - ' + new Date(data.result[0].to * 1000).toISOString().substr(11, 12);
 let malId = anime.idMal;
 let anilistId = anime.id;
 let titleRomaji = anime.title.romaji;
 let titleNative = anime.title.native;
 let caption = `• *Title:* ${titleRomaji} (${titleNative})
• *Episode:* ${episode}
• *Similarity:* ${(similarity * 100).toFixed(2)}%
• *At:* ${at}`;
 Shino.sendMessage(m.chat, { image: { url: anu }, caption: caption },{quoted:m})
 } catch (e) {
 console.log(e);
 reply(' Error!')
 }
 } else {
 reply('Please reply to the image')
 }
}
break
case 'otakudessearch': case 'animes': case 'otaksearch': {
const axios = require('axios');
const cheerio = require('cheerio');

async function anu(search) {
 const url = 'https://otakudesu.cloud/?s=' + search + '&post_type=anime';

 try {
   let response = await axios.get(url);
   const $ = cheerio.load(response.data);

   const results = [];

   $('ul.chivsrc li').each((index, element) => {
     const title = $(element).find('h2 a').text();
     const link = $(element).find('h2 a').attr('href');
     const image = $(element).find('img').attr('src');
     const genres = [];

     $(element).find('.set a').each((i, el) => {
       genres.push($(el).text());
     });

     const status = $(element).find('.set:contains("Status")').text().replace('Status : ', '');
     const rating = $(element).find('.set:contains("Rating")').text().replace('Rating : ', '');

     results.push({ title, link, image, genres, status, rating });
   });

   return results;
 } catch (error) {
   console.error("Error fetching data:", error);
 }
}

async function ah(search) {
  let ngent = '';
  try {
    let response = await anu(search);
    let genre = [];
    response[0].genres.forEach((element, index) => {
      genre.push(`(${element})`);
    });
    ngent = `*👀 ANIME SEARCH*

\`nama:\` ${response[0].title}
\`link:\` ${response[0].link}
\`image:\` ${response[0].image}
\`genres:\` ${genre.join(', ')}
\`status:\` ${response[0].status}
\`rating:\` ${response[0].rating}`;
  } catch (error) {
    console.error(error);
  }
  return ngent;
}

if (!text) return reply('Penggunaan: .otakudesSearch shinigami')
ah(text).then(response => {
reply(response)
})
}
break//search anime
case 'kcrandom': case 'kcimg': {
async function animeRandom() {
 try {
 let response = await axios.get('https://konachan.net/post?tags=order%3Arandom');
 let $ = cheerio.load(response.data);
 let hasil = {
 status: 200,
 creator: 'kuze',
 imageUrl: []
 };
 $('#post-list-posts a.directlink.largeimg').each((index, element) => {
 hasil.imageUrl.push( $(element).attr('href') );
 });
 return hasil;
 } catch (error) {
 console.error('Error:', error);
return error
 }
}
Shino.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
try {
let response = await animeRandom()
let random = pickRandom(response.imageUrl)

Shino.sendMessage(m.chat, { image: { url: random }, caption: 'Random Image Anime\n\n*Powered By konachan.net*' }, { quoted: m })
} catch (e) {
reply(e)
}
}
break//random anime hd

//FUN MENU
case 'tolol':
case 'goblog':
case 'goblok':
case 'idiot':
case 'gay':
case 'jomok':
case 'bajingan':
case 'munafik':
case 'kontol':
case 'yatim':
case 'poke':
case 'pembokep':
case 'hitam':
case 'jawa':
case 'wibu':
case 'stress':
case 'miskin':
case 'cantik':
case 'manis':
case 'babi':
case 'ganteng':
case 'cina':
case 'atheis':
case 'papua':
case 'nigga':
case 'pengentot':
case 'seksi':
case 'kawai':
case 'tercindo':
case 'fembokef':
case 'pengocok':
case 'cabul':
case 'fuckboy':
case 'playboy':
case 'sange':
case 'sangean':
case 'hot': {
if (!m.isGroup) return reply(mess.group)
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
Shino.sendMessage(m.chat,
{ text: `Orang ${command} disini adalah @${org.split('@')[0]}`,
contextInfo:{
mentionedJid:[org],
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": false,
"containsAutoReply": true,
"title": `${command} yang di tag`,
"body": `hanya hiburan (ー_ー゛)`,
"previewType": "PHOTO",
"thumbnail": ppnyauser,
"sourceUrl": `https://whatsapp.com/channel`}}},
{ quoted: m})
}
break
case 'cekkhodam': {
if (!text) return m.reply("ketik nama lu anjg")
  
	const khodam = pickRandom([
	  "Kaleng Cat Avian",
	  "Pipa Rucika",
	  "Botol Tupperware",
	  "Badut Mixue",
	  "Sabun GIV",
	  "Sandal Swallow",
	  "Jarjit",
	  "Ijat",
	  "Fizi",
	  "Mail",
	  "Ehsan",
	  "Upin",
	  "Ipin",
	  "sungut lele",
	  "Tok Dalang",
	  "Opah",
	  "Opet",
	  "Alul",
	  "Pak Vinsen",
	  "Maman Resing",
	  "Pak RT",
	  "Admin ETI",
	  "Bung Towel",
	  "Lumpia Basah",
	  "Martabak Manis",
	  "Baso Tahu",
	  "Tahu Gejrot",
	  "Dimsum",
	  "Seblak Ceker",
	  "Telor Gulung",
	  "Tahu Aci",
	  "Tempe Mendoan",
	  "Nasi Kucing",
	  "Kue Cubit",
	  "Tahu Sumedang",
	  "Nasi Uduk",
	  "Wedang Ronde",
	  "Kerupuk Udang",
	  "Cilok",
	  "Cilung",
	  "Kue Sus",
	  "Jasuke",
	  "Seblak Makaroni",
	  "Sate Padang",
	  "Sayur Asem",
	  "Kromboloni",
	  "Marmut Pink",
	  "Belalang Mullet",
	  "Kucing Oren",
	  "Lintah Terbang",
	  "Singa Paddle Pop",
	  "Macan Cisewu",
	  "Vario Mber",
	  "Beat Mber",
	  "Supra Geter",
	  "Oli Samping",
	  "Knalpot Racing",
	  "Jus Stroberi",
	  "Jus Alpukat",
	  "Alpukat Kocok",
	  "Es Kopyor",
	  "Es Jeruk",
	  "Cappucino Cincau",
	  "Jasjus Melon",
	  "Teajus Apel",
	  "Pop ice Mangga",
	  "Teajus Gulabatu",
	  "Air Selokan",
	  "Air Kobokan",
	  "TV Tabung",
	  "Keran Air",
	  "Tutup Panci",
	  "Kotak Amal",
	  "Tutup Termos",
	  "Tutup Botol",
	  "Kresek Item",
	  "Kepala Casan",
	  "Ban Serep",
	  "Kursi Lipat",
	  "Kursi Goyang",
	  "Kulit Pisang",
	  "Warung Madura",
	  "Gorong-gorong",
	])
  
	const response = `
╭━━━━°「 *Cekkodam* 」°
┃
┊• *Nama :* ${text}
┃• *Khodam :* ${khodam}
╰═┅═━––––––๑
	  `
  
	m.reply(response)
  }
break




//NFSW MENU
case 'bokep': case 'hentaivid2': {
if (!isPrem) return m.reply(mess.premium)
reply(mess.wait)
let sbe = await hentaivid()
let cejd = sbe[Math.floor(Math.random(), sbe.length)]
Shino.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break

case 'randomdouyin': {
  let pro = await (await fetch('https://aemt.me/asupandouyin')).json()
  let slu = pro.url
  Shino.sendMessage(m.chat,{video:{url: slu}, caption: 'keren😹'},{quoted: m})
}
break
case 'pornhubvid':
if (!isPrem) return m.reply(mess.premium)
if (!text) return m.reply("Input query")
try {
let res = await searchVideo(text)
let teks = res.map((item, index) => {
    return `*[ RESULT ${index + 1} ]*
*Link :* ${item.link}
*Title :* ${item.title}
*Uploader :* ${item.uploader}
*Views :* ${item.views}
*Duration :* ${item.duration}
`
}).filter(v => v).join("\n")
await reply(teks)
} catch (e) {
await m.reply(eror)
}
break
case 'hentaivid': case 'hentaivideo': {
if (!isPrem) return m.reply(mess.premium)
reply('cotto matte kudasaii')
const { hentai } = require('./lib/scraperr.js')
let anu = await hentai()
let result912 = anu[Math.floor(Math.random(), anu.length)]
Shino.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Title : ${result912.title}\nCategory : ${result912.category}\nMimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
}
break
case 'hentaisearch':
if (!text) throw '*[ Wrong ]* please input query'
reply(mess.wait)
let searchResults = await searchHentai(text)
var memek = searchResults.result.map((v, i) => `*${i + 1}.* ${v.title}
Views : ${v.views}
Link : ${v.url}`).join('\n')
let randomThumbnail
if (searchResults.result.length > 0) {
let randomIndex = Math.floor(Math.random() * searchResults.result.length)
randomThumbnail = searchResults.result[randomIndex].thumbnail
Shino.sendMessage(from, {image: {url:randomThumbnail}, caption:memek},{quoted: m })
} else {
//randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png'
elorr = '*[ Error ]* hasil tidak ada'
}
break 
case 'nwaifu' :
if (!isPrem) return m.reply(mess.premium)
m.reply(mess.wait)
  let waifudd3 = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
Shino.sendMessage(m.chat, { caption: "woylah😹", image: { url:waifudd3.data.url } }, { quoted: m })
break
case 'hneko' :
if (!isPrem) return m.reply(mess.premium)
m.reply(mess.wait)
   let waifudd2 = await axios.get(`https://waifu.pics/api/nsfw/neko`)
Shino.sendMessage(m.chat, { caption: "woylah😹", image: { url:waifudd2.data.url } }, { quoted: m })
break
case 'gasm':
if (!isPrem) return m.reply(mess.premium)
m.reply(mess.wait)				
 let waifudd4 = await axios.get(`https://nekos.life/api/v2/img/${command}`)
Shino.sendMessage(m.chat, { caption: "woylah😹", image: { url:waifudd4.data.url } }, { quoted: m })
break
case 'cosplay':
if (!isPrem) return m.reply(mess.premium)
  Shino.sendFile(m.chat, `https://fantox-cosplay-api.onrender.com/`, 'p', `njir🗿`, m)
break
case 'husbando': case 'kitsune': {
if (!isPrem) return m.reply(mess.premium)
  let hus = await (await fetch(`https://nekos.best/api/v2/${command}`)).json();
  let ban = hus.results[0];
  Shino.sendMessage(m.chat, { image: { url: ban.url }, caption: 'boke😹' }, { quoted: m });
}
break



//OWNER MENU
case 'backup':
        {
          if (!isCreator) return reply(mess.owner)
     await reply("Sabar Mas Lagi Backup!!!");
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "haikal" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
          const exec = await execSync(`zip -r ZenDev.zip ${ls.join(" ")}`);
          await Shino.sendMessage(
            m.chat,
            {
              document: await fs.readFileSync("./ZenDev.zip"),
              mimetype: "application/zip",
              fileName: "cpanelZenDev.zip",
            },
            { quoted: fcall }
          );
          await execSync("rm -rf ZenDev.zip");
        }
        break
case 'getcase': {

const getCase = (cases) => {

            return "case "+`'${cases}'`+fs.readFileSync("./Shino.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isCreator) return reply('ngapain')

                if (!q) return reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }
}
        break 
case 'autobio': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "[ *ZenDevBotz – New Version* ]"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".biochange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".biochange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await Shino.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'biochange':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'enable') {
                    autobio = true
                    reply(`Berhasil Mengubah AutoBio Ke ${q}`)
                } else if (q == 'disable') {
                    autobio = false
                    reply(`Berhasil Mengubah AutoBio Ke ${q}`)
                }
                break   
case 'readchange':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} enable/disable`)
if (q === 'enable') {
autoread = true
m.reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'disable') {
autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
break
case 'autoread': {
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: ''
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "[ *ZenDevBotz – New Version* ]"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: Styles(`click button *enable* to enable autoread\nclick button *disable* to disable autoread`),
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".readchange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".readchange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await Shino.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'd': case 'del': case 'delete': case 'hapus':
if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
Shino.sendMessage(from, {delete: {remoteJid: from, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
break
case 'public': {
if (!isCreator) return reply(mess.owner) 
Shino.public = true
reply('*_Sukse Change To Public_*')
}
break
case 'self': {
if (!isCreator) return reply(mess.owner) 
Shino.public = false
reply('*_Sukses Change To Self_*')
}
break
        case "upsw": {
          if (!isCreator) return reply("Owners only");
          if (args.length < 1) return reply("perihal apa?");
          if (/image/.test(mime)) {
            let imgSw = await Shino.downloadAndSaveMediaMessage(quoted);
            await Shino.sendMessage(
              "status@broadcast",
              { image: { url: imgSw }, caption: q },
              { statusJidList: pendaftar },
            );
            reply("Udah Hiyuu, Liat Aja Kalo Ga Percaya 😋");
          } else if (/video/.test(mime)) {
            let VidSw = await Shino.downloadAndSaveMediaMessage(quoted);
            await Shino.sendMessage(
              "status@broadcast",
              { video: { url: VidSw }, caption: q },
              { statusJidList: pendaftar },
            );
            reply("Done");
          } else if (/audio/.test(mime)) {
            let VnSw = await Shino.downloadAndSaveMediaMessage(quoted);
            await Shino.sendMessage(
              "status@broadcast",
              { audio: { url: VnSw }, mimetype: "audio/mp4", ptt: true },
              { backgroundColor: "#d3d3d3", statusJidList: pendaftar }, // #d3d3d3
            );
            reply("Done");
          } else if (q) {
            Shino.sendMessage(
              "status@broadcast",
              { text: q },
              {
                backgroundColor: "#FF000000",
                font: 3,
                statusJidList: pendaftar,
              },
            );
          } else {
            reply(
              "Replay Media Jika Mau Dengan Caption Ketik .upsw caption",
            );
          }
        }
        break;
        
        case "getsw": {
          if (m.quoted?.chat != "status@broadcast")
            return reply(`Reply Status WhatsApp !`);
          let buffer = await m.quoted.download();
          await Shino.sendFile(
            m.chat,
            buffer,
            "",
            m.quoted.text || "",
            null,
            false,
            { quoted: m },
          ).catch((_) => reply(m.quoted.text || ""));
        }
        break;

      case "listsw": {
          if (!isCreator) return reply("Perihal Apa?")
          if (!store.messages["status@broadcast"].array.length === 0)
            throw "Gaada 1 status pun";
          let stories = store.messages["status@broadcast"].array;
          let story = stories.filter(
            (v) => v.message && v.message.protocolMessage?.type !== 0,
          );
          if (story.length === 0) throw "Status gaada";
          const result = {};
          story.forEach((obj) => {
            let participant = obj.key.participant || obj.participant;
            participant = jidNormalizedUser(
              participant === "status_me" ? Shino.user.id : participant,
            );
            if (!result[participant]) {
              result[participant] = [];
            }
            result[participant].push(obj);
          });
          let type = (mType) =>
            getContentType(mType) === "extendedTextMessage"
              ? "text"
              : getContentType(mType).replace("Message", "");
          let text = "";
          for (let id of Object.keys(result)) {
            if (!id) return;
            text += `*- ${await Shino.getName(id)}*\n`;
            text += `${result[id].map((v, i) => `${i + 1}. ${type(v.message)}`).join("\n")}\n\n`;
          }
          await reply(text.trim(), { mentions: Object.keys(result) });
        }
        break;
case 'setstatus': case 'setbiobot': case 'setbotbio': {
if (!isCreator) return reply(mess.owner)
if (!text) throw `this is a WhatsApp Bot named Darwin Bod`
let name = await Shino.updateProfileStatus(text)
reply(`Successfully changed bot bio`)
}
break
case 'getbio':
if (!isCreator) return reply(mess.owner)
if (m.quoted || q) {
let biou = (await Shino.fetchStatus(froms).catch(err => console.log(chalk.redBright('[ ERROR ]'), chalk.whiteBright(err))) || {}).status || 'Bio di private!'
reply(biou)
} else reply('Tag atau reply pesan target!')
break
case 'addowner':
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Shino.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'addprem':{
if (!isCreator) return reply(mess.owner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
} else {
var cekap = await Shino.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
}}
break
case 'delprem': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
} else {
var cekpr = await Shino.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./src/database/premium.json', JSON.stringify(premium))
reply('Sukses!')
}}
break
case 'listpremium': case 'listprem': {
if (!isCreator) return reply(mess.owner)
let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = Func.readTime(i.expired - Date.now())
txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
Shino.sendTextWithMentions(m.chat, txt, m)
}
break
case "bcimg": {
if (!isCreator) return reply(`Lu ZenDev Kah?`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await loading()
let getGroups = await Shino.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
if (/image/.test(mime)) {
media = await Shino.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Shino.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await Shino.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply(mess.owner)
await loading()
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await Shino.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
Shino.sendMessage(i, {text: `${text}`}, {quoted:fcall})
    }
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'restart':
if (!isCreator) return reply('wuuu')
reply(`_Restarting ZenDev Bot . . ._`)
await sleep(3000)
process.exit()
break

case 'delcase': {
if (!isCreator) return reply(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')

dellCase('./Shino.js', q)
reply('*Dellcase Successfully*\n\n© Dellcase By ZenDevdev')
}
break
case 'addcase': {
 if (!isCreator) return reply('lu sapa asu')
 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'Shino.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break


case "listgc":{
if (!isCreator) return (`Ngapain ? Khusus ZenDev Offcial Aja !!`)
let getGroups = await Shino.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Shino.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break



//MAIN MENU


case 'ai': case 'openai': {
if (!text) return reply(`${command} Apa itu Coding`)
            reply(mess.search)
            let yanz = await fetchJson(`https://aemt.me/v2/gpt4?text=${text}`)
Shino.sendMessage(m.chat, {
text: yanz.result,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `O P E N - A I`,
body: '',
thumbnailUrl: "https://telegra.ph/file/f47d75d0d4827356a526d.jpg",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
            }
break
case 'ping': {
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
rin = `*Runtime :* _${runtime(process.uptime())}_\n*Response Speed :* _${latensi.toFixed(4)} Second_\n*Ram :* _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_`
await Shino.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: Styles(rin),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

case 'owner': case 'crator':{
Shino.sendContact(from, global.owner, m)
}
break
case 'totalfitur': {
reply(`${totalFitur()} Features`)
}
break




//SEARCH MENU
case 'getmusic': {
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
downloadMp3(urls[text - 1])
}
break
case 'getvideo': 
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
const alicevidoh2 = require('./lib/ytdl2')
let quality = args[1] ? args[1] : '360p'
const vid2=await alicevidoh2.mp4(urls[text - 1], quality)
const ytc2=`*Tittle:* ${vid2.title}
*Date:* ${vid2.date}
*Duration:* ${vid2.duration}
*Quality:* ${vid2.quality}`
await Shino.sendMessage(m.chat,{
 video: {url:vid2.videoUrl},
 caption: ytc2
},)
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let search = await yts(text)
let teks = '*YouTube Search*\n\nResult From '+text+'\nketik *getmusic* untuk mengambil mp3 dan *getvideo* untuk mp4\ngunakan dengan nomor urutan, contoh *getmusic 1*\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No Urutan : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n─────────────────\n`
}
Shino.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
}
break
case 'couple': case'ppcp':{
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
reply(mess.wait)
let random = anu[Math.floor(Math.random() * anu.length)]
Shino.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Male`,},{quoted: m,})
Shino.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
break
case 'pinterest': case 'pin': {
  if (!text) return m.reply(`Enter Query`);
  //try {
  await m.reply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: Shino.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: "𝐒𝐡𝐢𝐧𝐨𝐌𝐃"
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"url","Klik disini":"${pus}","merchant_url":"${pus}"}`
          }
        ]
      })
    });
  }

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hai\nDibawah ini Adalah hasil dari Pencarian Kamu'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "create by 𝐒𝐡𝐢𝐧𝐨𝐌𝐃"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await Shino.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  });
  
}
break
case 'play': {
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let wait = await Shino.sendMessage(m.chat, {text: `_Searching.. [ ${text} ] 🔍_`}, {quoted: fcall, ephemeralExpiration: 86400})
let search = await yts(`${text}`)

let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./.npm/${search.all[0].views}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
await Shino.sendMessage(m.chat, {text: `_Mengirim.. [ ${text} ] 🔍_`, edit: wait.key }, {quoted: m, ephemeralExpiration: 86400});
Shino.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `${search.all[0].title}`, body: `Views : ${search.all[0].views}`, thumbnailUrl: res12?.thumbnail, mediaType: 2, mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, renderLargerThumbnail: true }}},)
   })
const alicevidoh = require('./lib/ytdl2')
const vid=await alicevidoh.mp4(`${search.videos[0].url}`)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
await Shino.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},)
}
Shino.sendMessage(m.chat, {react: {text: '🎧', key: m.key}})
break





//tools menu 
case 'tovn':{
//if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
Shino.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
}
break
case 'tomp3': {
//if (!isGroup) return onlyGroup()
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply video/audio dengan caption ${prefix + command}`
if (!quoted) throw `Reply video/audio dengan caption ${prefix + command}`
await loading()
var dl = await m.quoted.download()
Shino.sendMessage(from, {audio: dl, mimetype:'audio/mpeg', ptt:false, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: 'https://youtube.com/@bg-darwin',
title: `Converter mp3`,
sourceUrl: `${global.saluran}`,
thumbnail: ppnyauser
}
}})
}
break
case 'hdr': {
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			Shino.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: fcall})
			}
			break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
const { exec, spawn, execSync } = require('child_process')
let media = await Shino.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Shino.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break







//sticker
case 'qc': {
if (!q) return reply(`📌Example: ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await Shino.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
Shino.sendImageAsSticker(m.chat, buffer, fcall, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await Shino.sendImageAsStickerAV(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await Shino.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'qc': {
if (!q) return reply(`📌Example: ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await Shino.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
Shino.sendImageAsSticker(m.chat, buffer, fcall, { packname: `${global.packname}`, author: `${global.author}`})
}
break




case 'tourl': {
if (isBan) return reply2(mess.ban)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await Shino.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//================ D O W N L O A D ==================//
case 'ytmp3': case 'youtubemp3': {
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
await loading ()
reply(mess.search)
downloadMp3(text)
}
break
case "ytreels": case "ytmp4":{
if (!text) return reply('Masukan Link Nya!!!')
await loading ()
reply(mess.search)
downloadMp4(text)
}
break
case 'tt': {
if (!text) return reply(`masukan link tiktoknya`)
let old = new Date()
const dlt = require('./lib/tiktokdl.js')
let tiktuk = await dlt.DownloadTiktok(text)
if (tiktuk.result.images) {
tiktuk.result.images.forEach(async (k) => {
await Shino.sendMessage(m.chat, { image: { url: k }}, { quoted: fcall });
})
} else {
Shino.sendMessage(m.chat, { video: { url: tiktuk.result.video }, caption: `${gris}[ T I K T O K - D O W N L O A D E R ]${gris}\n\n${hiasan}*Author* : ${tiktuk.result.author.nickname}\n${hiasan}*Desc* : ${tiktuk.result.desc}\n${hiasan}*Statistic* : ${tiktuk.result.statistic}\n${hiasan}*Fetching* : ${((new Date - old) * 1)} ms\n\n` }, { quoted: fcall })
}
}
break
case 'instagram': {
if (!text) throw `Example : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`
await loading ()
reply(mess.search)
let iganu = await igdl2(text)
Shino.sendMessage(m.chat, { video: { url: iganu[0].url }, caption: mess.success })
}
break
case 'spotify': {
if (!text) return reply(`Contoh : ${prefix + command} dandelion`);
let api = await fetchJson(`https://api.junn4.my.id/search/spotify?query=${text}`);
const hasil = `乂 *S P O T I F Y*

*Title*: ${api.data[0].title}
*Duration*: ${api.data[0].duration}
*Popular*: ${api.data[0].popularity}
*Url*: ${api.data[0].url}
`
Shino.sendMessage(m.chat, {text: hasil, contextInfo:
{
"externalAdReply": {
"title": '𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝙈𝙪𝙨𝙞𝙘',
"body": `I am ZenDev`,
"showAdAttribution": true,
"mediaType": 1,
"sourceUrl": '',
"thumbnailUrl": 'https://telegra.ph/file/50afb355fac55370492de.jpg',
"renderLargerThumbnail": true
}
}}, {quoted: fcall})
const spodl = await fetchJson(`https://api.junn4.my.id/download/spotify?url=${api.data[0].url}`) 
const spoDl = spodl.data.download
Shino.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝙈𝙪𝙨𝙞𝙘`,
body: "",
thumbnailUrl: 'https://telegra.ph/file/d8283bf6f948413ad0e62.jpg', 
sourceUrl: hariini,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: fcall
})
}
break
//================== S T O R E =======================//
case 'tunda':
text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
await Shino.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxpending,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'proses':
text_proses = `「 𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦 」

𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️`
await Shino.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_proses,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'batal':
text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
await Shino.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxbatal,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'done': case 'd': {
if (!isCreator) return reply(`Njirr Lu siapa Cuk`)
let s = text.split(',')
let barang = s[0]
let nominal = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal`)
if (!barang) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} vipies,60000`)
if (!nominal) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} panel,1000`)
text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

📦 Barang : ${barang}
💸 Nominal : ${nominal}
📆 Tanggal : ${tanggal2}
🕰️ Waktu : ${time}
✨ Status : Berhasil

𝗧𝗲𝗿𝗶𝗺𝗮𝗸𝗮𝘀𝗶𝗵 𝗧𝗲𝗹𝗮𝗵 𝗢𝗿𝗱𝗲𝗿 𝗗𝗶 ZEN DEV
𝗗𝗶 𝗧𝘂𝗻𝗴𝗴𝘂 𝗢𝗿𝗱𝗲𝗿𝗮𝗻 𝗦𝗲𝗹𝗮𝗻𝗷𝘂𝘁𝗻𝘆𝗮☺️`
await Shino.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: `${nominal}*100000`,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_done,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break









//=================== G R O U P =====================//
case 'getpp':
if (m.quoted || q) {
let pporang = await Shino.profilePictureUrl(froms, 'image').catch(_ => reply('Profile di private!'))
if (pporang) return Shino.sendMessage(from, {image: {url:pporang}, caption: 'Nih!'}, {quoted:m})
} else reply('Tag atau reply pesan target!')
break
case 'infogroup': case 'infogc':{
//if (!isGroup) return onlyGc()
try {
let meta = await (await Shino.groupMetadata(m.chat))
let admin = meta.participants.filter(p => p.admin)
let listAdmin = admin.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
let pic = await getBuffer(await Shino.profilePictureUrl(m.chat, 'image').catch(_ => ppnyauser))
let caption = `乂 *G R O U P - I N F O*\n
◦ *Name* : ${meta.subject}
◦ *ID* : ${meta.id}
◦ *Owner* : ${meta.owner ? '@' + meta.owner.split('@')[0] : m.chat.match('-') ? '@' + m.chat.split('-')[0] : ''}
◦ *Created* : ${moment(meta.creation * 1000).format('DD/MM/YY HH:mm:ss')}
◦ *Member* : ${meta.participants.length}
◦ *Admin* : ${admin.length}
◦ *Kirim pesan* : ${meta.announce ? 'Hanya admin' : 'Semua peserta'}
◦ *Edit info grup* : ${meta.restrict ? 'Hanya admin' : 'Semua peserta'}
◦ *List Admin* :\n${listAdmin}\n
◦ *Deskripsi grup* :\n${meta.desc}`.trim()
sendMessageModify(m.chat, caption, m, {
thumbUrl: ppnyauser, 
largeThumb: true, 
thumbnail: pic
})
} catch (e) {
console.log(e)
Shino.sendText(m.chat, util.format(e), m)
}
}
break
case 'grup': case 'gc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'close'){
await Shino.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`*GROUP TELAH DI TUTUP!*`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await Shino.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`*GROUP TELAH DI BUKA!*`)).catch((err) => m.reply(jsonformat(err)))
} else {
wiwin1 = "Choose The Poll"
await delay(500)
await Shino.sendPoll(from, wiwin1, [`grup open`,`grup close`])
 }
}
break
case 'setdesc':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
if (!q) return reply(`*Example : .gcname kuze*`)
await Shino.groupUpdateDescription(from, q).then(res => {reply(m.ok)}).catch(() => reply(m.error.api))
break
case 'setgrupname': case 'gcname':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
if (!q) return reply(`Example : .gcname kontol`)
await Shino.groupUpdateSubject(from, q).then(res => {reply(m.ok)}).catch(() => reply(m.error.api))
break
case 'setppgc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await Shino.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await Shino.query({
tag: 'iq',
attrs: {
to: from,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses\n\n`)
} else {
var memeg = await Shino.updateProfilePicture(from, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses\n\n`)
}
}
break
case 'totag': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
Shino.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
let response = await Shino.groupInviteCode(from)
Shino.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'resetlinkgc':
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
Shino.groupRevokeInvite(from)
break
case 'sendlinkgc': {
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await Shino.groupInviteCode(from)
Shino.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
break
case 'd': case 'del': case 'delete': case 'hapus':
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
Shino.sendMessage(from, {delete: {remoteJid: from, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Shino.groupParticipantsUpdate(from, [users], 'remove')
reply(mess.done)
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Shino.groupParticipantsUpdate(from, [users], 'add')
reply(mess.done)
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Shino.groupParticipantsUpdate(from, [users], 'promote')
reply(mess.done)
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Shino.groupParticipantsUpdate(from, [users], 'demote')
reply(mess.done)
}
break
case 'hidetag': {
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
await loading()
Shino.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:fcall})
}
break
case 'tagall': {
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return
await loading()
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
Shino.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:fcall })
}
break

case 'pushkontak2':{
if (!isCreator) return reply(mess.owner)
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return reply(`Example: ${prefix + command} idgc|pesan`)
let metaDATA = await Shino.groupMetadata(idgc).catch((e) => reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
reply(`*_Sedang Push ID..._*\n*_Mengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 3} detik_*`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
Shino.sendMessage(getDATA[i], { text: pesan });
count--;
sentCount++;
if (count === 0) {
reply(`*_Semua pesan telah dikirim!:_* *_✓_*\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
}
}, i * 3000);
}
}
break;
case 'pushkontak':{
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(`di group coy`)
if (!text) return reply(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
reply(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let geek of mem) {
await sleep(3000)
Shino.sendMessage(geek, {text: `${teksnye}`}, {quoted:fcall})
}
reply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break
case "cekidgc": {
if (!isCreator) return reply(mess.premium)
let getGroups = await Shino.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Shino.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case 'getidgc':
if (!m.isGroup) return reply('kusus Group')
ewe = `${m.chat}`
await Shino.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'join': {
if (!isCreator) return reply(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Shino.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'addgc':

    if (!m.isGroup) return reply(mess.group)         

if (!isCreator) return reply(`khusus Creator`)

ntilink.push(m.chat)
        fs.writeFileSync('./database/idgroup.json', JSON.stringify(ntilink))

reply(`${command} sukses`)

           break
case 'delgc':

  if (!isCreator) return reply(`khusus Creator`)

    if (!m.isGroup) return reply(mess.group)

var ini = ntilink.indexOf(m.chat)

ntilink.splice(ini, 1)

fs.writeFileSync('./database/idgruop.json', JSON.stringify(ntilink))

reply(`${command} sukses`)

break
//=================================================//
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy) && !isCmd) {
reply(`*Waalaikummussalam warahmatullahi wabarokatuh*\n\n\n_📚 Baca yang dibawah ya!_
"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT`)
}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
Shino.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
