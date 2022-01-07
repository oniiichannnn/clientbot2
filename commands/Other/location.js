module.exports = {
    name: 'location',
    aliases: [],
    permissions: [],
    description: 'Bot Dev',
    execute(client, message, args, cmd, Discord) {
        const missionrow = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setTitle('Mission Row Police Station')
            .setImage('https://cdn.discordapp.com/attachments/922529290715803719/927010510732423188/mission_2.PNG')
        const vespucci = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setTitle('Vespucci Police Station')
            .setImage('https://cdn.discordapp.com/attachments/922529290715803719/927010510166184016/vesp_2.PNG')
        const sandy = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setTitle('Sandy Shores Police Station')
            .setImage('https://cdn.discordapp.com/attachments/922529290715803719/927010510388477992/Capture_2.PNG')
        const question = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setTitle('Which Police Station are you at?')
        message.channel.send({ embeds: [missionrow, vespucci, sandy, question] });
    }
}