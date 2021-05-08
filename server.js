const ini = require('ini');
const fs = require('fs');
const chalk = require('chalk');
const start = Date.now();
const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'))
var RPC = require("discord-rpc")
const client = new RPC.Client({ transport: 'ipc' })



console.log("Stragin Login..")

setTimeout(() => {
    const millis = Date.now() - start;
client.on('ready', () => {
        console.log("");
        console.log(chalk.rgb(13, 167, 13).bold(`You have entered and everything is ok, Do not go out of this window.`));
        client.setActivity({
        details: `${config.additions.Details}`,
        state: `${config.additions.Status}`,
        startTimestamp: config.usertime.Timer ? Number(start) : undefined,
        largeImageKey: `${config.assets.LargeImage}`,
        largeImageText: `${config.assets.LargeText}`,
        smallImageKey: `${config.assets.SmallImage}`,
        smallImageText: `${config.assets.SmallText}`,
        buttons: [{ label: `${config.button.ButtonName1}`, url: `${config.button.ButtonURL1}` } , { label: `${config.button.ButtonName2}`, url: `${config.button.ButtonURL2}`}],
    });
});

client.login({
    clientId: `${config.compulsory.ClientID}`
}).catch(err => {
    console.log(chalk.rgb(197, 16, 31).bold(`\nERROR: There is an error in ClientID, check it out`));
})
}, 3000);

      














