module.exports = {
    name: 'rulesembed',
    permissions: ["ADMINISTRATOR"],
    description: '',
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setTitle('Discord Rules')
            .setDescription(`**1. Be respectful**\nYou must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.\n\n**2. No Inappropriate Language**\nThe use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.\n\n**3. No spamming**\nDon't send a lot of small messages right after each other. Do not disrupt chat by spamming.\n\n**4. No pornographic/adult/other NSFW material**\nThis is a community server and not meant to share this kind of material.\n\n**5. No advertisements**\nWe do not tolerate any kind of advertisements, whether it be for other communities or streams. You can post your content in the media channel if it is relevant and provides actual value (Video/Art)\n\n**6. No offensive names and profile pictures**\nYou will be asked to change your name or picture if the staff deems them inappropriate.\n\n**7. Server Raiding**\nRaiding or mentions of raiding are not allowed.\n\n**8. Direct & Indirect Threats**\nThreats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.\n\n**9. Follow the Discord Community Guidelines**\nYou can find them here: https://discordapp.com/guidelines\n\n**10. Do not join voice chat channels without permission of the people already in there**\nIf you see that they have a free spot it is alright to join and ask whether they have an open spot, but leave if your presence is not wanted by whoever was there first.\n\n**The Admins and Mods will Mute/Kick/Ban per discretion. If you feel mistreated dm an Admin and we will resolve the issue.**\n\nAll Channels will have pinned messages explaining what they are there for and how everything works. If you don't understand something, feel free to ask!\n\n**Your presence in this server implies accepting these rules, including all further changes. These changes might be done at any time without notice, it is your responsibility to check for them.**`)

        message.channel.send({ embeds: [newEmbed] })
            .then((msg) => {
                setTimeout(() => message.delete(), 0);
            })
    }
}