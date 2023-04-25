let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Anfrage Auf einen Gruppenjoin`
    if (text.length < 1) throw `Der Bericht ist zu kurz, mindestens 1 Zeichen!`
    if (text.length > 10000) throw `Bericht ist zu lang, maximal 10000 Zeichen!`
    let teks =   `*—『 JOIN ANFRAGE 』—* \n\n*Join Nachricht:*\n${text}`
    conn.reply("120363043316538986"+ '@g.us', m.quoted ? teks + m.quoted.text : teks, null, {
    	mentions: [m.sender]
    })
    conn.reply(m.chat, `_Nachricht an Bot-Besitzer gesendet, wenn ${command.toLowerCase()} zu wenig nutzer hat lassen wir den Bot nicht rein.`, m)
}
handler.help = ['join'].map(v => v + '<link>')
handler.tags = ['grup']
handler.command = /^(join)$/i
handler.limit = false
handler.private = true
handler.group = false

module.exports = handler
