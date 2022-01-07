module.exports = {
    name: 'embed',
    permissions: ["ADMINISTRATOR"],
    description: '',
    execute(client, message, args, cmd, Discord) {

        let Query = args.join(' ');
        if (!Query) return message.channel.send(new MessageEmbed()
        .setColor('#ffd700')
        .setDescription('Please specify a suggestion')
        )

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setDescription(`${Query}`)
        message.channel.send({ embeds: [newEmbed] })
            .then((msg) => {
                setTimeout(() => message.delete(), 0);
            })
    }
}