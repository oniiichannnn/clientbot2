module.exports = {
    name: 'suggestionembed',
    permissions: ["ADMINISTRATOR"],
    description: 'Embed',
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setTitle('Suggestions')
            .setDescription('**To make a suggestion type `!suggest <Your Suggestion>` in <#922511739805900839>**')

        message.channel.send({ embeds: [newEmbed] })
            .then((msg) => {
                setTimeout(() => message.delete(), 0);
            })
    }
}