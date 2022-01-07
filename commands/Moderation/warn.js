module.exports = {
    name: 'warn',
    description: 'Warns a user',
    execute(client, message, args, cmd, Discord) {
        const target = message.mentions.users.first() || client.users.cache.find(user => user.id === args[0]);
        const reason = args.slice(1).join(' ') || "Unspecified";
        if (!message.member.roles.cache.some(r=>["922511739495534619", "922511739495534616", "922511739495534612", "922511739482935322"].includes(r.id))) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription("You do not have permission to use this command")
            return message.channel.send({ embeds: [newEmbed] });
        }
        
        if (target) {
            let memberTarget = message.guild.members.cache.get(target.id);
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${memberTarget.user.tag} has been warned`, memberTarget.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Reason:** ${reason}\n\n**Warned by:** <@${message.author.id}>`)
            message.channel.send({ embeds: [newEmbed] });

            const logEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${memberTarget.user.tag} has been warned`, memberTarget.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Reason:** ${reason}\n\n**Warned by:** <@${message.author.id}>`)
                .setTimestamp();
            message.guild.channels.cache.get('922511741965979700').send({ embeds: [logEmbed] });
        } else {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription('You cant warn that user')
            message.channel.send({ embeds: [newEmbed] });
        }
    }
}