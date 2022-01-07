module.exports = {
    name: 'sdeny',
    aliases: [],
    permissions: [],
    description: 'creates a suggestion!',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.roles.cache.has('922511739495534619')) return message.channel.send(new MessageEmbed()
        .setColor('#ffd700')
        .setDescription("You can't use this command")
        )

        const messageID = args[0];
        if (!messageID) return message.reply(new MessageEmbed()
        .setColor('#ffd700')
        .setDescription("**Please state the message ID**\n\n Example: `!deny <Message ID>`")
        )

        try {
            const suggestionChannel = message.guild.channels.cache.get('922511739961106513');
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);
            
            const data = suggestedEmbed.embeds[0];
            const acceptEmbed = new Discord.MessageEmbed()
                .setAuthor(data.author.name, data.author.iconURL)
                .setThumbnail(data.author.iconURL)
                .setDescription(data.description)
                .setColor('#ffd700')
                .addField("Status", '❌ Suggestion Denied')
                .setTimestamp(data.timestamp);

            suggestedEmbed.edit({ embeds: [acceptEmbed] });

            const user = await client.users.cache.find((u) => u.tag === data.author.name);
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription('Your suggestion has been denied')
            user.send({ embeds: [newEmbed] }).then((msg) =>{
                message.delete();
            }).catch((err)=>{
                throw err;
            });
        } catch (err) {
            console.log(err);
        }
    }
}