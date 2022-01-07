const { MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")
const delay = require('delay')

module.exports = async (Discord, client, interaction, user, message) => {
    await interaction.deferUpdate();
    if (interaction.isButton()) {

        // Request A Lawyer

        if (interaction.customId === 'lawyer') {
            const channel = await interaction.guild.channels.create(`🎫│${interaction.user.username}`);
            await channel.setParent('922511739961106518')

            channel.permissionOverwrites.edit(interaction.message.guild.id, {
                VIEW_CHANNEL: false,
            });
            channel.permissionOverwrites.edit(interaction.user.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
            }).then(interaction.followUp({ content: `We will be right with you in ${channel}`, ephemeral: true }))

            await delay(500)

            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setTitle('Request A Lawyer')
                .setDescription(`Hey <@${interaction.user.id}>, a lawyer will be with you soon. While you wait please fill in the template below.\n\nWhat police station are you at:\nWhy have you been arrested:`)
            const row = new MessageActionRow().addComponents(
                new MessageButton()
                    .setCustomId("lawyerclose")
                    .setLabel("🔒 Close Ticket")
                    .setStyle("SECONDARY"),
                new MessageButton()
                    .setCustomId("lawyerclaim")
                    .setLabel("✋ Claim Ticket")
                    .setStyle("SECONDARY")
            );

            channel.send({ content: `<@&922511739495534613><@&922511739495534614><@&922511739495534615><@&922511739495534616><@&922511739495534619>`, embeds: [newEmbed], components: [row] }).then((msg) => msg.pin())

            const logEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${interaction.user.tag}  has created a ticket`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Category:** Request A Lawyer\n\n**Ticket:** <#${channel.id}>`)
                .setTimestamp();
            interaction.guild.channels.cache.get('922511741965979701').send({ embeds: [logEmbed] });
        }




        if (interaction.customId === 'lawyerclose') {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription('Closing this ticket in 5 seconds')
            let msg = await interaction.channel.send({ embeds: [newEmbed] })
            setTimeout(() => interaction.channel.setParent('922511739961106519'), 5000)
            setTimeout(() => msg.delete(), 5000)

            await delay(5000)

            const closedEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription(`Ticket closed by <@${interaction.user.id}>`)
            interaction.channel.send({ embeds: [closedEmbed] })

            const logEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${interaction.user.tag} has closed a ticket`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Category:** Request A Lawyer\n\n**Ticket:** <#${interaction.channel.id}>`)
                .setTimestamp();
            interaction.guild.channels.cache.get('922511741965979701').send({ embeds: [logEmbed] });
        }



        if (interaction.customId === 'lawyerclaim') {
            const closedEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription(`Ticket claimed by <@${interaction.user.id}>`)
            interaction.channel.send({ embeds: [closedEmbed] })

            const logEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${interaction.user.tag} has claimed a ticket`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Category:** Request A Lawyer\n\n**Ticket:** <#${interaction.channel.id}>`)
                .setTimestamp();
            interaction.guild.channels.cache.get('922511741965979701').send({ embeds: [logEmbed] });
        }



        // Request A Judge


        if (interaction.customId === 'judge') {
            const channel = await interaction.guild.channels.create(`🎫│${interaction.user.username}`);
            await channel.setParent('925062757823430737')

            channel.permissionOverwrites.edit(interaction.message.guild.id, {
                VIEW_CHANNEL: false,
            });
            channel.permissionOverwrites.edit(interaction.user.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
            }).then(interaction.followUp({ content: `We will be right with you in ${channel}`, ephemeral: true }))

            await delay(500)

            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setTitle('Request A Judge')
                .setDescription(`Hey <@${interaction.user.id}>, a judge will be with you soon. While you wait please fill in the template below.\n\nWhat is the court case about:\nWhat time will the court case take place:`)
            const row = new MessageActionRow().addComponents(
                new MessageButton()
                    .setCustomId("judgeclose")
                    .setLabel("🔒 Close Ticket")
                    .setStyle("SECONDARY"),
                new MessageButton()
                    .setCustomId("judgeclaim")
                    .setLabel("✋ Claim Ticket")
                    .setStyle("SECONDARY")
            );

            channel.send({ content: `<@&924851655151857714><@&922511739495534619>`, embeds: [newEmbed], components: [row] }).then((msg) => msg.pin())

            const logEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${interaction.user.tag}  has created a ticket`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Category:** Request A Judge\n\n**Ticket:** <#${channel.id}>`)
                .setTimestamp();
            interaction.guild.channels.cache.get('922511741965979701').send({ embeds: [logEmbed] });
        }




        if (interaction.customId === 'judgeclose') {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription('Closing this ticket in 5 seconds')
            let msg = await interaction.channel.send({ embeds: [newEmbed] })
            setTimeout(() => interaction.channel.setParent('925062924962267146'), 5000)
            setTimeout(() => msg.delete(), 5000)

            await delay(5000)

            const closedEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription(`Ticket closed by <@${interaction.user.id}>`)
            interaction.channel.send({ embeds: [closedEmbed] })

            const logEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${interaction.user.tag} has closed a ticket`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Category:** Request A Judge\n\n**Ticket:** <#${interaction.channel.id}>`)
                .setTimestamp();
            interaction.guild.channels.cache.get('922511741965979701').send({ embeds: [logEmbed] });
        }





        if (interaction.customId === 'judgeclaim') {
            const closedEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription(`Ticket claimed by <@${interaction.user.id}>`)
            interaction.channel.send({ embeds: [closedEmbed] })

            const logEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${interaction.user.tag} has claimed a ticket`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Category:** Request A Lawyer\n\n**Ticket:** <#${interaction.channel.id}>`)
                .setTimestamp();
            interaction.guild.channels.cache.get('922511741965979701').send({ embeds: [logEmbed] });
        }


        // Report A Lawyer

        if (interaction.customId === 'report') {
            const channel = await interaction.guild.channels.create(`🎫│${interaction.user.username}`);
            await channel.setParent('922511740703481866')

            channel.permissionOverwrites.edit(interaction.message.guild.id, {
                VIEW_CHANNEL: false,
            });
            channel.permissionOverwrites.edit(interaction.user.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
            }).then(interaction.followUp({ content: `We will be right with you in ${channel}`, ephemeral: true }))

            await delay(500)

            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setTitle('Report A Lawyer')
                .setDescription(`Hey <@${interaction.user.id}>, support will be with you soon. While you wait please let us know why you have created this ticket today.`)
            const row = new MessageActionRow().addComponents(
                new MessageButton()
                    .setCustomId("reportclose")
                    .setLabel("🔒 Close Ticket")
                    .setStyle("SECONDARY")
            );
            channel.send({ embeds: [newEmbed], components: [row] });

            const logEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${interaction.user.tag}  has created a ticket`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Category:** Report A Lawyer\n\n**Ticket:** <#${channel.id}>`)
                .setTimestamp();
            interaction.guild.channels.cache.get('922511741965979701').send({ embeds: [logEmbed] });
        }
        if (interaction.customId === 'reportclose') {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription('Closing this ticket in 5 seconds')
            let msg = await interaction.channel.send({ embeds: [newEmbed] })
            setTimeout(() => interaction.channel.setParent('922511739961106519'), 5000)
            setTimeout(() => msg.delete(), 5000)

            await delay(5000)

            const closedEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription(`Ticket closed by <@${interaction.user.id}>`)
            interaction.channel.send({ embeds: [closedEmbed] })

            const logEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setAuthor(`${interaction.user.tag} has closed a ticket`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`**Category:** Report A Lawyer\n\n**Ticket:** <#${interaction.channel.id}>`)
                .setTimestamp();
            interaction.guild.channels.cache.get('922511741965979701').send({ embeds: [logEmbed] });
        }
        if (interaction.customId === 'court-notification-add') {
            let courtRole = interaction.guild.roles.cache.find(r => r.id === "923265643636228106");
            interaction.member.roles.add(courtRole).then(interaction.followUp({ content: 'Role added', ephemeral: true }))
        }
        if (interaction.customId === 'court-notification-remove') {
            let courtRole = interaction.guild.roles.cache.find(r => r.id === "923265643636228106");
            interaction.member.roles.remove(courtRole).then(interaction.followUp({ content: 'Role removed', ephemeral: true }))
        }
    }
}