let handler = async (m, { conn, text, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if ((isOwner || isAdmin)) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('Auf Wiedersehen erfolgreich gesetzt\n@user (Erwähnung)')
  } else throw 'Wo ist der Text?\n\nBeispiel:\n' + `${usedPrefix + command} Aufwiedersehen @user!`
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']
handler.command = /^(setbye|sbye)$/i
handler.group = true
handler.botAdmin = true

module.exports = handler
