let { Presence } = require('@adiwajshing/baileys')
let { performance } = require('perf_hooks')
const simple = require('./lib/simple')
const util = require('util')
const moment = require('moment-timezone')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))

const more = String.fromCharCode(8206)
global.readMore = more.repeat(4001)

module.exports = {
    async handler(chatUpdate) {
        if (global.db.data == null) await loadDatabase()
        this.msgqueque = this.msgqueque || []
        // console.log(chatUpdate)//
        if (!chatUpdate) return
        if (chatUpdate.messages.length > 1) console.log(chatUpdate.messages)
        let m = chatUpdate.messages[chatUpdate.messages.length - 1]
        const axios = require('axios')
            global.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}
           
        const _uptime = process.uptime() * 1000
        global.u = await conn.clockString(_uptime)
        global.ucapan = ucapan()
        global.settings = global.db.data.settings
        global.pickRandom = pickRandom
        global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
        global.img = pickRandom(global.waifu)
        global.fla = pickRandom(global.flaaa)
        global.namabot = conn.user.name
        global.bg = await (await fetch(img)).buffer()
        global.time = require('moment-timezone').tz('Europe/Berlin').format('HH:mm:ss')

        if (!m) return
        //console.log(JSON.stringify(m, null, 4))
        try {
            m = simple.smsg(this, m) || m
            if (!m) return
            // console.log(m)
            m.exp = 0
            m.limit = false
            try {
                let user = global.db.data.users[m.sender]
                if (typeof user !== 'object') global.db.data.users[m.sender] = {}
                 if (user) {
                   
                    if (!isNumber(user.dolares)) user.dolares = 20   
 	            if (!isNumber(user.tarjeta)) user.tarjeta = 1   	       
                    if (!isNumber(user.age)) user.age = 0
		    if (!isNumber(user.genero)) user.genero = 0
		    if (!isNumber(user.identidad)) user.identidad = 0
		    if (!isNumber(user.pasatiempo)) user.pasatiempo = 0
		    if (!isNumber(user.pas1)) user.pas1 = 0
		    if (!isNumber(user.pas2)) user.pas2 = 0
		    if (!isNumber(user.pas3)) user.pas3 = 0
		    if (!isNumber(user.pas4)) user.pas4 = 0
		    if (!isNumber(user.pas5)) user.pas5 = 0
                    if (!isNumber(user.anggur)) user.anggur = 0
                    if (!isNumber(user.apel)) user.apel = 0
                    if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
                    if (!isNumber(user.bibitapel)) user.bibitapel = 0
                    if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
                    if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
                    if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
                    if (!isNumber(user.emas)) user.emas = 0
                    if (!isNumber(user.jeruk)) user.jeruk = 0
                    if (!isNumber(user.kayu)) user.kayu = 0
                    if (!isNumber(user.makanan)) user.makanan = 0
                    if (!isNumber(user.mangga)) user.mangga = 0
                    if (!isNumber(user.pisang)) user.pisang = 0
                    if (!isNumber(user.premiumDate)) user.premiumDate = -1
                    if (!isNumber(user.regTime)) user.regTime = -1
                    if (!isNumber(user.semangka)) user.semangka = 0
                    if (!isNumber(user.stroberi)) user.stroberi = 0
	      if (!('role' in user)) user.role = 'Novato'
              if (!isNumber(user.agility)) user.agility = 0
              if (!isNumber(user.anakanjing)) user.anakanjing = 0
              if (!isNumber(user.anakcentaur)) user.anakcentaur = 0
              if (!isNumber(user.anakgriffin)) user.anakgriffin = 0
              if (!isNumber(user.anakkucing)) user.anakkucing = 0
              if (!isNumber(user.anakkuda)) user.anakkuda = 0
              if (!isNumber(user.anakkyubi)) user.anakkyubi = 0
              if (!isNumber(user.anaknaga)) user.anaknaga = 0
              if (!isNumber(user.anakpancingan)) user.anakpancingan = 0
              if (!isNumber(user.anakphonix)) user.anakphonix = 0
              if (!isNumber(user.anakrubah)) user.anakrubah = 0
              if (!isNumber(user.anakserigala)) user.anakserigala = 0
              if (!isNumber(user.anggur)) user.anggur = 0
              if (!isNumber(user.anjing)) user.anjing = 0
              if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
              if (!isNumber(user.antispam)) user.antispam = 0
              if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
              if (!isNumber(user.apel)) user.apel = 0
              if (!isNumber(user.aqua)) user.aqua = 0
              if (!isNumber(user.arc)) user.arc = 0
              if (!isNumber(user.arcdurability)) user.arcdurability = 0
              if (!isNumber(user.arlok)) user.arlok = 0
              if (!isNumber(user.armor)) user.armor = 0
              if (!isNumber(user.armordurability)) user.armordurability = 0
              if (!isNumber(user.armormonster)) user.armormonster = 0
              if (!isNumber(user.as)) user.as = 0
              if (!isNumber(user.atm)) user.atm = 0
              if (!isNumber(user.axe)) user.axe = 0
              if (!isNumber(user.axedurability)) user.axedurability = 0
              if (!isNumber(user.ayam)) user.ayam = 0
              if (!isNumber(user.ayamb)) user.ayamb = 0
              if (!isNumber(user.ayambakar)) user.ayambakar = 0
              if (!isNumber(user.ayamg)) user.ayamg = 0
              if (!isNumber(user.ayamgoreng)) user.ayamgoreng = 0
              if (!isNumber(user.babi)) user.babi = 0
              if (!isNumber(user.babihutan)) user.babihutan = 0
              if (!isNumber(user.babipanggang)) user.babipanggang = 0
              if (!isNumber(user.bandage)) user.bandage = 0
              if (!isNumber(user.bank)) user.bank = 0
              if (!isNumber(user.banteng)) user.banteng = 0
              if (!isNumber(user.batu)) user.batu = 0
              if (!isNumber(user.bawal)) user.bawal = 0
              if (!isNumber(user.bawalbakar)) user.bawalbakar = 0
              if (!isNumber(user.bayam)) user.bayam = 0
              if (!isNumber(user.berlian)) user.berlian = 10
              if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
              if (!isNumber(user.bibitapel)) user.bibitapel = 0
              if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
              if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
              if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
              if (!isNumber(user.bitcoins)) user.bitcoins = 10           
              if (!isNumber(user.botol)) user.botol = 0
              if (!isNumber(user.bow)) user.bow = 0
              if (!isNumber(user.bowdurability)) user.bowdurability = 0
              if (!isNumber(user.boxs)) user.boxs = 0
              if (!isNumber(user.brick)) user.brick = 0
              if (!isNumber(user.brokoli)) user.brokoli = 0
              if (!isNumber(user.buaya)) user.buaya = 0
              if (!isNumber(user.buntal)) user.buntal = 0
              if (!isNumber(user.cat)) user.cat = 0
              if (!isNumber(user.catexp)) user.catexp = 0
              if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
              if (!isNumber(user.centaur)) user.centaur = 0
              if (!isNumber(user.centaurexp)) user.centaurexp = 0
              if (!isNumber(user.centaurlastclaim)) user.centaurlastclaim = 0
              if (!isNumber(user.centaurlastfeed)) user.centaurlastfeed = 0
              if (!isNumber(user.clay)) user.clay = 0
              if (!isNumber(user.coal)) user.coal = 0
              if (!isNumber(user.coin)) user.coin = 0
              if (!isNumber(user.common)) user.common = 0
              if (!isNumber(user.crystal)) user.crystal = 0
              if (!isNumber(user.cumi)) user.cumi = 0
              if (!isNumber(user.cupon)) user.cupon = 0
              if (!isNumber(user.diamond)) user.diamond = 3
              if (!isNumber(user.dog)) user.dog = 0
              if (!isNumber(user.dogexp)) user.dogexp = 0
              if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
              if (!isNumber(user.dory)) user.dory = 0
              if (!isNumber(user.dragon)) user.dragon = 0
              if (!isNumber(user.dragonexp)) user.dragonexp = 0
              if (!isNumber(user.dragonlastfeed)) user.dragonlastfeed = 0
              if (!isNumber(user.emas)) user.emas = 0
              if (!isNumber(user.emerald)) user.emerald = 0
              if (!isNumber(user.enchant)) user.enchant = 0
              if (!isNumber(user.esteh)) user.esteh = 0
              if (!isNumber(user.exp)) user.exp = 0
              if (!isNumber(user.expg)) user.expg = 0
              if (!isNumber(user.exphero)) user.exphero = 0
	      if (!isNumber(user.eleksirb)) user.eleksirb = 0
	      if (!isNumber(user.emasbatang)) user.emasbatang = 0
	      if (!isNumber(user.emasbiasa)) user.emasbiasa = 0
	      if (!isNumber(user.fideos)) user.fideos = 0    
              if (!isNumber(user.fishingrod)) user.fishingrod = 0
              if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
              if (!isNumber(user.fortress)) user.fortress = 0
              if (!isNumber(user.fox)) user.fox = 0
              if (!isNumber(user.foxexp)) user.foxexp = 0
              if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
              if (!isNumber(user.fullatm)) user.fullatm = 0
              if (!isNumber(user.gadodado)) user.gadodado = 0
              if (!isNumber(user.gajah)) user.gajah = 0
              if (!isNumber(user.gamemines)) user.gamemines = false
              if (!isNumber(user.ganja)) user.ganja = 0
              if (!isNumber(user.gardenboxs)) user.gardenboxs = 0
              if (!isNumber(user.gems)) user.gems = 0
              if (!isNumber(user.glass)) user.glass = 0
              if (!isNumber(user.glimit)) user.glimit = 20
              if (!isNumber(user.glory)) user.glory = 0
              if (!isNumber(user.gold)) user.gold = 0
              if (!isNumber(user.griffin)) user.griffin = 0
              if (!isNumber(user.griffinexp)) user.griffinexp = 0
              if (!isNumber(user.griffinlastclaim)) user.griffinlastclaim = 0
              if (!isNumber(user.griffinlastfeed)) user.griffinlastfeed = 0
              if (!isNumber(user.gulai)) user.gulai = 0
              if (!isNumber(user.gurita)) user.gurita = 0
              if (!isNumber(user.harimau)) user.harimau = 0
              if (!isNumber(user.haus)) user.haus = 100
              if (!isNumber(user.healt)) user.healt = 100
              if (!isNumber(user.health)) user.health = 100
              if (!isNumber(user.healthmonster)) user.healthmonster = 0
              if (!isNumber(user.healtmonster)) user.healtmonster = 0
              if (!isNumber(user.hero)) user.hero = 1
              if (!isNumber(user.herolastclaim)) user.herolastclaim = 0
              if (!isNumber(user.hiu)) user.hiu = 0
              if (!isNumber(user.horse)) user.horse = 0
              if (!isNumber(user.horseexp)) user.horseexp = 0
              if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
              if (!isNumber(user.ikan)) user.ikan = 0
              if (!isNumber(user.ikanbakar)) user.ikanbakar = 0
              if (!isNumber(user.intelligence)) user.intelligence = 0
              if (!isNumber(user.iron)) user.iron = 0
              if (!isNumber(user.jagung)) user.jagung = 0
              if (!isNumber(user.jagungbakar)) user.jagungbakar = 0
              if (!isNumber(user.jeruk)) user.jeruk = 0
              if (!isNumber(user.joindorracoins)) user.joindorracoins = 1
              if (!isNumber(user.joinlimit)) user.joinlimit = 1
              if (!isNumber(user.judilast)) user.judilast = 0
              if (!isNumber(user.kaleng)) user.kaleng = 0
              if (!isNumber(user.kambing)) user.kambing = 0
              if (!isNumber(user.kangkung)) user.kangkung = 0
              if (!isNumber(user.kapak)) user.kapak = 0
              if (!isNumber(user.kardus)) user.kardus = 0
              if (!isNumber(user.katana)) user.katana = 0
              if (!isNumber(user.katanadurability)) user.katanadurability = 0
              if (!isNumber(user.kayu)) user.kayu = 0
              if (!isNumber(user.kentang)) user.kentang = 0
              if (!isNumber(user.kentanggoreng)) user.kentanggoreng = 0
              if (!isNumber(user.kepiting)) user.kepiting = 0
              if (!isNumber(user.kepitingbakar)) user.kepitingbakar = 0
              if (!isNumber(user.kerbau)) user.kerbau = 0
              if (!isNumber(user.kerjadelapan)) user.kerjadelapan = 0
              if (!isNumber(user.kerjadelapanbelas)) user.kerjadelapanbelas = 0
              if (!isNumber(user.kerjadua)) user.kerjadua = 0
              if (!isNumber(user.kerjaduabelas)) user.kerjaduabelas = 0
              if (!isNumber(user.kerjaduadelapan)) user.kerjaduadelapan = 0
              if (!isNumber(user.kerjaduadua)) user.kerjaduadua = 0
              if (!isNumber(user.kerjaduaempat)) user.kerjaduaempat = 0
              if (!isNumber(user.kerjaduaenam)) user.kerjaduaenam = 0
              if (!isNumber(user.kerjadualima)) user.kerjadualima = 0
              if (!isNumber(user.kerjaduapuluh)) user.kerjaduapuluh = 0
              if (!isNumber(user.kerjaduasatu)) user.kerjaduasatu = 0
              if (!isNumber(user.kerjaduasembilan)) user.kerjaduasembilan = 0
              if (!isNumber(user.kerjaduatiga)) user.kerjaduatiga = 0
              if (!isNumber(user.kerjaduatujuh)) user.kerjaduatujuh = 0
              if (!isNumber(user.kerjaempat)) user.kerjaempat = 0
              if (!isNumber(user.kerjaempatbelas)) user.kerjaempatbelas = 0
              if (!isNumber(user.kerjaenam)) user.kerjaenam = 0
              if (!isNumber(user.kerjaenambelas)) user.kerjaenambelas = 0
              if (!isNumber(user.kerjalima)) user.kerjalima = 0
              if (!isNumber(user.kerjalimabelas)) user.kerjalimabelas = 0
              if (!isNumber(user.kerjasatu)) user.kerjasatu = 0
              if (!isNumber(user.kerjasebelas)) user.kerjasebelas = 0
              if (!isNumber(user.kerjasembilan)) user.kerjasembilan = 0
              if (!isNumber(user.kerjasembilanbelas)) user.kerjasembilanbelas = 0
              if (!isNumber(user.kerjasepuluh)) user.kerjasepuluh = 0
              if (!isNumber(user.kerjatiga)) user.kerjatiga = 0
              if (!isNumber(user.kerjatigabelas)) user.kerjatigabelas = 0
              if (!isNumber(user.kerjatigapuluh)) user.kerjatigapuluh = 0
              if (!isNumber(user.kerjatujuh)) user.kerjatujuh = 0
              if (!isNumber(user.kerjatujuhbelas)) user.kerjatujuhbelas = 0
              if (!isNumber(user.korbanngocok)) user.korbanngocok = 0
              if (!isNumber(user.kubis)) user.kubis = 0
              if (!isNumber(user.kucing)) user.kucing = 0
              if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
              if (!isNumber(user.kuda)) user.kuda = 0
              if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
              if (!isNumber(user.kyubi)) user.kyubi = 0
              if (!isNumber(user.kyubiexp)) user.kyubiexp = 0
              if (!isNumber(user.kyubilastclaim)) user.kyubilastclaim = 0
              if (!isNumber(user.kyubilastfeed)) user.kyubilastfeed = 0
              if (!isNumber(user.labu)) user.labu = 0
              if (!isNumber(user.laper)) user.laper = 100
              if (!isNumber(user.lastadventure)) user.lastadventure = 0
              if (!isNumber(user.lastbansos)) user.lastbansos = 0
              if (!isNumber(user.lastberbru)) user.lastberbru = 0
              if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
              if (!isNumber(user.lastbunga)) user.lastbunga = 0
              if (!isNumber(user.lastbunuhi)) user.lastbunuhi = 0
	      if (!isNumber(user.lastcoins)) user.lastcoins = 0    
              if (!isNumber(user.lastclaim)) user.lastclaim = 0
              if (!isNumber(user.lastcode)) user.lastcode = 0
	      if (!isNumber(user.lastcofre)) user.lastcofre = 0
              if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
              if (!isNumber(user.lastcrusade)) user.lastcrusade = 0
              if (!isNumber(user.lastdagang)) user.lastdagang = 0
	      if (!isNumber(user.lastdiamantes)) user.lastdiamantes = 0  
              if (!isNumber(user.lastdorracoins)) user.lastdorracoins = 0  
              if (!isNumber(user.lastduel)) user.lastduel = 0
              if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
              if (!isNumber(user.lasteasy)) user.lasteasy = 0
              if (!isNumber(user.lastfight)) user.lastfight = 0
              if (!isNumber(user.lastfishing)) user.lastfishing = 0
              if (!isNumber(user.lastgift)) user.lastgift = 0
              if (!isNumber(user.lastgojek)) user.lastgojek = 0
              if (!isNumber(user.lastgrab)) user.lastgrab = 0
              if (!isNumber(user.lasthourly)) user.lasthourly = 0
	      if (!isNumber(user.halloween)) user.halloween = 0
              if (!isNumber(user.lasthunt)) user.lasthunt = 0
              if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
              if (!isNumber(user.lastjb)) user.lastjb = 0
              if (!isNumber(user.lastkill)) user.lastkill = 0
              if (!isNumber(user.lastlink)) user.lastlink = 0
              if (!isNumber(user.lastlumber)) user.lastlumber = 0
              if (!isNumber(user.lastmancingeasy)) user.lastmancingeasy = 0
              if (!isNumber(user.lastmancingextreme)) user.lastmancingextreme = 0
              if (!isNumber(user.lastmancinghard)) user.lastmancinghard = 0
              if (!isNumber(user.lastmancingnormal)) user.lastmancingnormal = 0
              if (!isNumber(user.lastmining)) user.lastmining = 0
              if (!isNumber(user.lastmisi)) user.lastmisi = 0
              if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
              if (!isNumber(user.lastmulung)) user.lastmulung = 0
              if (!isNumber(user.lastnambang)) user.lastnambang = 0
              if (!isNumber(user.lastnebang)) user.lastnebang = 0
              if (!isNumber(user.lastngocok)) user.lastngocok = 0
              if (!isNumber(user.lastngojek)) user.lastngojek = 0
              if (!isNumber(user.lastopen)) user.lastopen = 0
              if (!isNumber(user.lastpekerjaan)) user.lastpekerjaan = 0
	      if (!isNumber(user.lastpago)) user.lastpago = 0 
              if (!isNumber(user.lastpotionclaim)) user.lastpotionclaim = 0
              if (!isNumber(user.lastrampok)) user.lastrampok = 0
              if (!isNumber(user.lastramuanclaim)) user.lastramuanclaim = 0
              if (!isNumber(user.lastrob)) user.lastrob = 0
              if (!isNumber(user.lastroket)) user.lastroket = 0
              if (!isNumber(user.lastsda)) user.lastsda = 0
              if (!isNumber(user.lastseen)) user.lastseen = 0
              if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0
              if (!isNumber(user.lastsironclaim)) user.lastsironclaim = 0
              if (!isNumber(user.lastsmancingclaim)) user.lastsmancingclaim = 0
              if (!isNumber(user.laststringclaim)) user.laststringclaim = 0
              if (!isNumber(user.lastswordclaim)) user.lastswordclaim = 0
              if (!isNumber(user.lastturu)) user.lastturu = 0
              if (!isNumber(user.lastwar)) user.lastwar = 0
              if (!isNumber(user.lastwarpet)) user.lastwarpet = 0
              if (!isNumber(user.lastweaponclaim)) user.lastweaponclaim = 0
              if (!isNumber(user.lastweekly)) user.lastweekly = 0
              if (!isNumber(user.lastwork)) user.lastwork = 0
              if (!isNumber(user.legendary)) user.legendary = 0
              if (!isNumber(user.lele)) user.lele = 0
              if (!isNumber(user.leleb)) user.leleb = 0
              if (!isNumber(user.lelebakar)) user.lelebakar = 0
              if (!isNumber(user.leleg)) user.leleg = 0
              if (!isNumber(user.level)) user.level = 0
              if (!isNumber(user.tarjeta)) user.tarjeta = 1
              if (!isNumber(user.dolares)) user.dolares = 20
              if (!isNumber(user.bitcoins)) user.bitcoins = 10
              if (!isNumber(user.limit)) user.limit = 20
              if (!isNumber(user.limitjoinfree)) user.limitjoinfree = 1
              if (!isNumber(user.dolaresjoinfree)) user.dolaresjoinfree = 1
              if (!isNumber(user.lion)) user.lion = 0
              if (!isNumber(user.lionexp)) user.lionexp = 0
              if (!isNumber(user.lionlastfeed)) user.lionlastfeed = 0
              if (!isNumber(user.lobster)) user.lobster = 0
              if (!isNumber(user.lumba)) user.lumba = 0
              if (!isNumber(user.magicwand)) user.magicwand = 0
              if (!isNumber(user.magicwanddurability)) user.magicwanddurability = 0
              if (!isNumber(user.makanancentaur)) user.makanancentaur = 0
              if (!isNumber(user.makanangriffin)) user.makanangriffin = 0
              if (!isNumber(user.makanankyubi)) user.makanankyubi = 0
              if (!isNumber(user.makanannaga)) user.makanannaga = 0
              if (!isNumber(user.makananpet)) user.makananpet = 0
              if (!isNumber(user.makananphonix)) user.makananphonix = 0
              if (!isNumber(user.makananserigala)) user.makananserigala = 0
              if (!isNumber(user.mana)) user.mana = 0
              if (!isNumber(user.mangga)) user.mangga = 0
              if (!isNumber(user.money)) user.money = 500
              if (!isNumber(user.monyet)) user.monyet = 0
              if (!isNumber(user.mythic)) user.mythic = 0
              if (!isNumber(user.naga)) user.naga = 0
              if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 0
              if (!isNumber(user.net)) user.net = 0
              if (!isNumber(user.nila)) user.nila = 0
              if (!isNumber(user.nilabakar)) user.nilabakar = 0
              if (!isNumber(user.note)) user.note = 0
              if (!isNumber(user.ojekk)) user.ojekk = 0
              if (!isNumber(user.oporayam)) user.oporayam = 0
              if (!isNumber(user.orca)) user.orca = 0
              if (!isNumber(user.pancing)) user.pancing = 0
              if (!isNumber(user.pancingan)) user.pancingan = 1
              if (!isNumber(user.panda)) user.panda = 0
              if (!isNumber(user.paus)) user.paus = 0
              if (!isNumber(user.pausbakar)) user.pausbakar = 0
              if (!isNumber(user.pc)) user.pc = 0
              if (!isNumber(user.pepesikan)) user.pepesikan = 0
              if (!isNumber(user.pertambangan)) user.pertambangan = 0
              if (!isNumber(user.pertanian)) user.pertanian = 0
              if (!isNumber(user.pet)) user.pet = 0
              if (!isNumber(user.petFood)) user.petFood = 0
              if (!isNumber(user.phonix)) user.phonix = 0
              if (!isNumber(user.phonixexp)) user.phonixexp = 0
              if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 0
              if (!isNumber(user.phonixlastfeed)) user.phonixlastfeed = 0
              if (!isNumber(user.pickaxe)) user.pickaxe = 0
              if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
              if (!isNumber(user.pillhero)) user.pillhero= 0
              if (!isNumber(user.pisang)) user.pisang = 0
              if (!isNumber(user.pointxp)) user.pointxp = 0
              if (!isNumber(user.potion)) user.potion = 0
              if (!isNumber(user.psenjata)) user.psenjata = 0
              if (!isNumber(user.psepick)) user.psepick = 0
              if (!isNumber(user.ramuan)) user.ramuan = 0
              if (!isNumber(user.ramuancentaurlast)) user.ramuancentaurlast = 0
              if (!isNumber(user.ramuangriffinlast)) user.ramuangriffinlast = 0
              if (!isNumber(user.ramuanherolast)) user.ramuanherolast = 0
              if (!isNumber(user.ramuankucinglast)) user.ramuankucinglast = 0
              if (!isNumber(user.ramuankudalast)) user.ramuankudalast = 0
              if (!isNumber(user.ramuankyubilast)) user.ramuankyubilast = 0
              if (!isNumber(user.ramuannagalast)) user.ramuannagalast = 0
              if (!isNumber(user.ramuanphonixlast)) user.ramuanphonixlast = 0
              if (!isNumber(user.ramuanrubahlast)) user.ramuanrubahlast = 0
              if (!isNumber(user.ramuanserigalalast)) user.ramuanserigalalast = 0
              if (!isNumber(user.reglast)) user.reglast = 0
              if (!isNumber(user.rendang)) user.rendang = 0
              if (!isNumber(user.rhinoceros)) user.rhinoceros = 0
              if (!isNumber(user.rhinocerosexp)) user.rhinocerosexp = 0
              if (!isNumber(user.rhinoceroslastfeed)) user.rhinoceroslastfeed = 0
              if (!isNumber(user.robo)) user.robo = 0
              if (!isNumber(user.roboxp)) user.roboxp = 0
              if (!isNumber(user.rock)) user.rock = 0
              if (!isNumber(user.roket)) user.roket = 0
              if (!isNumber(user.roti)) user.roti = 0
              if (!isNumber(user.rubah)) user.rubah = 0
              if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
              if (!isNumber(user.rumahsakit)) user.rumahsakit = 0
              if (!isNumber(user.sampah)) user.sampah = 0
              if (!isNumber(user.sand)) user.sand = 0
              if (!isNumber(user.sapi)) user.sapi = 0
              if (!isNumber(user.sapir)) user.sapir = 0
              if (!isNumber(user.seedbayam)) user.seedbayam = 0
              if (!isNumber(user.seedbrokoli)) user.seedbrokoli = 0
              if (!isNumber(user.seedjagung)) user.seedjagung = 0
              if (!isNumber(user.seedkangkung)) user.seedkangkung = 0
              if (!isNumber(user.seedkentang)) user.seedkentang = 0
              if (!isNumber(user.seedkubis)) user.seedkubis = 0
              if (!isNumber(user.seedlabu)) user.seedlabu = 0
              if (!isNumber(user.seedtomat)) user.seedtomat = 0
              if (!isNumber(user.seedwortel)) user.seedwortel = 0
              if (!isNumber(user.serigala)) user.serigala = 0
              if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 0
              if (!isNumber(user.shield)) user.shield = false
              if (!isNumber(user.skillexp)) user.skillexp = 0
              if (!isNumber(user.snlast)) user.snlast = 0
              if (!isNumber(user.soda)) user.soda = 0
              if (!isNumber(user.sop)) user.sop = 0
              if (!isNumber(user.spammer)) user.spammer = 0
              if (!isNumber(user.spinlast)) user.spinlast = 0
              if (!isNumber(user.ssapi)) user.ssapi = 0
              if (!isNumber(user.stamina)) user.stamina = 100
              if (!isNumber(user.steak)) user.steak = 0
              if (!isNumber(user.stick)) user.stick = 0
              if (!isNumber(user.strength)) user.strength = 0
              if (!isNumber(user.string)) user.string = 0
              if (!isNumber(user.superior)) user.superior = 0
              if (!isNumber(user.suplabu)) user.suplabu = 0
              if (!isNumber(user.sushi)) user.sushi = 0
              if (!isNumber(user.sword)) user.sword = 0
              if (!isNumber(user.sworddurability)) user.sworddurability = 0
              if (!isNumber(user.tigame)) user.tigame = 50
              if (!isNumber(user.tiketcoin)) user.tiketcoin = 0
              if (!isNumber(user.title)) user.title = 0
              if (!isNumber(user.tomat)) user.tomat = 0
              if (!isNumber(user.tprem)) user.tprem = 0
              if (!isNumber(user.trash)) user.trash = 0
              if (!isNumber(user.trofi)) user.trofi = 0
              if (!isNumber(user.troopcamp)) user.troopcamp = 0
              if (!isNumber(user.tumiskangkung)) user.tumiskangkung = 0
              if (!isNumber(user.udang)) user.udang = 0
              if (!isNumber(user.udangbakar)) user.udangbakar = 0
              if (!isNumber(user.umpan)) user.umpan = 0
              if (!isNumber(user.uncoommon)) user.uncoommon = 0
              if (!isNumber(user.unreglast)) user.unreglast = 0
              if (!isNumber(user.upgrader)) user.upgrader = 0
              if (!isNumber(user.vodka)) user.vodka = 0
              if (!isNumber(user.wallet)) user.wallet = 0
              if (!isNumber(user.warn)) user.warn = 0
              if (!isNumber(user.weapon)) user.weapon = 0
              if (!isNumber(user.weapondurability)) user.weapondurability = 0
              if (!isNumber(user.wolf)) user.wolf = 0
              if (!isNumber(user.wolfexp)) user.wolfexp = 0
              if (!isNumber(user.wolflastfeed)) user.wolflastfeed = 0
              if (!isNumber(user.wood)) user.wood = 0
              if (!isNumber(user.wortel)) user.wortel = 0
	      if (!('team' in user)) user.team = 'user'
              if (!user.lbars) user.lbars = '[▒▒▒▒▒▒▒▒▒]'
              if (!user.job) user.job = 'Desempleo'
              if (!user.premium) user.premium = false
              if (!user.premium) user.premiumTime = 0
              if (!user.rtrofi) user.rtrofi = 'Bronce' 
                        
                    if (!isNumber(user.joincount)) user.joincount = 1
                    if (!isNumber(user.healt)) user.healt = 0
                    if (!isNumber(user.level)) user.level = 1
                    if (!isNumber(user.exp)) user.exp = 0
                    if (!isNumber(user.limit)) user.limit = 10
                    if (!isNumber(user.lastseen)) user.lastseen = 0
                    if (!isNumber(user.usebot)) user.usebot = 0
                    if (!('banned' in user)) user.banned = false
                    if (!isNumber(user.warn)) user.warn = 0
                    if (!isNumber(user.warning)) user.warning = 0
                    if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
                    if (!isNumber(user.call)) user.call = 0  

                    if (!isNumber(user.afk)) user.afk = -1
                    if (!('afkReason' in user)) user.afkReason = ''
                    if (!('pasangan' in user)) user.pasangan = ''
                    if (!('registered' in user)) user.registered = false
                    if (!user.registered) {
                    if (!('name' in user)) user.name = this.getName(m.sender)
                    if (!('email' in user)) user.email = ''
                    if (!('label' in user)) user.label = 'Nutzer von Chisato'
                      if(!isNumber(user.cellbot_token)) user.Chisatobot_token = 100
                    if (!isNumber(user.age)) user.age = -1
                    if (!isNumber(user.regTime)) user.regTime = -1
                    }
                    if (!('premium' in user)) user.premium = false
                    if (!isNumber(user.premiumTime)) user.premiumTime = 0
                    if (!user.role) user.role = ''
                    if (!('autolevelup' in user)) user.autolevelup = true
                } else global.db.data.users[m.sender] = {                   
                    age: 0,
		    genero: 0,
		    identidad: 0,
		    pasatiempo: 0,
		    pas1: 0,
		    pas2: 0,
		    pas3: 0,
	            pas4: 0,
		    pas5: 0,
                    agility: 16,
                    anakanjing: 0,
                    anakcentaur: 0,
                    anakgriffin: 0,
                    anakkucing: 0,
                    anakkuda: 0,
                    anakkyubi: 0,
                    anaknaga: 0,
                    anakpancingan: 0,
                    anakphonix: 0,
                    anakrubah: 0,
                    anakserigala: 0,
                    anggur: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    antispam: 0,
                    antispamlastclaim: 0,
                    apel: 0,
                    aqua: 0,
                    arc: 0,
                    arcdurability: 0,
                    arlok: 0,
                    armor: 0,
                    armordurability: 0,
                    armormonster: 0,
                    as: 0,
                    atm: 0,
                    //autolevelup: true,
                    axe: 0,
                    axedurability: 0,
                    ayam: 0,
                    ayamb: 0,
                    ayambakar: 0,
                    ayamg: 0,
                    ayamgoreng: 0,
                    babi: 0,
                    babihutan: 0,
                    babipanggang: 0,
                    bandage: 0,
                    bank: 0,
                    banned: false,
                    BannedReason: '',
                    Banneduser: false,
                    banteng: 0,
                    batu: 0,
                    bawal: 0,
                    bawalbakar: 0,
                    bayam: 0,
                    berlian: 10,
                    bibitanggur: 0,
                    bibitapel: 0,
                    bibitjeruk: 0,
                    bibitmangga: 0,
                    bibitpisang: 0,
                    bitcoins: 10,
                    botol: 0,
                    bow: 0,
                    bowdurability: 0,
                    boxs: 0,
                    brick: 0,
                    brokoli: 0,
                    buaya: 0,
                    buntal: 0,
                    cat: 0,
                    catlastfeed: 0,
                    catngexp: 0,
                    centaur: 0,
                    centaurexp: 0,
                    centaurlastclaim: 0,
                    centaurlastfeed: 0,
                    clay: 0,
                    coal: 0,
                    coin: 0,
                    common: 0,
                    crystal: 0,
                    cumi: 0,
                    cupon: 0,
                    diamond: 3,
                    dolares: 20,
                    dog: 0,
                    dogexp: 0,
                    doglastfeed: 0,
                    dory: 0,
                    dragon: 0,
                    dragonexp: 0,
                    dragonlastfeed: 0,
                    emas: 0,
                    emerald: 0,
                    esteh: 0,
                    exp: 0,
                    expg: 0,
                    exphero: 0,
                    expired: 0,
		    eleksirb: 0,
		    emasbatang: 0,
		    emasbiasa: 0,
		    fideos: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,
                    fortress: 0,
                    fox: 0,
                    foxexp: 0,
                    foxlastfeed: 0,
                    fullatm: 0,
                    gadodado: 0,
                    gajah: 0,
                    gamemines: false,
                    ganja: 0,
                    gardenboxs: 0,
                    gems: 0,
                    glass: 0,
                    gold: 0,
                    griffin: 0,
                    griffinexp: 0,
                    griffinlastclaim: 0,
                    griffinlastfeed: 0,
                    gulai: 0,
                    gurita: 0,
		    halloween: 0,
                    harimau: 0,
                    haus: 100,
                    healt: 100,
                    health: 100,
                    healtmonster: 100,
                    hero: 1,
                    herolastclaim: 0,
                    hiu: 0,
                    horse: 0,
                    horseexp: 0,
                    horselastfeed: 0,
                    ikan: 0,
                    ikanbakar: 0,
                    intelligence: 10,
                    iron: 0,
                    jagung: 0,
                    jagungbakar: 0,
                    jeruk: 0,
                    job: 'Pengangguran',
                    joindolares: 1,
                    joinlimit: 1,
                    judilast: 0,
                    kaleng: 0,
                    kambing: 0,
                    kangkung: 0,
                    kapak: 0,
                    kardus: 0,
                    katana: 0,
                    katanadurability: 0,
                    kayu: 0,
                    kentang: 0,
                    kentanggoreng: 0,
                    kepiting: 0,
                    kepitingbakar: 0,
                    kerbau: 0,
                    kerjadelapan: 0,
                    kerjadelapanbelas: 0,
                    kerjadua: 0,
                    kerjaduabelas: 0,
                    kerjaduadelapan: 0,
                    kerjaduadua: 0,
                    kerjaduaempat: 0,
                    kerjaduaenam: 0,
                    kerjadualima: 0,
                    kerjaduapuluh: 0,
                    kerjaduasatu: 0,
                    kerjaduasembilan: 0,
                    kerjaduatiga: 0,
                    kerjaduatujuh: 0,
                    kerjaempat: 0,
                    kerjaempatbelas: 0,
                    kerjaenam: 0,
                    kerjaenambelas: 0,
                    kerjalima: 0,
                    kerjalimabelas: 0,
                    kerjasatu: 0,
                    kerjasebelas: 0,
                    kerjasembilan: 0,
                    kerjasembilanbelas: 0,
                    kerjasepuluh: 0,
                    kerjatiga: 0,
                    kerjatigabelas: 0,
                    kerjatigapuluh: 0,
                    kerjatujuh: 0,
                    kerjatujuhbelas: 0,
                    korbanngocok: 0,
                    kubis: 0,
                    kucing: 0,
                    kucinglastclaim: 0,
                    kuda: 0,
                    kudalastclaim: 0,
                    kumba: 0,
                    kyubi: 0,
                    kyubilastclaim: 0,
                    labu: 0,
                    laper: 100,
                    lastadventure: 0,
                    lastberbru: 0,
                    lastberkebon: 0,
                    lastbunga: 0,
                    lastbunuhi: 0,
		    lastcoins: 0,
                    lastclaim: 0,
                    lastcode: 0,
		    lastcofre: 0,
                    lastcrusade: 0,
                    lastdaang: 0,
                    lastdagang: 0,
                    lastdorracoins: 0,
		    lastdiamantes: 0,
                    lastduel: 0,
                    lastdungeon: 0,
                    lasteasy: 0,
                    lastfight: 0,
                    lastfishing: 0,
                    lastgojek: 0,
                    lastgrab: 0,
                    lasthourly: 0,
                    lasthunt: 0,
                    lastjb: 0,
                    lastkill: 0,
                    lastlink: 0,
                    lastlumber: 0,
                    lastmancingeasy: 0,
                    lastmancingextreme: 0,
                    lastmancinghard: 0,
                    lastmancingnormal: 0,
                    lastmining: 0,
                    lastmisi: 0,
                    lastmonthly: 0,
                    lastmulung: 0,
                    lastnambang: 0,
                    lastnebang: 0,
                    lastngocok: 0,
                    lastngojek: 0,
                    lastopen: 0,
                    lastpekerjaan: 0,
		    lastpago: 0,
                    lastpotionclaim: 0,
                    lastramuanclaim: 0,
                    lastrob: 0,
                    lastroket: 0,
                    lastseen: 0,
                    lastSetStatus: 0,
                    lastsironclaim: 0,
                    lastsmancingclaim: 0,
                    laststringclaim: 0,
                    lastswordclaim: 0,
                    lastturu: 0,
                    lastwarpet: 0,
                    lastweaponclaim: 0,
                    lastweekly: 0,
                    lastwork: 0,
                    lbars: '[▒▒▒▒▒▒▒▒▒]',
                    legendary: 0,
                    lele: 0,
                    leleb: 0,
                    lelebakar: 0,
                    leleg: 0,
                    level: 0, 
                    tarjeta: 1,
                    bitcoins: 10,
                    dolares: 20,
                    limitjoinfree: 1,
                    dolaresjoinfree: 1,
                    lion: 0,
                    lionexp: 0,
                    lionlastfeed: 0,
                    lobster: 0,
                    lumba: 0,
                    magicwand: 0,
                    magicwanddurability: 0,
                    makanan: 0,
                    makanancentaur: 0,
                    makanangriffin: 0,
                    makanankyubi: 0,
                    makanannaga: 0,
                    makananpet: 0,
                    makananphonix: 0,
                    makananserigala: 0,
                    mana: 20,
                    mangga: 0,
                    misi: '',
                    money: 500,
                    monyet: 0,
                    mythic: 0,
                    naga: 0,
                    nagalastclaim: 0,
                    name: m.name,
                    net: 0,
                    nila: 0,
                    nilabakar: 0,
                    note: 0,
                    ojekk: 0,
                    oporayam: 0,
                    orca: 0,
                    pancingan: 1,
                    panda: 0,
                    pasangan: '',
                    paus: 0,
                    pausbakar: 0,
                    pc: 0,
                    pepesikan: 0,
                    pet: 0,
                    phonix: 0,
                    phonixexp: 0,
                    phonixlastclaim: 0,
                    phonixlastfeed: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    pillhero: 0,
                    pisang: 0,
                    pointxp: 0,
                    potion: 10,
                    premium: false,
                    premiumTime: 0,
                    ramuan: 0,
                    ramuancentaurlast: 0,
                    ramuangriffinlast: 0,
                    ramuanherolast: 0,
                    ramuankucinglast: 0,
                    ramuankudalast: 0,
                    ramuankyubilast: 0,
                    ramuannagalast: 0,
                    ramuanphonixlast: 0,
                    ramuanrubahlast: 0,
                    ramuanserigalalast: 0,
                    registered: false,
                    reglast: 0,
                    regTime: -1,
                    rendang: 0,
                    rhinoceros: 0,
                    rhinocerosexp: 0,
                    rhinoceroslastfeed: 0,
                    rock: 0,
                    roket: 0,
                    role: 'Novato',
                    roti: 0,
                    rtrofi: 'bronce',
                    rubah: 0,
                    rubahlastclaim: 0,
                    rumahsakit: 0,
                    sampah: 0,
                    sand: 0,
                    sapi: 0,
                    sapir: 0,
                    seedbayam: 0,
                    seedbrokoli: 0,
                    seedjagung: 0,
                    seedkangkung: 0,
                    seedkentang: 0,
                    seedkubis: 0,
                    seedlabu: 0,
                    seedtomat: 0,
                    seedwortel: 0,
                    semangka: 0,
                    serigala: 0,
                    serigalalastclaim: 0,
                    sewa: false,
                    shield: 0,
                    skill: '',
                    skillexp: 0,
                    snlast: 0,
                    soda: 0,
                    sop: 0,
                    spammer: 0,
                    spinlast: 0,
                    ssapi: 0,
                    stamina: 100,
                    steak: 0,
                    stick: 0,
                    strength: 30,
                    string: 0,
                    stroberi: 0,
                    superior: 0,
                    suplabu: 0,
                    sushi: 0,
                    sword: 0,
                    sworddurability: 0,
                    tigame: 50,
                    tiketcoin: 0,
                    title: '',
                    tomat: 0,
                    tprem: 0,
                    trash: 0,
                    trofi: 0,
                    troopcamp: 0,
                    tumiskangkung: 0,
                    udang: 0,
                    udangbakar: 0,
                    umpan: 0,
                    uncoommon: 0,
                    unreglast: 0,
                    upgrader: 0,
                    vodka: 0,
                    wallet: 0,
                    warn: 0,
                    weapon: 0,
                    weapondurability: 0,
                    wolf: 0,
                    wolfexp: 0,
                    wolflastfeed: 0,
                    wood: 0,
                    wortel: 0,	
                    joincount: 1,
                    exp: 0,
                    limit: 20,
                    lastseen: 0,
                    usebot: 0,
                    banned: false,
                    warn: 0,
                    warning: 0,
                    lastIstigfar: 0,
                    call: 0,
                    afk: -1,
                    afkReason: '',
                    pasangan: '',
                }
                let chat = global.db.data.chats[m.chat]
                if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
                if (chat) {
                    if (!('name' in chat)) chat.name = this.getName(m.chat)
                    if (!('closeGroup' in chat)) chat.closeGroup = false
                    if (!isNumber(chat.add)) chat.add = 0
                    if (!('isBanned' in chat)) chat.isBanned = false
                    if (!('welcome' in chat)) chat.welcome = false
                    if (!('detect' in chat)) chat.detect = true
                    if (!('sWelcome' in chat)) chat.sWelcome = ''
                    if (!('sBye' in chat)) chat.sBye = ''
                    if (!('sPromote' in chat)) chat.sPromote = ''
                    if (!('sDemote' in chat)) chat.sDemote = ''
                    if (!('desc' in chat)) chat.desc = true
                    if (!('descUpdate' in chat)) chat.descUpdate = true
                    if (!('stiker' in chat)) chat.stiker = false
                    if (!('delete' in chat)) chat.delete = true
                    if (!('antiLink' in chat)) chat.antiLink = false
                    if (!isNumber(chat.expired)) chat.expired = 0
                    if (!('antiBadword' in chat)) chat.antiBadword = true
                  if (!('antispam' in chat)) chat.antispam = true
                    if (!('antitroli' in chat)) chat.antitroli = false
                    if (!('antivirtex' in chat)) chat.antivirtex = true
                    if (!('viewonce' in chat)) chat.viewonce = true
                    if (!('nsfw' in chat)) chat.nsfw = false
                    if (!('simi' in chat)) chat.simi = false
                    if (!('clear' in chat)) chat.clear = true
                    if (!isNumber(chat.cleartime)) chat.clearTime = 0 
                } else global.db.data.chats[m.chat] = {
                    name: this.getName(m.chat),
                    closeGroup: false,
                    add: 0,
                    isBanned: false,
                    welcome: true,
                    detect: true,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    desc: true,
                    descUpdate: true,
                    stiker: false,
                    delete: true,
                    antiLink: false,
                    expired: 0,
                    antiBadword: true,
                    antispam: true,
                    antitroli: false,
                    antivirtex: true,
                    viewonce: true,
                    nsfw: false,
                    simi: false,
                    clear: false,
                    clearTime: 0
                }
                let settings = global.db.data.settings[this.user.jid]
                if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
                if (settings) {
                    if (!'tag' in settings) settings.tag = true
                    if (!'self' in settings) settings.self = false
                    if (!'anon' in settings) settings.anon = true
                    if (!'anticall' in settings) settings.anticall = true
                    if (!'backup' in settings) settings.backup = true
                    if (!isNumber(settings.backupDB)) settings.backupDB = 0
                    if (!'groupOnly' in settings) settings.groupOnly = false
                    if (!'jadibot' in settings) settings.jadibot = false
                    if (!isNumber(settings.status)) settings.status = 0
                    if (!'epe' in settings) settings.epe = true
                    if (!'game' in settings) settings.game = true
                } else global.db.data.settings[this.user.jid] = {
                    tag: true,
                    self: false,
                    anon: true,
                    anticall: true,
                    backup: false,
                    backupDB: 0,
                    groupOnly: false,
                    jadibot: false,
                    status: 0,
                    epe: true,
                    game: true,
                }
            } catch (e) {
                console.error(e)
            }
            if (opts['nyimak']) return
            if (!m.fromMe && opts['self']) return
            if (opts['pconly'] && m.chat.endsWith('s.whatsapp.net')) return
            if (opts['gconly'] && !m.chat.endsWith('g.us')) return
            if (opts['swonly'] && m.chat !== 'status@broadcast') return
            if (typeof m.text !== 'string') m.text = ''
            if (opts['queque'] && m.text) {
                this.msgqueque.push(m.id || m.key.id)
                await delay(this.msgqueque.length * 1000)
            }
            for (let name in global.plugins) {
                let plugin = global.plugins[name]
                if (!plugin) continue
                if (plugin.disabled) continue
                if (!plugin.all) continue
                if (typeof plugin.all !== 'function') continue
                try {
                    await plugin.all.call(this, m, chatUpdate)
                } catch (e) {
                    if (typeof e === 'string') continue
                    console.error(e)
                }
            }
            if (m.isBaileys) return
            m.exp += Math.ceil(Math.random() * 10)

            let usedPrefix
            let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

            global.prems = global.db.data.users[m.sender].premium ///JSON.parse(fs.readFileSync('./data/premium.json')) // Premium user has unlimited limit
            const isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            const isOwner = isROwner || m.fromMe
            if (!isOwner && db.data.settings.self) return // Saat mode self diaktifkan hanya owner yang dapat menggunakannya
            const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
                const isSupporter = isOwner || global.sup.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
                const isManager = isOwner || global.manager.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            const isPrems = isROwner || db.data.users[m.sender].premium || false
            //let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            if (!isPrems && !m.isGroup && global.db.data.settings.groupOnly) return
            const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
            const participants = (m.isGroup ? groupMetadata.participants : []) || []
            const user = (m.isGroup ? participants.find(u => this.decodeJid(u.id) === m.sender) : {}) || {} // User Data
            const bot = (m.isGroup ? participants.find(u => this.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
            const isAdmin = user && user?.admin || false // Is User Admin?
            const isBotAdmin = bot && bot?.admin || false // Are you Admin?

            for (let name in global.plugins) {
                let plugin = global.plugins[name]
                if (!plugin) continue
                if (plugin.disabled) continue
                if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
                const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
                let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
                let match = (_prefix instanceof RegExp ? // RegExp Mode?
                    [[_prefix.exec(m.text), _prefix]] :
                    Array.isArray(_prefix) ? // Array?
                        _prefix.map(p => {
                            let re = p instanceof RegExp ? // RegExp in Array?
                                p :
                                new RegExp(str2Regex(p))
                            return [re.exec(m.text), re]
                        }) :
                        typeof _prefix === 'string' ? // String?
                            [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                            [[[], new RegExp]]
                ).find(p => p[1])
                if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isManager,
                    isROwner,
                    isOwner,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                })) continue
                if (typeof plugin !== 'function') continue
                if ((usedPrefix = (match[0] || '')[0])) {
                    let noPrefix = m.text.replace(usedPrefix, '')
                    let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                    args = args || []
                    let _args = noPrefix.trim().split` `.slice(1)
                    let text = _args.join` `
                    command = (command || '').toLowerCase()
                    let fail = plugin.fail || global.dfail// When failed
                    let fetchJson = plugin.fetchJsonl || global.fetchJson
                    let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                        plugin.command.test(command) :
                        Array.isArray(plugin.command) ? // Array?
                            plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                                cmd.test(command) :
                                cmd === command
                            ) :
                            typeof plugin.command === 'string' ? // String?
                                plugin.command === command :
                                false

                    if (!isAccept) continue
                    m.plugin = name
                    if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                        let chat = global.db.data.chats[m.chat]
                        let user = global.db.data.users[m.sender]
                        if (!['unbanchat.js', 'dompet.js', 'creator.js'].includes(name) && chat && chat?.isBanned && !isPrems) return // Kecuali ini, bisa digunakan
                        if (!['unbanchat.js', 'dompet.js', 'creator.js'].includes(name) && user && user?.banned) return
                    }
                    if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.rowner && !isROwner) { // Real Owner
                        fail('rowner', m, this)
                        continue
                    }
                    if (plugin.nsfw && !isnsfw) { // nsfw
                        fail('nsfw', m, this)
                        continue
                    }
                    if (plugin.owner && !isOwner) { // Owner UserJid
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.mods && !isMods) { // Moderator
                        fail('mods', m, this)
                        continue
                    }
                    if (plugin.manager && !isManager) { // Moderator
                        fail('manager', m, this)
                        continue
                    }
                    if (plugin.premium && !isPrems) { // Premium
                        fail('premium', m, this)
                        continue
                    }
                    if (plugin.group && !m.isGroup) { // Group Only
                        fail('group', m, this)
                        continue
                    } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                        fail('botAdmin', m, this)
                        continue
                    } else if (plugin.admin && !isAdmin) { // User Admin
                        fail('admin', m, this)
                        continue
                    }
                    if (plugin.private && m.isGroup) { // Private Chat Only
                        fail('private', m, this)
                        continue
                    }
                    if (plugin.register == true && _user.registered == false) { // Need register?
                        fail('unreg', m, this)
                        continue
                    }
                    m.isCommand = true
                    let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                    if (xp > 200) m.reply('Ngecit -_-') // Hehehe
                    else m.exp += xp
                    if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                        this.sendButton(m.chat, `Ihr Limit ist aufgebraucht, bitte kaufen Sie Limits über *${usedPrefix}buy*`, wm, 'Buy', '.buy', m)
                        // this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
                        continue // Limit habis
                    }
                    if (plugin.level > _user.level) {
                        this.sendButton(m.chat, `${plugin.level}-Level ist erforderlich, um diesen Befehl zu verwenden. Ihr Level ist ${_user.level}`, wm, `Levelup`, `.levelup`, m)
                        // this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
                        continue // If the level has not been reached
                    }
                    let extra = {
                        match,
                        usedPrefix,
                        noPrefix,
                        _args,
                        args,
                        command,
                        text,
                        conn: this,
                        Chisato: this,
                        participants,
                        groupMetadata,
                        user,
                        bot,
                        isROwner,
                        isOwner,
                        isAdmin,
                        isBotAdmin,
                        isPrems,
                        chatUpdate,
                    }
                    try {                       await plugin.call(this, m, extra)
                        if (!isPrems) m.limit = m.limit || plugin.limit || false
                    } catch (e) {
                        // Error occured

                        m.error = e
                        console.error(e)
                        if (e) {
                            let text = util.format(e)
                            for (let key of Object.values(global.APIKeys))
                                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                            if (e.name)
                            for (let jid of global.owner.map(v => v.replace(/[^0-22]/g, '') + '@g.us').filter(v => v != this.user.jid)) {
                                let data = (await this.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*Plugin:* ${m.plugin}\n*Sender:* @${m.sender.split`@`[0]}\n*Chat:* ${m.chat}\n*Chat Name:* ${await this.getName(m.chat)}\n*Command:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\``.trim(), data.jid, { mentions: [m.sender] })
                            }
                            m.reply(text)
                        }
                    } finally {


                        // m.reply(util.format(_user))
                        if (typeof plugin.after === 'function') {
                            try {
                                await plugin.after.call(this, m, extra)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                        if (m.limit) m.reply(+ m.limit + 'Gebrauches Limt')
                        //jika risih matiin aja 
                    }
                    break
                }
            }
        } catch (e) {
            console.error(e)
        } finally {
            // conn.sendPresenceUpdate('composing', m.chat) 
            //console.log(global.db.data.users[m.sender])
            let user, stats = global.db.data.stats
            if (m) {
                if (m.sender && (user = global.db.data.users[m.sender])) {
                    user.exp += m.exp
                    user.limit -= m.limit * 1
                }

                let stat
                if (m.plugin) {
                    let now = + new Date
                    if (m.plugin in stats) {
                        stat = stats[m.plugin]
                        if (!isNumber(stat.total)) stat.total = 1
                        if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
                        if (!isNumber(stat.last)) stat.last = now
                        if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
                    } else stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                    stat.total += 1
                    stat.last = now
                    if (m.error == null) {
                        stat.success += 1
                        stat.lastSuccess = now
                    }
                }
            }

            try {
                require('./lib/print')(m, this)
            } catch (e) {
                console.log(m, m.quoted, e)
            }
            if (opts['autoread']) await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
            let quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (opts['queque'] && m.text && quequeIndex !== -1) this.msgqueque.splice(quequeIndex, 1)
        }
    },


   
 // Add opening curly brace before the `async` keyword
async participantsUpdate({ id, participants, action }, opts) {


        
    // if (id in conn.chats) return // First login will spam
    if (global.isInit) return
    let chat = global.db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case 'add':
        case 'remove':
          if (chat.welcome) {
            try {
                // Use the `id` parameter instead of `anu.id`
                let metadata = await conn.groupMetadata(id)
                // Use the `participants` parameter instead of `anu.participants`
                for (let num of participants) {
                    try {
                        ppuser = await conn.profilePictureUrl(num, 'image')
                    } catch {
                        ppuser = 'https://i.redd.it/jw3b96fop0n91.jpg'
                    }
                    try {
                        // Use the `id` parameter instead of `anu.id`
                        ppgroup = await conn.profilePictureUrl(id, 'image')
                    } catch {
                        ppgroup = 'https://i.redd.it/jw3b96fop0n91.jpg'
                    }
                    let targetname = await conn.getName(num)
                    grpmembernum = metadata.participants.length
                    if (action == 'add') {
                        let WAuserName = num
                        mikutext = `
Hello @${WAuserName.split("@")[0]},

I am *Nishikigi Chisato*, Welcome to ${metadata.subject}.

*Group Description:*
${metadata.desc}
`

                        let buttonMessage = {
                            image: await getBuffer(ppgroup),
                            mentions: [num],
                            caption: mikutext,
                            footer: `${global.BotName}`,
                            headerType: 4,
                        }
                        // Use the `id` parameter instead of `anu.id`
                        conn.sendMessage(id, buttonMessage)
                    } else if (action == 'remove') {
                        let WAuserName = num
                        mikutext = `
Sayonara 👋, @${WAuserName.split("@")[0]},

Ich hoffe, Sie kommen bald wieder, aber wir werden Sie trotzdem nicht vermissen!
`

                        let buttonMessage = {
                            // Use the `ppuser` variable instead of `anu.id`
                            image:await getBuffer(ppuser),
                            mentions: [num],
                            caption: mikutext,
                            footer: `${global.BotName}`,
                            headerType: 4,
                        }
                        // Use the `id` parameter instead of `anu.id`
                        conn.sendMessage(id, buttonMessage)
                    }
                }
            } catch (err) {
                console.log(err)
            }
                 }
            break

            case 'promote':
                text = (chat.sPromote || this.spromote || conn.spromote || '@user ```ist nun Admin```')
            case 'demote':
                if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```ist nicht Länger Admin!```')
                text = text.replace('@user', '@' + participants[0].split('@')[0])
                if (chat.detect) this.sendMessage(id, text, {
                    contextInfo: {
                        mentionedJid: this.parseMention(text)
                    }
                })
                break
        }
    },
    async groupsUpdate(groupsUpdate, fromMe, m) {
        if (opts['self'] && m.fromMe) return
            console.log(m)
        // Ingfo tag orang yg update group
        for (let groupUpdate of groupsUpdate) {
            const id = groupUpdate.id
            const participant = groupUpdate.participants
            console.log('\n\n=============\n\n In Gruppen Update \n\n============\n\n'+ `Id: ${id}\nTeilnehmer: ${participant}` + '\n\n==============================\n')
            if (!id) continue
            let chats = global.db.data.chats[id], text = ''
            if (!chats.detect) continue
            if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Beschreibung wurde geändert zu```\n@desc').replace('@desc', groupUpdate.desc)
            if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Betreff wurde geändert zu```\n@subject').replace('@subject', groupUpdate.subject)
            if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Symbol wurde geändert zu```').replace('@icon', groupUpdate.icon)
            if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Gruppenlink wurde geändert zu```\n@revoke').replace('@revoke', groupUpdate.revoke)
            if (groupUpdate.announce == true) text = (chats.sAnnounceOn || this.sAnnounceOn || conn.sAnnounceOn || '```Gruppe wurde geschlossen!')
            if (groupUpdate.announce == false) text = (chats.sAnnounceOff || this.sAnnounceOff || conn.sAnnounceOff || '```Gruppe wurde geöffnet!')
            if (groupUpdate.restrict == true) text = (chats.sRestrictOn || this.sRestrictOn || conn.sRestrictOn || '```Gruppe wurde alle Teilnehmer aktualisiert!')
            if (groupUpdate.restrict == false) text = (chats.sRestrictOff || this.sRestrictOff || conn.sRestrictOff || '```Gruppe ist nur für Admins!')
            //console.log('=============\n\ngroupsUpdate \n\n============\n\n' + await groupUpdate)
        }
    },
    async delete({ remoteJid, fromMe, id, participant }) {
        if (fromMe) return
        let chats = Object.entries(conn.chats).find(([user, data]) => data.messages && data.messages[id])
        if (!chats) return
        let msg = JSON.parse(chats[1].messages[id])
        let chat = global.db.data.chats[msg.key.remoteJid] || {}
        if (chat.delete) return
        this.sendButton(msg.key.remoteJid, `Erkannt, dass @${participant.split`@`[0]} eine Nachricht gelöscht hat
Um diese Funktion zu deaktivieren, geben Sie ein
*.enable delete*`.trim(), wm, 'Deaktivieren Sie diese Funktion', '.enable delete', msg, {
            mentions: [participant]
        })
        await this.delay(1000)
        this.copyNForward(msg.key.remoteJid, msg).catch(e => console.log(e, msg))
    }
}

global.dfail = async (type, m, conn) => {
    let msg = {
        manager: `Dieser Befehl kann nur vom Manager oder Owner genutzt werden‼️`,
        rowner: `Dieser Befehl kann nur vom _*Owner*_ genutzt werden!1!1!`,
        owner: `Dieser Befehl kann nur vom _*Owner*_ benutzt werden!1!1!`,
        mods: `Dieser Befehl kann nur von *Moderatoren* verwendet werden`,
        premium: 'Dieser Befehl ist nur für _*Premium*_ Mitglieder!',
        group: `Dieser Befehl kann nur in Gruppen verwendet werden!`,
        private: 'Dieser Befehl kann nur im privaten Chat verwendet werden!',
        admin: 'Dieser Befehl gilt nur für die *Admins*!',
        botAdmin: 'Machen Sie den Bot bitte zu einem *Admin*, um diesen Befehl zu verwenden!',
        unreg: 'Bitte zöger nicht diese Funktion zu nutzen, indem du das eingibst:\n\n*#reg Name.Alter*\n\nBeispiel: *#reg Nico-Pit.17*',
        nsfw: `NSFW ist nicht aktiv, bitte kontaktieren Sie das Team Bot Discussion, um diese Funktion zu aktivieren!`,
        rpg: `RPG ist nicht aktiv, bitte kontaktieren Sie Team Bot Discussion, um diese Funktion zu aktivieren!`,
        restrict: 'Diese Funktion ist *deaktiviert*!'
    }[type]
    if (msg) return conn.reply(m.chat, msg, m, { mentions: conn.parseMention(msg) })
}
global.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}
let fs = require('fs')
let chalk = require('chalk')
const { default: fetch } = require('node-fetch')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    delete require.cache[file]
    if (global.reloadHandler) console.log(global.reloadHandler())
})

function ucapan() {
    const time = moment.tz('Europe/Berlin').format('HH')
    let res = "Gute Nacht 🌙"
    if (time >= 4) {
        res = "Guten Morgen 🌄"
    }
    if (time > 10) {
        res = "Guten Vormittag ☀️"
    }
    if (time >= 15) {
        res = "Guten Nachmittag 🌅"
    }
    if (time >= 18) {
        res = "Guten Abend🌙"
    }
    return res
}
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
  }

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.thumb = 'https://c4.wallpaperflare.com/wallpaper/775/640/865/anime-anime-girls-lycoris-recoil-nishikigi-chisato-inoue-takina-hd-wallpaper-preview.jpg'

global.flaaa = [
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]

global.waifu = [
'https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',
'https://i.pinimg.com/originals/85/4d/bb/854dbbd30304cd69f305352f0183fad0.jpg',
'https://i.pinimg.com/originals/32/2c/a4/322ca456fa2cdec4b717895a65adfa8d.jpg',
'https://i.pinimg.com/originals/f2/dd/cc/f2ddccd5a1b89d2302cf75c6520c58dd.png',
'https://i.pinimg.com/originals/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg',
'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/46/ad/05/46ad0505d33a2c2359f84ed9b867a58c.jpg',
'https://i.pinimg.com/originals/23/b7/fb/23b7fb922770e139a2a57b1a443a2180.jpg',
'https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg',
'https://i.pinimg.com/originals/a4/a1/74/a4a1740e565f4205eb3f700e1936e064.jpg',
'https://i.pinimg.com/originals/f9/8d/2c/f98d2c3f64e50ba6c8efd9fdc7cf0093.png',
'https://i.pinimg.com/originals/29/a4/b4/29a4b4573f993d7d6abb45843f529892.jpg',
'https://i.pinimg.com/originals/40/de/84/40de84ce2ee376d8fae8ff5863d6edb0.jpg',
'https://i.pinimg.com/originals/b6/f5/b7/b6f5b7d59fd4f332b3820db38612a5a0.jpg',
'https://i.pinimg.com/originals/94/38/6d/94386d3c23f509dbc30341fed0363a07.jpg',
'https://i.pinimg.com/originals/b5/94/ef/b594ef0774d29f5a05cd182994aa354e.jpg',
'https://i.pinimg.com/originals/0f/ed/3f/0fed3f4c456158c506d88f5867ca93d2.jpg',
'https://i.pinimg.com/originals/1b/7a/a8/1b7aa80191b83b888e9ea6042f090763.jpg',
'https://i.pinimg.com/originals/72/7a/08/727a08cdf67b62c2ba49e7308c09a1cd.jpg',
'https://i.pinimg.com/originals/86/93/75/8693757390b9d5b83fb8e40ff9ea876f.jpg',
'https://i.pinimg.com/originals/5f/79/71/5f79713647b3e99a787ee7483715c1eb.jpg',
'https://i.pinimg.com/originals/b8/b3/f3/b8b3f397fead38a988174df75d481202.png',
'https://i.pinimg.com/originals/7a/e0/55/7ae055891f8200cd62ec76a40d47118d.jpg',
'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
'https://i.pinimg.com/originals/22/8b/ca/228bca60a07d72cac953a9c3be542bab.jpg',
'https://i.pinimg.com/originals/41/10/c6/4110c64fc91a1c85de02166f67aff7ad.jpg',
'https://i.pinimg.com/originals/45/11/41/451141522a9086f56efc0da3fdac1957.jpg',
'https://i.pinimg.com/originals/c1/4e/c7/c14ec7dffbc682f78c52ad8a295b8831.jpg',
'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
'https://i.pinimg.com/originals/1f/95/15/1f95156c3d8e2b339a22b3bad2f69a8a.png',
'https://i.pinimg.com/originals/bb/1a/12/bb1a1249dbc73736ab534fdd52bdc74c.jpg',
'https://i.pinimg.com/originals/d5/58/a7/d558a745f2452d851d480025ab341537.jpg',
'https://i.pinimg.com/originals/e7/00/0e/e7000e7e72c1b37ea7a4c780182d05d8.jpg',
'https://i.pinimg.com/originals/9e/53/a9/9e53a92ee711d979b9bdbb6212115fe0.jpg',
'https://i.pinimg.com/originals/c6/16/d9/c616d9a871ed3cd9fb6a46efb7f92d95.jpg',
'https://i.pinimg.com/originals/ac/f0/29/acf029047efffe57999fa876554cbf1d.jpg',
'https://i.pinimg.com/originals/ae/86/3b/ae863b64ca579f05008dbf027b04988f.jpg',
'https://i.pinimg.com/originals/d5/65/43/d56543a959da518e08012b4db93747bb.jpg',
'https://i.pinimg.com/originals/ed/3c/e2/ed3ce276ca71e5bfec1cf2fbfc5561e1.jpg',
'https://i.pinimg.com/originals/66/30/37/663037f00539f3bc1dbd3efeae0d700b.jpg',
'https://i.pinimg.com/originals/63/6b/7b/636b7bd0e1df03f0bf72c494cedd6f07.png',
'https://i.pinimg.com/originals/db/a4/13/dba413518c0a470a5e81cafa431281da.jpg',
'https://i.pinimg.com/originals/3b/d9/aa/3bd9aa880d23dc3262e119ca09345e99.jpg',
'https://i.pinimg.com/originals/ef/90/4e/ef904eda01a996e5a9d557a55db6da0f.png',
'https://i.pinimg.com/originals/fb/f7/a9/fbf7a92af75577e33a564ce490154c8f.jpg',
'https://i.pinimg.com/originals/16/92/89/1692897136ac3688ab9ccdbb0e54fb21.jpg',
'https://i.pinimg.com/originals/fc/51/4e/fc514e2f4c23eb96721611b483edc28c.jpg',
'https://i.pinimg.com/originals/bb/a4/98/bba49848bc4369333f4128b62fc64258.jpg',
'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/83/e5/71/83e5710c42b9e8b9e1a4b6381c4535fe.jpg',
'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
'https://i.pinimg.com/originals/32/2c/a4/322ca456fa2cdec4b717895a65adfa8d.jpg',
'https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg',
'https://i.pinimg.com/originals/16/14/9c/16149c94a7c0f753230b1edbd03ab3e6.jpg',
'https://i.pinimg.com/originals/7f/f5/46/7ff546b38e2969e578e697c44944b74f.jpg',
'https://i.pinimg.com/originals/6d/bc/61/6dbc616311268a25b0ee0e1bd4de13b6.jpg',
'https://i.pinimg.com/originals/60/34/18/603418ea5c35839914a1071e134add8b.jpg',
'https://i.pinimg.com/originals/5f/79/71/5f79713647b3e99a787ee7483715c1eb.jpg',
'https://i.pinimg.com/originals/ed/ea/37/edea37b6f876bfc8f59bbae4d43e26d7.jpg',
'https://i.pinimg.com/originals/94/38/6d/94386d3c23f509dbc30341fed0363a07.jpg',
'https://i.pinimg.com/originals/f6/20/b4/f620b4b1c2aaf096455952465db8a980.jpg',
'https://i.pinimg.com/originals/97/50/73/9750731b4b004da61d44fe01dbe93d85.jpg',
'https://i.pinimg.com/originals/a0/55/41/a055419e96bc61a5990c575af10ba99e.png',
'https://i.pinimg.com/originals/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg',
'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
'https://i.pinimg.com/originals/c4/e4/1d/c4e41d096e7585a7e6245e852ece25c2.jpg',
'https://i.pinimg.com/originals/87/cf/bc/87cfbc189e773ed9294bccfd50a4fbc7.jpg',
'https://i.pinimg.com/originals/7a/3b/e6/7a3be6cf1595fe6764b5b18b46ca576d.jpg',
'https://i.pinimg.com/originals/c5/42/f8/c542f83b992e51c6d2519f07489b1dec.jpg',
'https://i.pinimg.com/originals/96/29/1e/96291e9abbf311b8fc6c8c3f9f8ae059.jpg',
'https://i.pinimg.com/originals/e5/1a/8d/e51a8d35d2b717fa757fa2abf053a2c7.jpg',
'https://i.pinimg.com/originals/47/18/af/4718afcd517c8e7e07cc9dba48b3b770.jpg',
'https://i.pinimg.com/originals/39/2c/cb/392ccb1793c5a23783869994b1ec24b7.jpg',
'https://i.pinimg.com/originals/0f/98/5f/0f985ffbfff2650d6e3ecf8ba0eb574e.jpg',
'https://i.pinimg.com/originals/ab/f9/50/abf950c9aa1c4710437d9acc83078f87.jpg',
'https://i.pinimg.com/originals/f2/dd/cc/f2ddccd5a1b89d2302cf75c6520c58dd.png',
'https://i.pinimg.com/originals/f1/f7/fc/f1f7fca39eba7d64e50749da5406247c.jpg',
'https://i.pinimg.com/originals/71/18/96/711896c067c28814ec9ec9c25d4a3ba9.jpg',
'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
'https://i.pinimg.com/originals/8f/fe/d4/8ffed485ed8b6db07067e452f8399fff.jpg',
'https://i.pinimg.com/originals/db/b6/46/dbb6463c9134591aa79369f325877e03.jpg',
'https://i.pinimg.com/originals/9f/23/1a/9f231a6acc906f95ff3f917211b9abda.png',
'https://i.pinimg.com/originals/b9/a9/66/b9a9669f0fbbe75e780adad301601b43.jpg',
'https://i.pinimg.com/originals/86/ed/26/86ed265f2dbb22a48bbc612f59303508.png',
'https://i.pinimg.com/originals/da/ae/25/daae25409adec418a9b6f6c5dcdecd47.jpg',
'https://i.pinimg.com/originals/a4/6d/fa/a46dfad749d0577366e9ea2db6cc305e.jpg',
'https://i.pinimg.com/originals/09/5b/4d/095b4d0ce48f40eca7ad23e43e85ab9a.jpg',
'https://i.pinimg.com/originals/d9/e1/30/d9e1307a5fbbeb2a267562eab8abc063.jpg',
'https://i.pinimg.com/originals/db/cf/dc/dbcfdc263095906eabf7e06099ebaef0.png',
'https://i.pinimg.com/originals/89/14/0d/89140d3ef976904013f672fea0157b7e.png',
'https://i.pinimg.com/originals/cf/4f/cf/cf4fcf2036f0b5b974f146f2c0ba81db.jpg',
'https://i.pinimg.com/originals/93/62/9e/93629ee9ab27043076bce2b1f22f9193.jpg',
'https://i.pinimg.com/originals/99/6b/c4/996bc4049d632bdbf7d9bc24dc8081f0.png',
'https://i.pinimg.com/originals/f2/6d/35/f26d354b1421546ae993c83f5c7bcfb0.jpg',
'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
'https://i.pinimg.com/originals/08/8f/1d/088f1dc58092b60652e05cc941ee0fbd.jpg',
'https://i.pinimg.com/originals/14/17/dd/1417dd63009eea0b63252076f3b405e6.jpg',
'https://i.pinimg.com/originals/35/04/d5/3504d53c5850b3bddaa6e0e0714ccacb.jpg',
'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/44/39/17/443917c07ffd65caa7d7cd4065fb8571.jpg',
'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
'https://i.pinimg.com/originals/4a/e2/74/4ae274c828a2c719bcf9f644106d26cf.jpg',
'https://i.pinimg.com/originals/d0/cb/da/d0cbdaa334fa92f8b09d1c4d1ddc9cd2.jpg',
'https://i.pinimg.com/originals/71/16/31/711631ac52f7809f530e40f230b371a4.jpg',
'https://i.pinimg.com/originals/af/f1/1b/aff11bcfdf946a7bba1687c80515f902.jpg',
'https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg',
'https://i.pinimg.com/originals/ef/90/4e/ef904eda01a996e5a9d557a55db6da0f.png',
'https://i.pinimg.com/originals/a2/e7/73/a2e773fdb7ce0fc99eb123d8a81764ec.jpg',
'https://i.pinimg.com/originals/79/92/ed/7992ed0c9b272654938ea186cc2e3f4a.jpg',
'https://i.pinimg.com/originals/7a/08/c8/7a08c8c22066a142f22928662d9d70aa.jpg',
'https://i.pinimg.com/originals/20/b0/96/20b0962b8c62584fbcd6e7675b4782a4.jpg',
'https://i.pinimg.com/originals/51/0f/8c/510f8cb8f28b8666d560f89e2006d4b1.jpg',
'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
'https://i.pinimg.com/originals/4e/43/7b/4e437b1bbdee605d833155a97d35bef1.png',
'https://i.pinimg.com/originals/d5/a2/c9/d5a2c9cdfac835518e45b13cfc39819d.jpg',
'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
'https://i.pinimg.com/originals/16/92/89/1692897136ac3688ab9ccdbb0e54fb21.jpg',
'https://i.pinimg.com/originals/6f/9a/86/6f9a86eb31e7c5bc34cf0d1d130574e0.png',
'https://i.pinimg.com/originals/f0/67/f0/f067f00a885fab47d76d4e5423d54c35.jpg',
'https://i.pinimg.com/originals/4e/9a/7a/4e9a7a196cea58427163313b7db6363e.jpg',
'https://i.pinimg.com/originals/53/4c/6a/534c6a2e65fdb4c52824f94acc5e2195.jpg',
'https://i.pinimg.com/originals/8d/04/9a/8d049a1e6951491b24ea4c364f2459bc.jpg',
'https://i.pinimg.com/originals/22/dc/94/22dc941e60b0ace15d796a94f07d8ba7.jpg',
'https://i.pinimg.com/originals/80/bc/96/80bc968b4dcd939b60ffe2c8b0c54d75.png',
'https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',
'https://i.pinimg.com/originals/9b/36/24/9b36241f4a3b782c05eadb0805ef0dda.png',
'https://i.pinimg.com/originals/22/8b/ca/228bca60a07d72cac953a9c3be542bab.jpg',
'https://i.pinimg.com/originals/57/0e/9b/570e9b1288f1189a22b39c8e24ec957f.jpg',
'https://i.pinimg.com/originals/68/af/17/68af1781a9120a59629d0f774555185f.jpg',
'https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg',
'https://i.pinimg.com/originals/c8/0e/ee/c80eeea7a37d732d5a1b0e60464f9e18.jpg',
'https://i.pinimg.com/originals/1d/08/cb/1d08cbb9d42812984bed54e8291edaec.jpg',
'https://i.pinimg.com/originals/4e/37/02/4e37020a3e69f16cd04b246c2937b979.jpg',
'https://i.pinimg.com/originals/59/8e/bf/598ebf206f5ec366e2e32e8c6e8cffb4.jpg',
'https://i.pinimg.com/originals/cb/ef/94/cbef94975cfed070027c2175a730155d.jpg',
'https://i.pinimg.com/originals/e0/74/f8/e074f8dc647066a9f112533c789c0e42.png',
'https://i.pinimg.com/originals/60/ac/9e/60ac9edf63fcb43e3f00555cb71ae6f2.jpg',
'https://i.pinimg.com/originals/17/16/76/1716760d93dcbf7664380fd81f3133f5.jpg',
'https://i.pinimg.com/originals/a3/70/e1/a370e1f592136a385ac6cb15918d25f1.jpg',
'https://i.pinimg.com/originals/89/ee/ab/89eeabd90e54b2951459f81f51e2c791.jpg',
'https://i.pinimg.com/originals/77/0d/23/770d235d3f6dcd021bda5efdf53cca36.png',
'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',
'https://i.pinimg.com/originals/c3/1e/58/c31e58fae7f58af4d643c5a2facd49d7.jpg',
'https://i.pinimg.com/originals/0f/98/5f/0f985ffbfff2650d6e3ecf8ba0eb574e.jpg',
'https://i.pinimg.com/originals/93/0a/5f/930a5fc6f8f6e64e87ac2cc30b8430ac.jpg',
'https://i.pinimg.com/originals/1e/14/22/1e14229be49534cbf3d43b71b1738b80.jpg',
'https://i.pinimg.com/originals/35/04/d5/3504d53c5850b3bddaa6e0e0714ccacb.jpg',
'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',
'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',
'https://i.pinimg.com/originals/7f/f5/46/7ff546b38e2969e578e697c44944b74f.jpg',
'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',
'https://i.pinimg.com/originals/d5/a2/c9/d5a2c9cdfac835518e45b13cfc39819d.jpg',
'https://i.pinimg.com/originals/d7/02/54/d7025401aec66a4baf0fbcbc1054b499.jpg',
'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',
'https://i.pinimg.com/originals/ee/ee/fd/eeeefda1774a2d5dced265c1a2d398d5.jpg',
'https://i.pinimg.com/originals/c3/1e/58/c31e58fae7f58af4d643c5a2facd49d7.jpg',
'https://i.pinimg.com/originals/1f/9c/1d/1f9c1d5f4d2de0b74e81f190ab4f1792.jpg',
'https://i.pinimg.com/originals/7a/3b/e6/7a3be6cf1595fe6764b5b18b46ca576d.jpg',
'https://i.pinimg.com/originals/51/08/53/5108536a4826d3354ac3fe9c3c867cb1.png',
'https://i.pinimg.com/originals/77/cc/bc/77ccbcd52758458669ed5eadf4437111.jpg',
'https://i.pinimg.com/originals/51/0f/8c/510f8cb8f28b8666d560f89e2006d4b1.jpg',
'https://i.pinimg.com/originals/6f/9a/86/6f9a86eb31e7c5bc34cf0d1d130574e0.png',
'https://i.pinimg.com/originals/79/92/ed/7992ed0c9b272654938ea186cc2e3f4a.jpg',
'https://i.pinimg.com/originals/39/2c/cb/392ccb1793c5a23783869994b1ec24b7.jpg',
'https://i.pinimg.com/originals/3b/2c/02/3b2c020665f835b0dfdd74b8cc9ca22d.jpg',
'https://i.pinimg.com/originals/ee/cf/7c/eecf7cc7f65e5d503399cc88f0e6ef6c.jpg',
'https://i.pinimg.com/originals/4e/9a/7a/4e9a7a196cea58427163313b7db6363e.jpg',
'https://i.pinimg.com/originals/8b/f8/46/8bf8468935d529c6383771097381196a.jpg',
'https://i.pinimg.com/originals/f3/5d/ce/f35dce5f6742bd4f30033fe7b51335cc.jpg',
'https://i.pinimg.com/originals/94/a6/69/94a6692d5bd9ba0bbd80ba1e4122b2f9.jpg',
'https://i.pinimg.com/originals/8f/55/04/8f55043dfd9d244f172077bdc0304c6a.png',
'https://i.pinimg.com/originals/89/ee/ab/89eeabd90e54b2951459f81f51e2c791.jpg',
'https://i.pinimg.com/originals/83/5a/2e/835a2e582d1f803f03ab3a3c3e58b694.jpg',
'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',
'https://i.pinimg.com/originals/e2/f1/0e/e2f10ead12c9a2d7c0bb29442604f43d.jpg',
'https://i.pinimg.com/originals/f5/2a/09/f52a09910f1cad9b5b01d79a620870dc.jpg',
'https://i.pinimg.com/originals/d9/e1/30/d9e1307a5fbbeb2a267562eab8abc063.jpg',
'https://i.pinimg.com/originals/6a/4d/11/6a4d11cb5bab1466cf1ccb8c6c4f9eb6.jpg',
'https://i.pinimg.com/originals/f3/b7/37/f3b7376c2a574b8619c197bce72d1f63.png',
'https://i.pinimg.com/originals/93/0a/5f/930a5fc6f8f6e64e87ac2cc30b8430ac.jpg',
'https://i.pinimg.com/originals/30/78/75/307875a9132c6e704eec94bc31fd4f71.jpg',
'https://i.pinimg.com/originals/12/fa/7d/12fa7df7ba74ac00d846d8d490f7c8a4.jpg',
'https://i.pinimg.com/originals/68/f6/f3/68f6f37335624f89cda17ab928f51138.jpg',
'https://i.pinimg.com/originals/de/f6/e7/def6e7ce26ad6a1096e8b1ef395a1904.jpg',
'https://i.pinimg.com/originals/cc/17/be/cc17be94cd520baa4722e0ca2329c2e9.jpg',
'https://i.pinimg.com/originals/b3/c5/d1/b3c5d1076a9a48c075c8a92987b03bf3.jpg',
'https://i.pinimg.com/originals/2c/e6/02/2ce6025d9d1736cf3e67db1fd2bdaf35.jpg',
'https://i.pinimg.com/originals/31/07/53/310753699042b254fdfa0472a2675158.jpg',
'https://i.pinimg.com/originals/6b/87/9c/6b879cc29b5df23941dab4f4aafabcbd.jpg',
'https://i.pinimg.com/originals/52/90/0b/52900bab0f969d9d68207f6ad8510882.jpg',
'https://i.pinimg.com/originals/25/7e/db/257edb1b91a127bcf91cc2ea6b29edaf.jpg',
'https://i.pinimg.com/originals/63/6b/7b/636b7bd0e1df03f0bf72c494cedd6f07.png',
'https://i.pinimg.com/originals/8d/ad/58/8dad58f3b258b3d7f2e913cb4561d99f.jpg',
'https://i.pinimg.com/originals/8d/04/9a/8d049a1e6951491b24ea4c364f2459bc.jpg',
'https://i.pinimg.com/originals/fd/21/41/fd21419275236bb153de3c8dcbbf3bf9.jpg',
'https://i.pinimg.com/originals/80/4f/1a/804f1a05f9996c96a2d492b4854b7fd5.jpg'
]
