const Discord   = require("discord.js")
const mongoose  = require("mongoose")

const ms    = require("ms")
const pms   = require("pretty-ms")

const {
    Client, MessageEmbed
} = Discord

const Tools = require('../../Tools/tools.js')

const { getUser, updateCases } = Tools
const { lawyerRoles } = require("../../Data.json")

module.exports = {
    name        : "remcase",
    description : "Removes a case from a user",

    async execute(client, message, args, cmd) {
        const { User } = await getUser(message)

        if (!lawyerRoles.find(role => message.member.roles.cache.has(role))) return message.channel.send({
            content: `${message.author} You can't use this command`
        })

        if (!User) return message.channel.send({
            content: `${message.author} You need to mention a user or provide their user id!`
        })

        const CasesCount = Number(args[1])
        if (!CasesCount) return message.channel.send({
            content: `${message.author} You need to give me a amount of cases to remove from **${User.tag}**`
        })

        let Status = args[2] || ""

        if (!["win", "lost"].some(op => op === Status.toLowerCase())) {
            const sentMessage = await message.channel.send({
                content: `${message.author} Select the case type`,
                components: [
                    new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageButton()
                        .setLabel("Win")
                        .setStyle("SUCCESS")
                        .setCustomId(`win`),

                        new Discord.MessageButton()
                        .setLabel("Lost")
                        .setStyle("DANGER")
                        .setCustomId(`lost`)
                    )
                ]
            })

            try {
                const int = await sentMessage.awaitMessageComponent({
                    filter  : i => i.user.id === message.author.id,
                    time    : ms("5 minutes")
                })

                await int.deferUpdate()

                const Status = int.customId.toUpperCase()

                await updateCases(User.id, CasesCount, 'REMOVE', Status)

                await int.editReply({
                    content: `Alright, I have removed **${CasesCount}** ${Status.toLowerCase()} cases from **${User.tag}**`,

                    components: []
                })
            } catch {
                await sentMessage.edit({
                    content: `${message.author} You did not respond in time`,
                    components: []
                })

                return
            }
        } else {
            await updateCases(User.id, CasesCount, 'REMOVE', Status.toUpperCase())

            await message.channel.send({
                content: `Alright, I have removed **${CasesCount}** ${Status.toLowerCase()} cases from **${User.tag}**`
            })
        }
    }
}