let handler = async (m, { conn, text, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if ((isOwner || isAdmin)) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Begrüßung erfolgreich gesetzt\n@user (Erwähnung)\n@subject (Gruppentitel)\n@desc (Gruppenbeschreibung)')
  } else throw `Wo ist der Text?\n\nBeispiel:\n${usedPrefix + command} Hallo, @user!\nWillkommen in der @subject-Gruppe\n\n@desc`
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner', 'group']
handler.command = /^(setwelcome|setw)$/i
handler.group = true

module.exports = handler
