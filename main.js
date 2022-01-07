const Discord   = require('discord.js');
const mongoose  = require("mongoose")

require('dotenv').config();

const mongooseURL = ""

const { Intents } = Discord;

const intents = new Intents();

for (const intent of Object.keys(Intents.FLAGS)) {
    intents.add(intent);
}

const client = new Discord.Client({
    intents: intents
});


const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


// Blacklisted Words

client.on('messageCreate', async message => {
    if (message.channel.type === 'dm' || message.author.bot) return;

    let words = ["nigger", "n i g g e r", "nigga", "n i g g a", "faggot", "f a g g o t", "paki", "coon", "kys", "k y s", "faggit", "nonce", "n o n c e", "niqqer"]

    let foundInText = false;
    for (var i in words) {
        if (message.content.toLowerCase().includes(words[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
        let newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setDescription(`<@${message.author.id}> That word is not allowed here`)
        let msg = await message.channel.send({ embeds: [newEmbed] })
        message.delete()
        setTimeout(() => msg.delete(), 10000);
    }
})


// Malicious Attack

client.on('messageCreate', async message => {
    if (message.channel.type === 'dm' || message.author.bot) return;
    if(!message.member) return;
    let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
    let mememberTarget = message.member

    let words = ["discocrd.gift", "diskord.ru.com", "stearmcornmunity.ru", "dicsord-get.xyz/p=26837", "dlsscord-app.club/welcome", "discrod-gifts.club/nitro", "dicsord-present.ru/airdrop", "dlscordfull.ru/giftfromsteam", "discord-presents.ru/airdrop", "dlscord-glft.me/KHIPhQAnPHUmA"]

    let foundInText = false;
    for (var i in words) {
        if (message.content.toLowerCase().includes(words[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
        let newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setDescription(`<@${message.author.id}> Malicious attack detected, DM a staff member to unmute you when the attack is over.`)
        let msg = await message.channel.send({ embeds: [newEmbed] })
        message.delete()
        mememberTarget.roles.add(muteRole.id);
        const logEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setAuthor({
                name: `${message.author.tag} has been muted`,
                iconURL: message.author.displayAvatarURL({ dynamic: true })
            })
            .setDescription(`**Reason:** Malicious attack\n\n**Muted by:** <@919372429787283526>`)
            .setTimestamp();
        message.guild.channels.cache.get('922511741965979700').send({ embeds: [logEmbed] });
    }
})


client.on("messageCreate", (message) => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return false;

    if (message.mentions.has(client.user.id)) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setDescription(`<@${message.author.id}> Ping me again and see what happens`)
        message.channel.send({ embeds: [newEmbed] });
    }
});


// Praise

client.on('messageCreate', async message => {
    if (message.channel.type === 'dm' || message.author.bot) return;

    let words = ["-1"]

    let foundInText = false;
    for (var i in words) {
        if (["922511739961106515"].includes(message.channel.id))
        if (message.content.toLowerCase().includes(words[i].toLowerCase())) foundInText = true;
    }

    if (foundInText) {
        let newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setDescription(`<@${message.author.id}> This is a praise only channel, if you would like to report a lawyer create a ticket in <#922511739961106516>`)
        let msg = await message.channel.send({ embeds: [newEmbed] });
        message.delete()
        setTimeout(() => msg.delete(), 30000);
    }
})

client.login(process.env.DISCORD_TOKEN);
mongoose.connect(process.env.MONGOOSE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
)