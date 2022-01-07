const ms = require('ms');
module.exports = {
    name: 'tempmute',
    description: "Mute member",
    execute(client, message, args, cmd, Discord) {
        const target = message.mentions.users.first() || client.users.cache.find(user => user.id === args[0]);
        const reason = args.slice(2).join(' ') || "Unspecified";
        if (!message.member.roles.cache.some(r=>["922511739495534619", "922511739495534616", "922511739495534612", "922511739482935322"].includes(r.id))) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription("You do not have permission to use this command")
            return message.channel.send({ embeds: [newEmbed] });
        }
        
        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                const newEmbed = new Discord.MessageEmbed()
                    .setColor('#ffd700')
                    .setDescription(`You didn't specify a time`)
                return message.channel.send({ embeds: [newEmbed] });
            }
            memberTarget.roles.add(muteRole.id);
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${memberTarget.user.tag} has been muted for ${ms(ms(args[1]))}`, memberTarget.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Reason:** ${reason}\n\n**Muted by:** <@${message.author.id}>`)
            message.channel.send({ embeds: [newEmbed] });
            const logEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${memberTarget.user.tag} has been muted for ${ms(ms(args[1]))}`, memberTarget.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Reason:** ${reason}\n\n**Muted by:** <@${message.author.id}>`)
                .setTimestamp();
            message.guild.channels.cache.get('922511741965979700').send({ embeds: [logEmbed] });

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));
        } else {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription('Cant find that user')
            message.channel.send({ embeds: [newEmbed] });
        }
    }
}