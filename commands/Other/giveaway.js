module.exports = {
    name: 'giveaway',
    aliases: [],
    execute(client, message, args, cmd, Discord){
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setDescription('**Giveaway:** https://discord.com/channels/922511739482935316/922888663438860309/927680621730492486')
        message.channel.send({ embeds: [newEmbed] });
    }
}