// module.exports = {
//     name: 'unban',
//     permissions: ["BAN_MEMBERS"],
//     description: 'Ban member',
//     execute(client, message, args, cmd, Discord) {
//         const target = message.mentions.users.first() || client.users.cache.find(user => user.id === args[0]);
//         if (target) {
//             let memberTarget = message.guild.members.cache.get(target.id);
//             memberTarget.unban()
//             const newEmbed = new Discord.MessageEmbed()
//                 .setColor('#ffd700')
//                 .setAuthor(`${memberTarget.user.tag} has unbeen banned`, memberTarget.user.displayAvatarURL({ dynamic: true }))
//                 .setDescription(`**Unbanned by:** <@${message.author.id}>`)
//             message.channel.send({ embeds: [newEmbed] });

//             const logEmbed = new Discord.MessageEmbed()
//                 .setColor('#ffd700')
//                 .setAuthor(`${memberTarget.user.tag} has been unbanned`, memberTarget.user.displayAvatarURL({ dynamic: true }))
//                 .setDescription(`**Unbanned:** <@${message.author.id}>`)
//                 .setTimestamp();
//             message.guild.channels.cache.get('922511741965979700').send({ embeds: [logEmbed] });
//         } else {
//             const newEmbed = new Discord.MessageEmbed()
//                 .setColor('#ffd700')
//                 .setDescription('You cant unban that user')
//             message.channel.send({ embeds: [newEmbed] });
//         }
//     }
// }