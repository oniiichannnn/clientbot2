const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'suggest',
    aliases: [],
    permissions: [],
    description: 'creates a suggestion!',
    execute(client, message, args, cmd, Discord) {
        let suggestionQuery = args.join(' ');
        if (!suggestionQuery) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription('Please specify a suggestion')
            return message.channel.send({ embeds: [newEmbed] })}


            const embed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Suggestion:**\n${suggestionQuery}`)
                .addField("Status", '📊 Waiting for community feedback, please vote')
                .setTimestamp();

            message.guild.channels.cache.get('922511739961106513').send({ embeds: [embed] }).then((messageEmbed) => {
                messageEmbed.react('👍')
                messageEmbed.react('👎')
                message.delete();
            }).catch((err) => {
                throw err;
            });
        }
    }