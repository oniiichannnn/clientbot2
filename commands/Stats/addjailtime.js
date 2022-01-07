const Discord   = require("discord.js")
const mongoose  = require("mongoose")

const ms    = require("ms")
const pms   = require("pretty-ms")

const {
    Client, MessageEmbed
} = Discord

const Tools = require('../../Tools/tools.js')
const { UserModel } = require("../../Tools/models.js")

const { getUser, updateCases } = Tools

const { lawyerRoles } = require("../../Data.json")

module.exports = {
    name        : "addjailtime",
    description : "Adds jail time to a user",

    async execute(client, message, args, cmd) {
        const { User } = await getUser(message)

        if (!lawyerRoles.find(role => message.member.roles.cache.has(role))) return message.channel.send({
            content: `${message.author} You can't use this command`
        })

        if (!User) return message.channel.send({
            content: `${message.author} You need to mention a user or provide their user id!`
        })

        let Time
        try {
            const TimeContent = args
                .filter((arg, index) => index !== 0)
                .join(" ")

            Time = ms(TimeContent)
        } catch {
            return message.channel.send({
                content: `${message.author} You need to give me the amount of jail time to add to **${User.tag}**`
            })
        }

        const GetDb = await UserModel.findOne({ _id: User.id })
        if (GetDb === null) {
            await Tools.createUserStats({
                _id: User.id,
                jailTime: Time
            })
        } else {
            await GetDb.updateOne({
                jailTime: Time
            })
        }

        await message.channel.send({
            content: `Alright, I have added **${pms(Time, { verbose: true })}** jail time to **${User.tag}**`
        })
    }
}