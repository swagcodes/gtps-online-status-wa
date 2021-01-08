const { Client } = require('whatsapp-web.js');
const client = new Client();
const { exec } = require("child_process");
const code = require("qrcode-terminal")
const config = require("./setbot.json")
const fs = require("fs")

client.on('qr', (qr) => {
    code.generate(qr, {small: true});
})
    
client.on('ready', () => {
    console.log("Bot is Running")
})

client.on('message', msg => {
    if (msg.body == "!status")
    {
        fs.readFile(`onlineplayer.txt`, 'utf8', (err,data) => {
            if (err)
            {
                msg.reply("This server doensn't support !online")
            }
            msg.reply("📊server status: ON\n📊player online: "+ data)
        })
    }
})
client.initialize();
