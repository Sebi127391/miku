const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `Antwortbild mit Befehl\n\n${usedPrefix + command} <${atas ? atas : 'Top-text'}>|<${bawah ? bawah : 'Fußzeile'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `__*Mime ${mime} wird nicht unterstützt!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    conn.sendStimg(m.chat, meme, m, { packname: packname, author: author })

}
handler.help = ['stickermeme <teks>|<teks>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?me(me)?)$/i

handler.limit = false

module.exports = handler
