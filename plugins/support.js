const { getJson, getBuffer, command, isPrivate, sleep } = require("../lib/");

command({
    pattern: "help",
    fromMe: isPrivate,
    desc: "Anjan Support",
    type: "support"
}, async (message) => {
    const name = '🎗𝐀𝐍𝐉𝐀𝐍-𝐗𝐃✨️', title = "🔮𝐀𝐍𝐉𝐀𝐍-𝙎𝙐𝙋𝙋𝙊𝙍𝙏🔮", number = '919883457657', body = "★𝐀𝐍𝐉𝐀𝐍-𝐗𝐃★";
    const image = "https://telegra.ph/file/0c7a2c47fa748d97402c8.jpg", sourceUrl = 'https://github.com/Anjan-Ser/ANJAN-XD';
    const logo = await getBuffer(image);
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG: 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐀𝐍𝐉𝐀𝐍-𝐗𝐃🎉;\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
    const adon = { title, body, thumbnail: logo, mediaType: 1, mediaUrl: sourceUrl, sourceUrl, showAdAttribution: true, renderLargerThumbnail: false };
    await message.client.sendMessage(message.jid, { contacts: { displayName: name, contacts: [{ vcard }] }, contextInfo: { externalAdReply: adon } }, { quoted: message });
});
