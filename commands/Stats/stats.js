const Discord   = require("discord.js")
const mongoose  = require("mongoose")

const ms    = require("ms")
const pms   = require("pretty-ms")

const {
    Client, MessageEmbed
} = Discord

const Tools = require('../../Tools/tools.js')

const { getUser, updateCases, getPercentagOfNum, convertNumToPercentage } = Tools
const { UserModel:UserStatsModel } = require("../../Tools/models")

const { lawyerRoles } = require("../../Data.json")

module.exports = {
    name        : "stats",
    description : "Shows stats about a user",

    async execute(client, message, args, cmd) {
        let { User, Member } = await getUser(message)
        if (!User) User = message.author
        if (!Member) Member = message.member

        if (!lawyerRoles.find(role => message.member.roles.cache.has(role))) return message.channel.send({
            content: `${message.author} You can't use this command`
        })

        const GetCases = await UserStatsModel.findOne({ _id: User.id })

        if (GetCases === null) return message.channel.send(DisplayMessage(null))

        await message.channel.send(DisplayMessage(GetCases))

        function DisplayMessage (Data) {
            const Total = (Data?.courtCasesWon || 0) + (Data?.courtCasesLost || 0)

            return {
                embeds: [
                    new MessageEmbed()
                    .setAuthor({
                        name: `${User.username}#${User.discriminator}`,
                        iconURL: Member.displayAvatarURL({ dynamic: true })
                    })
                    .setDescription(
                        `**Cases Total:** ${Total}\n`+

                        `**Won Cases:** ${Data?.courtCasesWon || 0} (${
                            Data?.courtCasesWon ?
                                convertNumToPercentage(Data?.courtCasesWon, Total)
                                :
                                0
                        }%)\n`+

                        `**Lost Cases:** ${Data?.courtCasesLost || 0} (${
                            Data?.courtCasesLost ?
                                convertNumToPercentage(Data?.courtCasesLost, Total)
                                :
                                0
                        }%)\n`+

                        `**Money Dropped:** ${Data?.moneyDropped || 0}\n`+
                        `**Jail Time:** ${Data?.jailTime ? pms(Data.jailTime) : "none"}`
                    )
                    .setColor("BLURPLE")
                ]
            }
        }
    }
}