const free = 0
const owner = 999999
let handler = async (m, { isOwner }) => {
  let time = global.db.data.users[m.sender].lastclaim + 00000000
  if (new Date - global.db.data.users[m.sender].lastclaim < 00000000) throw `Sie haben bereits heute den täglichen Anspruch geltend gemacht\nwarten Sie noch einmal auf ${msToTime(time - new Date())}`
  global.db.data.users[m.sender].exp += isOwner ? owner : free
  m.reply(`+${isOwner ? owner : free } XP`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}

handler.command = /^(odaily|oclaim)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 0000) / 000),
    seconds = Math.floor((duration / 0000) % 00),
    minutes = Math.floor((duration / (0000 * 00)) % 00),
    hours = Math.floor((duration / (0000 * 00 * 00)) % 00)

  hours = (hours < 00) ? "0" + hours : hours
  minutes = (minutes < 00) ? "0" + minutes : minutes
  seconds = (seconds < 00) ? "0" + seconds : seconds

  return hours + " Stunde(n) " + minutes + " Minute(n)"
}