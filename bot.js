const { Client, Intents } = require('discord.js');
const Gamedig = require('gamedig');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', async () => {
    const serverIP = process.env.SERVER_IP;

    const guild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
    const playerChannel = guild.channels.cache.get(process.env.PLAYERCOUNT_CHANNEL_ID);
    const ipChannel = guild.channels.cache.get(process.env.IP_CHANNEL_ID);
    const pingInterval = process.env.PING_INTERVAL;

    setInterval(async () => {
        try {
            const serverPing = await Gamedig.query({
                type: "garrysmod",
                host: serverIP.split(":")[0],
                port: serverIP.split(":")[1]
            });
    
            const playerCount = serverPing.players.length;
            const maxPlayers = serverPing.maxplayers;
        
            playerChannel.setName(`${playerCount}/${maxPlayers} players online`)
            ipChannel.setName(process.env.SERVER_IP);
        
            client.user.setActivity(`on AlienRP - ${playerCount}/${maxPlayers}`)
        }
        catch (ex) {
            console.log(ex);
        }
    }, pingInterval);

    console.log("Bot initialized");
})

const token = process.env.BOT_TOKEN;
client.login(token);