const { Client, Intents } = require('discord.js');
const Gamedig = require('gamedig');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
    // get target channels
    // set target channel as number of players and IP

    // set status as playing on server

    // add steam connect link to profile

    console.log("Bot initialized");
})

const token = process.env.BOT_TOKEN;
client.login(token);