module.exports = {
    name: 'csembed',
    permissions: ["ADMINISTRATOR"],
    description: '',
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setDescription('**Coming Soon 👀**')
        message.channel.send({ embeds: [newEmbed] })
            .then((msg) => {
                setTimeout(() => message.delete(), 0);
            })
    }
}