module.exports = {
    name: 'deny',
    permissions: [],
    description: '',
    execute(client, message, args, cmd, Discord) {
        const target = message.mentions.users.first() || client.users.cache.find(user => user.id === args[0]);
        const reason = args.slice(1).join(' ') || "Unspecified";

        if (!message.member.roles.cache.some(r=>["922511739495534619", "922511739495534616", "922511739495534612", "922511739482935322"].includes(r.id))) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription("You do not have permissions to use this command")
            return message.channel.send({ embeds: [newEmbed] });
        }
        
        if (target) {
            let memberTarget = message.guild.members.cache.get(target.id);
            const dmEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`Hey ${memberTarget.user.username}`)
                .setDescription(`Your CMG Lawyers application has unfortunately been denied by <@${message.author.id}>\n\n**Reason:** ${reason}`)
                .setFooter('Note: This is an automated message, please do not reply directly to this Bot')
            target.send({ embeds: [dmEmbed] });
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription(`<@${memberTarget.user.id}> has been denied\n\n**Reason:** ${reason}`)
                message.channel.send({ embeds: [newEmbed] });
            const logEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${memberTarget.user.tag}'s Lawyer application has been denied`, memberTarget.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Reason:** ${reason}\n\n**Denied by:** <@${message.author.id}>`)
                .setTimestamp();
            message.guild.channels.cache.get('923359512537223248').send({ embeds: [logEmbed] });
        } else {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription('You cant warn that user')
                message.channel.send({ embeds: [newEmbed] });
        }
    }
}