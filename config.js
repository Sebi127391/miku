let fs = require('fs')
global.manager = JSON.parse(fs.readFileSync('./src/manager.json'))
global.sup = JSON.parse(fs.readFileSync('./src/Supporter.json'))
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to folder /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?
global.BotName = "Chisato"
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'apikeylu',
  'https://melcanz.com': 'apikeylu',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apikeylu',
  'https://pencarikode.xyz': 'apikeylu',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'apikeylu',
  'https://api.adiofficial.xyz': 'apikey lu'
}
global.multiplier = 999 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
    let emot = {
      tarjeta: '💳 Banesco',
      level: '🧬 Nivel',
      limit: '💎 Diamante',
      bitcoins: '🏵️ BitCoins',
      dolares: '💵 Dolares',
      exp: '⚡ Experiencia',
      bank: '🏦 Banco',
      diamond: '💎 Diamante',
      health: '❤️ Salud',
      kyubi: '🌀 Magia',
      joincount: '☯️ Token',
      emerald: '💚 Esmeralda',
      stamina: '✨ Energía',
      role: '💪 Rango',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp',
      gold: '👑 Oro',
      trash: '🗑 Basura',
      crystal: '🔮 Cristal',
      intelligence: '🧠 Inteligencia',
      string: '🕸️ Cuerda',
      keygold: '🔑 Llave de Oro',
      keyiron: '🗝️ Llave de Hierro',
      emas: '🪅 Piñata',
      fishingrod: '🎣 Caña de Pescar',
      gems: '🍀 Gemas',
      magicwand: '⚕️ Varita Mágica',
      mana: '🪄 Hechizo',
      agility: '🤸‍♂️ Agilidad',
      darkcrystal: '♠️ Cristal Oscuro',
      iron: '⛓️ Hierro',
      rock: '🪨 Roca',
      potion: '🥤 Poción',
      superior: '💼 Superior',
      robo: '🚔 Robo',
      upgrader: '🧰 Aumentar Mejora',
      wood: '🪵 Madera',
      strength: '🦹‍ ♀️ Fuerza',
      arc: '🏹 Arco',
      armor: '🥼 Armadura',
      bow: '🏹 Super Arco',
      pickaxe: '⛏️ Pico',
      sword: '⚔️ Espada',
      common: '📦 Caja Común',
      uncoommon: '🥡 Caja Poco Común',
      mythic: '🗳️ Caja Mítico',
      legendary: '🎁 Caja Legendaria',
      petFood: '🍖 Alimento para Mascota',
      pet: '🍱 Caja para Mascota',
      bibitanggur: '🍇 Semilla de Uva',
      bibitapel: '🍎 Semilla de Manzana',
      bibitjeruk: '🍊 Semillas de naranja',
      bibitmangga: '🥭 Semilla de Mango',
      bibitpisang: '🍌 Semillas de Plátano',
      ayam: '🐓 Pollo',
      babi: '🐖 Puerco',
      Jabali: '🐗 Jabali',
      bull: '🐃 Toro',    
      buaya: '🐊 Cocodrilo',    
      cat: '🐈 Gato',      
      centaur: '🐐 Centauro',
      chicken: '🐓 Pollo',
      cow: '🐄 Vaca', 
      dog: '🐕 Perro',
      dragon: '🐉 Dragón',
      elephant: '🐘 Elefante',
      fox: '🦊 Zorro',
      giraffe: '🦒 Jirafa',
      griffin: '🦅 Ave',
      horse: '🐎 Caballo',
      kambing: '🐐 Cabra',
      kerbau: '🐃 Búfalo',
      lion: '🦁 León',
      monyet: '🐒 Mono',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente',
      phonix: '🕊️ Fénix',
      rhinoceros: '🦏 Rinoceronte',
      wolf: '🐺 Lobo',
      tiger: '🐅 Tigre',
      cumi: '🦑 Calamar',
      udang: '🦐 Camarón',
      ikan: '🐟 Pez',
      fideos: '🍝 Fideos',
      ramuan: '🧪 Ingrediente NOVA',
      knife: '🔪 Cuchillo'
    }
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}
global.rpgg = { //Solo emojis 
emoticon(string) {
string = string.toLowerCase()
    let emott = {
      tarjeta: '💳 Banesco',
      level: '🧬',
      limit: '💎',
      bitcoins: '🏵️',
      dolares: '💵 Dolares',
      exp: '⚡',
      bank: '🏦',
      diamond: '💎+',
      health: '❤️',
      kyubi: '🌀',
      joincount: '☯️',
      emerald: '💚',
      stamina: '✨',
      role: '💪',
      premium: '🎟️',
      pointxp: '📧',
      gold: '👑',
      trash: '🗑',
      crystal: '🔮',
      intelligence: '🧠',
      string: '🕸️',
      keygold: '🔑',
      keyiron: '🗝️',
      emas: '🪅',
      fishingrod: '🎣',
      gems: '🍀',
      magicwand: '⚕️',
      mana: '🪄',
      agility: '🤸‍♂️',
      darkcrystal: '♠️',
      iron: '⛓️',
      rock: '🪨',
      potion: '🥤',
      superior: '💼',
      robo: '🚔',
      upgrader: '🧰',
      wood: '🪵',
      strength: '🦹‍ ♀️',
      arc: '🏹',
      armor: '🥼',
      bow: '🏹',
      pickaxe: '⛏️',
      sword: '⚔️',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      legendary: '🎁',
      petFood: '🍖',
      pet: '🍱',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      ayam: '🐓',
      babi: '🐖',
      Jabali: '🐗',
      bull: '🐃',    
      buaya: '🐊',    
      cat: '🐈',      
      centaur: '🐐',
      chicken: '🐓',
      cow: '🐄', 
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      fox: '🦊',
      giraffe: '🦒',
      griffin: '🦅', 
      horse: '🐎',
      kambing: '🐐',
      kerbau: '🐃',
      lion: '🦁',
      monyet: '🐒',
      panda: '🐼',
      snake: '🐍',
      phonix: '🕊️',
      rhinoceros: '🦏',
      wolf: '🐺',
      tiger: '🐅',
      cumi: '🦑',
      udang: '🦐',
      ikan: '🐟',
      fideos: '🍝',
      ramuan: '🧪',
      knife: '🔪'
    }
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emott[results[0][0]]
}}
global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase()
    let emottt = {
      tarjeta: '💳 Banesco',     
      exp: '⚡ Experiencia',
      limit: '💎 Diamante',
      bitcoins: '🏵️ BitCoins',
      dolares: '💵 Dolares',
      diamond: '💎 Diamante',
      joincount: '☯️ Token',
      emerald: '💚 Esmeralda',
      berlian: '♦️ Joya',
      kyubi: '🌀 Magia',
      gold: '👑 Oro',
      tiketcoin: '🎫 Dorrat Tickers',
      stamina: '✨ Energía',
      potion: '🥤 Poción',
      aqua: '💧 Agua',
      trash: '🗑 Basura',
      wood: '🪵 Madera',
      rock: '🪨 Roca',
      batu: '🥌 Piedra',
      string: '🕸️ Cuerda',
      iron: '⛓️ Hierro',
      coal: '⚱️ Carbón',
      botol: '🍶 Botella',
      kaleng: '🥫 Lata',
      kardus: '🪧 Cartón',
      eleksirb: '💡 Electricidad',
      emasbatang: '〽️ Barra de Oro',
      emasbiasa: '🧭 Oro Común',
      rubah: '🦊🌫️ Zorro Grande',
      sampah: '🗑🌫️ Super Basura',
      serigala: '🐺🌫️ Super Lobo',
      kayu: '🛷 Super Madera',
      sword: '⚔️ Espada',
      umpan: '🪱 Carnada', 
      healtmonster: '💵 Billetes',
      emas: '🪅 Piñata',
      pancingan: '🪝 Gancho',
      pancing: '🎣 Caña de Pescar',
      common: '📦 Caja Común',
      uncoommon: '🥡 Caja Poco Común',
      mythic: '🗳️ Caja Mítica',
      pet: '📫 Caja de Mascotas',//?
      gardenboxs: '💐 Caja de Jardinería',//?
      legendary: '🎁 Caja Legendaria',
      anggur: '🍇 Uva',
      apel: '🍎 Manzana',
      jeruk: '🍊 Naranja',
      mangga: '🥭 Mango',
      pisang: '🍌 Platano',
      bibitanggur: '🌾🍇 Semillas de uva',
      bibitapel: '🌾🍎 Semillas de manzana',
      bibitjeruk: '🌾🍊 Semillas de naranja',
      bibitmangga: '🌾🥭 Semillas de Mango',
      bibitpisang: '🌾🍌 Semillas de plátano',
      centaur: '🐐 Centauro',
      griffin: '🦅 Ave',
      kucing: '🐈 Gato',
      naga: '🐉 Dragón',
      fox: '🦊 Zorro',
      kuda: '🐎 Caballo',
      phonix: '🕊️ Fénix',
      wolf: '🐺 Lobo',
      anjing: '🐶 Perro',
      petFood: '🍖 Alimento para Mascota', //?
      makanancentaur: '🐐🥩 Comida de Centauro',
      makanangriffin: '🦅🥩 Comida de Ave',
      makanankyubi: '🌀🥩 Comida Mágica',
      makanannaga: '🐉🥩 Comida de Dragón',
      makananpet: '🍱🥩 Alimentos de mascotas',
      makananphonix: '🕊️🥩 Comida de Fénix'  
    }
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emottt[results[0][0]]
}}
global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      tarjeta: '💳',
      exp: '⚡',
      limit: '💎',
      diamond: '💎+',
      bitcoins: '🏵️',
      dolares: '💵',
      joincount: '☯️',
      emerald: '💚',
      berlian: '♦️',
      kyubi: '🌀',
      gold: '👑',
      tiketcoin: '🎫',
      stamina: '✨',
      potion: '🥤',
      aqua: '💧',
      trash: '🗑',
      wood: '🪵',
      rock: '🪨',
      batu: '🥌',
      string: '🕸️',
      iron: '⛓️',
      coal: '⚱️',
      botol: '🍶',
      kaleng: '🥫',
      kardus: '🪧',
      eleksirb: '💡',
      emasbatang: '〽️',
      emasbiasa: '🧭',
      rubah: '🦊🌫️',
      sampah: '🗑🌫️',
      serigala: '🐺🌫️',
      kayu: '🛷',
      sword: '⚔️',
      umpan: '🪱', 
      healtmonster: '💵',
      emas: '🪅',
      pancingan: '🪝',
      pancing: '🎣',
      common: '📦',
      uncoommon: '🥡',
      mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      anggur: '🍇',
      apel: '🍎',
      jeruk: '🍊',
      mangga: '🥭',
      pisang: '🍌',
      bibitanggur: '🌾🍇',
      bibitapel: '🌾🍎',
      bibitjeruk: '🌾🍊',
      bibitmangga: '🌾🥭',
      bibitpisang: '🌾🍌',
      centaur: '🐐',
      griffin: '🦅',
      kucing: '🐈',
      naga: '🐉',
      fox: '🦊',
      kuda: '🐎',
      phonix: '🕊️',
      wolf: '🐺',
      anjing: '🐶',
      petFood: '🍖', //?
      makanancentaur: '🐐🥩',
      makanangriffin: '🦅🥩',
      makanankyubi: '🌀🥩',
      makanannaga: '🐉🥩',
      makananpet: '🍱🥩',
      makananphonix: '🕊️🥩'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emotttt[results[0][0]]
  }
}
global.mess = {
    jobdone: 'Job erledigt...',
    useradmin: 'Tut mir leid, nur *Gruppen-Admins* können diesen Befehl verwenden *Baka*!',
    botadmin: 'Tut mir leid, ich kann diesen Befehl nicht ausführen, ohne ein *Admin* dieser Gruppe zu sein.',
    botowner: 'Nur mein *Eigentümer* kann diesen Befehl verwenden, Baka!',
    grouponly: 'Dieser Befehl gilt nur für *Groups*, Baka!',
    privateonly: 'Dieser Befehl ist nur für *Private Chat*, Baka gedacht!',
    botonly: 'Nur der *Bot selbst* kann diesen Befehl verwenden!',
    waiting: 'Chotto Matte...',
    nolink: 'Bitte gib mir *link*, Baka!',
    error: 'An error occurd!',
    banned: 'Es ist Ihnen *verboten*, Befehle zu verwenden!',
    bangc: 'Diese Gruppe ist von der Verwendung von Befehlen *gesperrt*!',
    nonsfw: 'Sei kein perverser Baka 👉👈! Dies ist keine NSFW-aktivierte Gruppe!'
}
//=============job=================//
global.work = ["Sie arbeiten als Cookie Cutter und Desire", "arbeitet für eine private Militärfirma, gewinnt", "organisiert eine Weinverkostung und bekommt", 
 "Sie entführen Sie und bringen Sie zu einem unterirdischen Kolosseum, in dem Sie gegen Monster mit Menschen zu kämpfen hatten, die Sie noch nie zuvor gekannt hatten.",
 "Sie entwickeln Spiele, um Ihren Lebensunterhalt und Verlangen zu verdienen", 
 "Warum ist dieser Befehl für eine Arbeit? Sie tun nicht einmal etwas mit dem Erabajo.", 
 "Sie arbeiten als Hochzeitskidnapper und Verlangen",
 "Jemand kam und vertrat ein Stück. Um zu schauen, haben sie dir gegeben", "Sie haben Artikel gekauft und verkauft und gewonnen", "Sie arbeiten im Restaurant der Oma als Koch und Verlangen", "Sie arbeiten im Restaurant der Oma", "Sie arbeiten im Restaurant der Oma", "Sie arbeiten als Koch und Verlangen im Restaurant",
 "Sie arbeiten 10 Minuten in einer örtlichen Hüttenpizza.", 
 "Sie arbeiten als manga Produzent","Sie gehen zum Finanzamt und kriegen wegen den steuern","Sie entwickeln Spiele, um Ihr Leben und Verlangen zu machen", "Etwas erfinden",
 "Sie verkaufen einiges und verdienen",
 "Sie helfen einer guten Freundin und bekommen", 
 "Sie arbeiten den ganzen tag in der firma",
 "Sie arbeiten nicht sie sind 0w0",
 "Sie helfen Mr krebs beim geld schnorren", 
 "Sie arbeiten als Automechaniker", 
 "Ich arbeite das Beste, was das impiniert werden könnte",
 "Sie arbeiten als Lehrer und verlangen",
 "Binden und gewinnen Sie Ihren wohlverdienten! ",
 "Sie arbeiten als Sprachschauspieler für SpongeBob und Sie haben es geschafft zu gewinnen.", 
 "Soe entwicken ein Spiel und verlangen", 
 "Sie haben sich gepflegt und gewünscht ","Sie arbeiten als bauarbeiter und kriegen","Sie haben gearbeitet und kriegen","Sie arbeiten als Straßenkünstler und Verlangen", "Sie Arbeiten als produzent und kriegen","Sie arbeiten als Synchronsprecher und kriegen"
]
//============= Wait and Eror ================//
global.wait = 'Chotto Matte'
global.eror = '「❗」Server FEHLER!'

//========Url Template Buttons=========//
global.dtu = 'ᴛᴡɪᴛᴄʜ'
global.urlnya = "https://www.twitch.tv/losemymind17"

//============= Funny  =============//
global.shop1 = 'JETZT SHOPPEN'
global.urlshop = "https://scooper.energy/collections/scooper"
global.scoop = 'Scooper Fragen'
global.scooper = "https://api.whatsapp.com/send/?phone=491602271250&text=SCOOPER,%20ich%20habe%20eine%20Frage%20zu:%20"
//============= callButtons =============//
global.dtc = 'ʙᴇsɪᴛᴢᴇʀ ᴀɴʀᴜғᴇɴ'
global.phn = '+4917629368004'

//============= Watermark Bot and Sticker =============//
global.wm = 'Nishikigi Chisato'
global.author = 'Nishikigi Chisato'
global.packname ='Nishikigi Chisato'
global.namabot = 'Nishikigi Chisato'

//============= Games ================//
global.benar = '_*Richtig✅*_'
global.salah = '_*Falsch❌*_'
global.dikit = "Ein bisschen mehr, Kopf hoch :')"

global.multiplier = 100 // The higher, The harder levelup
global.lolkeysapi  =  [ 'BrunoSobrino' ]
//============= Thumb And Image ================//
global.pp = 'https://telegra.ph/file/73323992190c2140cabc5.jpg'
global.image = 'https://telegra.ph/file/73323992190c2140cabc5.jpg'
global.thumbfoto = 'https://telegra.ph/file/73323992190c2140cabc5.jpg'

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')

global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("aktualisiert 'config.js'"))
  delete require.cache[file]
  require(file)
})
